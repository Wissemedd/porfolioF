<script lang="ts">
	const skills: Record<string, string[]> = {
		Frontend: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Svelte', 'Tailwind CSS', 'Three.js', 'Pixi.js'],
		Mobile: ['React Native', 'Expo'],
		Backend: ['Node.js', 'Express.js', 'API REST'],
		Outils: ['Git', 'GitHub', 'Vercel', 'Figma']
	};

	const contactLinks: { name: string; url: string }[] = [
		{ name: 'Email', url: 'mailto:wbousdira@gmail.com' },
		{ name: 'GitHub', url: 'https://github.com/Wissemedd' },
		{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/wissem-bousdira-015b68199/' }
	];
</script>

<!-- Columns -->
<div class="lg:grid grid-cols-10 gap-10 mt-10 space-y-8 lg:space-y-0">
	<!-- Portrait -->
	<div class="col-span-2 flex flex-col items-center space-y-8">
		<img
			src="https://i.imgur.com/ZVSfZzq.png"
			class="crisp bg-secondary-500 w-full max-w-[250px] aspect-square rounded-full shadow-xl"
			alt="Portrait de Wissem Bousdira"
		/>
		<a
			href="https://traditional-portfolio.vercel.app/static/media/CV%20Wissem%20BOUSDIRA.97e653b8bc10e3f82eaa.pdf"
			class="inline-block btn variant-soft hover:variant-filled-primary"
			target="_blank"
			rel="noreferrer"
		>
			Voir mon CV
		</a>
		<nav class="flex flex-wrap justify-center gap-2">
			{#each contactLinks as link}
				<a class="btn btn-sm variant-soft hover:variant-filled-secondary" href={link.url} target="_blank" rel="noreferrer">
					{link.name}
				</a>
			{/each}
		</nav>
	</div>

	<!-- Bio -->
	<section class="col-span-5 space-y-4">
		<h2 class="h2 section-header">À propos de Wissem</h2>
		<p>
			Bonjour et bienvenue ! Vous trouverez ici une présentation de mes projets. Je me consacre pleinement à la
			construction d'une carrière dans l'IT. Titulaire d'un diplôme de chef de projet en développement web et mobile, je prends toujours le
			temps de me former, d'expérimenter et d'apprendre un peu plus chaque jour.
		</p>
		<p>
			J'ai découvert ma passion pour la programmation en concevant mes premiers sites web au cours de mes expériences
			professionnelles précédentes. J'apprécie particulièrement la maîtrise que l'on a sur tout ce qui se passe à
			l'écran, ainsi que la satisfaction de résoudre un problème ou de créer un produit qui répond à un besoin réel.
		</p>
		<p>
			Cette passion s'est nourrie d'un parcours varié, avant d'aboutir à une carrière traversant plusieurs univers :
			la photographie, le commerce, le secteur public, l'éducation et l'événementiel, avant de devenir développeur à
			mon compte.
		</p>
		<p>
			Je pense que ma force réside autant dans le développement et la conception d'interfaces utilisateur que dans la
			résolution de problèmes concrets. J'aime écouter, apprendre et identifier ce qui est vraiment nécessaire pour
			relever un défi, et j'accompagne chaque étape du processus, de la conception à la réalisation. Que vous cherchiez
			à créer un site, une application, ou à donner vie à une idée, mes compétences sont à votre disposition !
		</p>
	</section>

	<!-- Skills -->
	<section class="col-span-3 space-y-4">
		<h2 class="h2 section-header">Compétences</h2>
		{#each Object.entries(skills) as [category, items]}
			<div class="space-y-2">
				<h6 class="h6 font-bold uppercase opacity-75">{category}</h6>
				<div class="flex flex-wrap gap-2">
					{#each items as skill}
						<span class="chip variant-soft">{skill}</span>
					{/each}
				</div>
			</div>
		{/each}
	</section>
</div>
