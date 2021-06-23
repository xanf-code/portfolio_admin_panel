<script>
	export let projectRes;
	function clickhandler(id) {
		fetch(`https://darshanaswathportfolio.herokuapp.com/projects/${id}`, {
			method: 'delete'
		}).then((res) => {
			if (res.status == 200) {
				alert('Success');
			} else {
				alert('something went wrong');
			}
		});
	}
</script>

<div class="m-4 bg-gray-50 hover:translate-x-1 cursor-pointer">
	<div class="flex justify-between">
		<div class="p-4">
			<h1 class="font-semibold font-poppins">{projectRes.projectName}</h1>
			<span class="font-poppins text-sm text-gray-500">{projectRes.projectDescription}</span>
		</div>
		<div class="self-center">
			<button on:click={clickhandler(projectRes._id)} class="btn">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-6 h-6 mr-2 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
				Delete
			</button>
		</div>
	</div>
</div>
