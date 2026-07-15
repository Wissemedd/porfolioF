<script lang="ts">
	const socialLinks: any[] = [
		{ name: 'Github', url: 'https://github.com/Wissemedd' },
		{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/wissem-bousdira-015b68199/' },
	];
</script>

<footer class="space-y-4">
	<hr class="opacity-30" />
	<div class="flex justify-between items-center text-xs">
		<nav class="grid grid-cols-4 gap-1">
			{#each socialLinks as site}
				<a class="btn btn-sm hover:variant-filled-primary" href={site.url} target="_blank">{site.name}</a>
			{/each}
		</nav>
		<a class="btn btn-sm hover:variant-filled-secondary" href="mailto:wbousdira@gmail.com">Email</a>
	</div>
</footer>
