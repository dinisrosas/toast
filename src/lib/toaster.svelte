<script lang="ts">
	import Checkmark from '$lib/checkmark.svelte';
	import ErrorIcon from '$lib/error-icon.svelte';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	import toast from './store';
</script>

<div class="container">
	{#each $toast as notification (notification.id)}
		<div animate:flip class="box toast" transition:fly={{ y: 50 }}>
			{#if notification.type === 'success'}
				<Checkmark />
			{:else if notification.type === 'error'}
				<ErrorIcon />
			{/if}
			<p>{notification.message}</p>
		</div>
	{/each}
</div>

<style>
	:global(body) {
		font-family: sans-serif;
	}

	:root {
		--page-padding: 1rem;
		--gap: 8px;
		--gap-0-5: 4px;
		--gap-2: 16px;
		--shadow-small: 0 5px 10px rgba(0, 0, 0, 0.12);
		--border: 1px solid #ddd;
		--radii: 4px;
	}

	.box {
		border: var(--border);
		border-radius: var(--radii);
		background-color: white;
		padding: var(--gap);
	}

	.container {
		position: fixed;
		bottom: var(--page-padding);
		left: var(--page-padding);
		right: var(--page-padding);
		/* bottom: var(--page-padding); */
		padding: 0;
		z-index: 9999;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		pointer-events: none;
	}

	.toast {
		display: flex;
		gap: var(--gap-2);
		-moz-gap: var(--gap-2);
		-webkit-gap: var(--gap-2);
		align-items: center;
		background: white;
		box-shadow: var(--shadow-small);
		max-width: 350px;
		padding: 0px var(--gap-2);
		margin-bottom: var(--gap-0-5);
		font-weight: 500;
	}
</style>
