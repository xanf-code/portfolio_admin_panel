<script>
	let index = '';
	let name = '';
	let desc = '';
	let slug = '';
	let link = '';
	let images = '';
	let tags = '';
	let tagArray = [];
	let imageArray = [];

	function addToTagsList() {
		if (tags != '') {
			tagArray.push(tags);
			tags = '';
		} else {
			alert('something went wrong!');
		}
	}

	function addToImagesList() {
		if (images != '') {
			imageArray.push(images);
			images = '';
		} else {
			alert('something went wrong!');
		}
	}

	function clickhandler(e) {
		e.preventDefault();
		fetch('https://darshanaswathportfolio.herokuapp.com/projects', {
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				index: index,
				projectName: name,
				projectDescription: desc,
				projectSlug: slug,
				projectLink: link,
				projectImage: imageArray,
				projectTags: tagArray
			})
		}).then(() => {
			alert('Success');
		});
	}
</script>

<div>
	<div class="flex flex-col">
		<div class="mx-2 my-2">
			<label class="font-poppins font-semibold" for="">Index</label>
			<input
				class="w-full rounded-md p-4 border-2 border-gray-200"
				type="text"
				bind:value={index}
				placeholder="Add Index"
			/>
		</div>
		<div class="mx-2 my-2">
			<label class="font-poppins font-semibold" for="">Name</label>
			<input
				class="w-full rounded-md p-4 border-2 border-gray-200"
				type="text"
				bind:value={name}
				placeholder="Add Name"
			/>
		</div>
		<div class="mx-2 my-2">
			<label class="font-poppins font-semibold" for="">Description</label>
			<input
				class="w-full rounded-md p-4 border-2 border-gray-200"
				type="text"
				bind:value={desc}
				placeholder="Add Description"
			/>
		</div>
		<div class="mx-2 my-2">
			<label class="font-poppins font-semibold" for="">Slug</label>
			<input
				class="w-full rounded-md p-4 border-2 border-gray-200"
				type="text"
				bind:value={slug}
				placeholder="Add Slug"
			/>
		</div>
		<div class="mx-2 my-2">
			<label class="font-poppins font-semibold" for="">Project Link</label>
			<input
				class="w-full rounded-md p-4 border-2 border-gray-200"
				type="text"
				bind:value={link}
				placeholder="Add Link"
			/>
		</div>
		<div class="flex">
			<div class="mx-2 my-2">
				<label class="font-poppins font-semibold" for="">Add Images</label>
				<input
					class="w-full rounded-md p-4 border-2 border-gray-200"
					type="text"
					bind:value={images}
					placeholder="Add Images"
				/>
			</div>
			<button on:click={addToImagesList} class="self-center">Add</button>
		</div>
		<div class="flex">
			<div class="mx-2 my-2">
				<label class="font-poppins font-semibold" for="">Add Tags</label>
				<input
					class="w-full rounded-md p-4 border-2 border-gray-200"
					type="text"
					bind:value={tags}
					placeholder="Add Tags"
				/>
			</div>
			<button on:click={addToTagsList} class="self-center">Add</button>
		</div>
	</div>
	<div>
		<button on:click={clickhandler}>submit</button>
	</div>
</div>
