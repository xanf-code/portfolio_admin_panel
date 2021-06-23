<script>
	import { projectData, loading } from '../stores/projectstore';
	import ProjectComponent from '../components/getProjects.svelte';
</script>

<main>
	<section>
		{#if $loading == true}
			<h1>Loading...</h1>
		{:else}
			<h1 class="text-center mt-6 text-poppins font-bold">All Projects</h1>
			<a href="/addProject">
				<div class="bg-yellow-400 rounded-md m-4 cursor-pointer">
					<h1 class="text-center p-4 text-black font-base font-poppins">Add New Project</h1>
				</div>
			</a>
			{#each $projectData as project}
				<ProjectComponent projectRes={project} />
			{/each}
		{/if}
	</section>
</main>
