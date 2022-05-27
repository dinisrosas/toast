<script>
	import toast from '$lib/store';

	function show() {
		toast.show('This is a default message');
	}
  
	function success() {
		toast.success('This is a success message');
	}

	function error() {
		toast.error('This is a error message');
	}
</script>

<button on:click={show}>show toast</button>
<button on:click={success}>show success toast</button>
<button on:click={error}>show error toast</button>
