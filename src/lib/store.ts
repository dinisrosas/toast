import { writable } from 'svelte/store';

type Toast = {
	id: string;
	type: string;
	message: string;
};

function createToastStore() {
	const toasts = writable<Toast[]>([]);

	function send(message: string, type = 'default') {
		const id = crypto.randomUUID();

		setTimeout(() => {
			toasts.update((state) => {
				return state.filter((toast: Toast) => toast.id !== id);
			});
		}, 3000);

		toasts.update((state) => {
			return [...state, { id, type, message }];
		});
	}

	return {
		subscribe: toasts.subscribe,
		show: (message: string) => send(message),
		error: (message: string) => send(message, 'error'),
		success: (message: string) => send(message, 'success')
	};
}

export default createToastStore();
