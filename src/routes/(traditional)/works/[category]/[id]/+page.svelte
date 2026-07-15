<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	// Components
	import Project from '$lib/components/Project/Project.svelte';
	import { works } from '$lib/works';

	$: work = works[data.category]?.projects.find((p: any) => p.id === data.id);
</script>

<svelte:head>
	<title>{work ? `${work.name} — Wissem Bousdira` : 'Wissem Bousdira — Portfolio'}</title>
</svelte:head>

<Project {data} />
