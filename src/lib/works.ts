// Renders a row of clickable GitHub buttons for a project's `details` array.
const linksBlock = (links: { label: string; url: string }[]): string =>
	`<div class="flex flex-wrap gap-2 pt-1">${links
		.map(
			(l) =>
				`<a href="${l.url}" target="_blank" rel="noreferrer" class="btn btn-sm variant-soft hover:variant-filled-primary">${l.label} &rarr;</a>`
		)
		.join('')}</div>`;

// Generates a lightweight branded placeholder thumbnail for projects without a captured screenshot yet.
const placeholderThumb = (label: string, color: string): string => {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="480" viewBox="0 0 480 480">
		<defs>
			<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stop-color="${color}" />
				<stop offset="100%" stop-color="#0f172a" />
			</linearGradient>
		</defs>
		<rect width="480" height="480" fill="url(#g)" />
		<circle cx="400" cy="80" r="140" fill="#ffffff" fill-opacity="0.06" />
		<circle cx="60" cy="420" r="110" fill="#ffffff" fill-opacity="0.06" />
		<text x="240" y="230" text-anchor="middle" font-family="system-ui, sans-serif" font-size="30" font-weight="700" fill="#ffffff">${label}</text>
		<text x="240" y="266" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" letter-spacing="3" fill="#ffffff" fill-opacity="0.65">LIVE DEMO</text>
	</svg>`;
	return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

export const works: any = {
	Web: {
		label: 'Web',
		projects: [
			{
				id: 'TicketTrain',
				name: 'TicketTrain',
				details: [
					"Le projet 'TicketTrain' a pour objectif la création d'un site de réservation de billets de trains. Ce projet combine le développement de la partie frontend et backend pour offrir une expérience de réservation fluide.",
					linksBlock([
						{ label: 'Frontend', url: 'https://github.com/Wissemedd/TicketTrain-Front' },
						{ label: 'Backend', url: 'https://github.com/Wissemedd/TicketTrain-Back' }
					])
				],
				technology: 'JavaScript, HTML, CSS',
				url: 'https://ticket-train.vercel.app/',
				coords: { x: 113, y: 102 },
				accent: '#242c46',
				thumbnail: 'https://i.imgur.com/121CTF5.jpg',
				videos: [
					{
						src: 'https://www.youtube.com/embed/LmlPl6Wf258',
						caption: linksBlock([{ label: 'Voir sur YouTube', url: 'https://youtu.be/LmlPl6Wf258' }])
					}
				],
				screenshots: [
					{ src: 'https://i.imgur.com/sHrw8Hk.jpg', caption: 'Homepage' },
					{ src: 'https://i.imgur.com/hAbni1w.jpg', caption: 'No Trip Found' },
					{ src: 'https://i.imgur.com/HKfyW1T.jpg' },
					{ src: 'https://i.imgur.com/mY28IJg.jpg' },
					{ src: 'https://i.imgur.com/jG6iYZ0.jpg' }
				]
			},
			{
				id: 'WeatherApp',
				name: 'WeatherApp',
				details: [
					'WeatherApp est une application qui affiche la météo des villes que vous aurez saisies.',
					'On y retrouve : HTML, CSS, le responsive, la mise en place du Backend et les échanges client/serveur.',
					linksBlock([
						{ label: 'Frontend', url: 'https://github.com/Wissemedd/WeatherApp-Front' },
						{ label: 'Backend', url: 'https://github.com/Wissemedd/WeatherApp-Back' }
					])
				],
				technology: 'HTML, CSS, JavaScript',
				url: 'https://weather-app-wissemedd.vercel.app',
				coords: { x: 14, y: 12 },
				accent: '#242c46',
				thumbnail: 'https://i.imgur.com/ITQzulL.png',
				videos: [],
				screenshots: [
					{ src: 'https://i.imgur.com/dJNH3CI.png' },
					{ src: 'https://i.imgur.com/6wpXGFK.png' }
				]
			},
			{
				id: 'Hackatweet',
				name: 'Hackatweet',
				details: [
					"L'objectif de ce projet est de créer un réseau social basé sur le site Twitter.",
					linksBlock([
						{ label: 'Frontend', url: 'https://github.com/Wissemedd/HackaTweet-frontend' },
						{ label: 'Backend', url: 'https://github.com/Wissemedd/HackaTweet-back' }
					])
				],
				technology: 'HTML, CSS, JavaScript',
				url: 'https://hacka-tweet-frontend.vercel.app/',
				coords: { x: 29, y: 101 },
				accent: '#34d399',
				thumbnail: 'https://i.imgur.com/666WD5B.png',
				videos: [],
				screenshots: [
					{ src: 'https://i.imgur.com/5GxLnQ9.jpg' },
					{ src: 'https://i.imgur.com/kbcZdtw.jpg' },
					{ src: 'https://i.imgur.com/73wY2GP.jpg' }
				]
			},
			{
				id: 'MyMovies',
				name: 'MyMovies',
				details: [
					"Dans ce projet on offre la possibilité à l'utilisateur de retrouver tous les films disponibles sur l'API de TMDB avec leurs informations (poster, note, synopsis...) et la possibilité de liker, ajouter aux favoris et indiquer combien de fois on a vu le film.",
					linksBlock([
						{ label: 'Frontend', url: 'https://github.com/Wissemedd/MyMovies-frontend' },
						{ label: 'Backend', url: 'https://github.com/Wissemedd/MyMovies-backend' }
					])
				],
				technology: 'JavaScript, CSS, Next.js, Express',
				url: 'https://my-movies-teal.vercel.app',
				coords: { x: 51, y: 91 },
				accent: '#818cf8',
				thumbnail: 'https://imgur.com/EIOaApz.png',
				videos: [],
				screenshots: [
					{ src: 'https://imgur.com/6nuoQJ9.png', caption: 'Le résultat du fetch avec les favoris sur le coin droit' },
					{ src: 'https://imgur.com/KD4Qecb.png', caption: 'les informations de chaque film avec la possibilité de rajouter sa note personnelle' }
				]
			},
			{
				id: 'Morning News',
				name: 'Morning News',
				details: [
					'Ce projet est une SPA qui récupère les articles du journal "The Verge" via une API. Vous pouvez y accéder sans forcément avoir de compte, mais en créer un vous permet de sauvegarder les articles qui vous semblent les plus pertinents et cacher ceux qui ne vous intéressent pas.',
					linksBlock([
						{ label: 'Frontend', url: 'https://github.com/Wissemedd/MorningNews-frontend' },
						{ label: 'Backend', url: 'https://github.com/Wissemedd/MorningNews-backend' }
					])
				],
				technology: 'CSS, JavaScript, Next.js, Express.js, API',
				url: 'https://morning-news-frontend-six.vercel.app/',
				coords: { x: 72, y: 111 },
				accent: '#4c1d95',
				thumbnail: 'https://imgur.com/s5AYzjv.jpg',
				videos: [],
				screenshots: [
					{ src: 'https://imgur.com/Tk2d0XJ.png', caption: "page d'accueil du site avec les différents articles disponibles" },
					{ src: 'https://imgur.com/TBfRgeI.png', caption: "L'onglet pour se connecter et s'inscrire" },
					{ src: 'https://imgur.com/IYtpysW.png', caption: "cliquer sur une icone vous permet de sauvegarder un Article en Bookmarks ou d'en cacher un" },
					{
						src: 'https://imgur.com/pXLk8oh.png',
						caption: "l'onglet Bookmarks avec les différents articles sauvegardés"
					}
				]
			},
			{
				id: 'Galaxy simulator',
				name: 'Galaxy simulator',
				details: [
					'Ce projet est une simulation de milliers de particules reproduisant la gravité pour simuler des galaxies. Il utilise ThreeJS pour le rendu 3D et des shaders pour calculer en temps réel le mouvement des particules.'
				],
				technology: 'CSS, JavaScript, Three.js, GLSL, Shaders',
				url: 'https://galaxy-simulator.vercel.app/',
				coords: { x: 14, y: 34 },
				accent: '#4c1d95',
				thumbnail: 'https://imgur.com/ZDqvhoz.png',
				videos: [],
				screenshots: [
					{ src: 'https://imgur.com/IHV28v7.png', caption: 'On peut simuler un univers en expansion' },
					{ src: 'https://imgur.com/hHNfsLb.png', caption: 'Ou alors une seule galaxie' },
					{ src: 'https://imgur.com/WPKe4Cl.png', caption: 'Ou encore la collision entre 2 galaxies' }
				]
			},
			{
				id: 'Pokedex',
				name: 'Pokedex',
				details: [
					"Un Pokédex en JavaScript vanille qui interroge la PokeAPI pour afficher chaque Pokémon avec son sprite, son nom et son type, avec une navigation pour parcourir l'ensemble du Pokédex.",
					linksBlock([{ label: 'Repo', url: 'https://github.com/Wissemedd/Pokedex' }])
				],
				technology: 'HTML, CSS, JavaScript, PokeAPI',
				url: 'https://pokedex-wissemedd.vercel.app',
				coords: { x: 43, y: 11 },
				accent: '#dc2626',
				thumbnail: placeholderThumb('Pokedex', '#dc2626'),
				videos: [],
				screenshots: []
			},
			{
				id: 'Memory Game',
				name: 'Memory Game',
				details: [
					'Un jeu de memory développé avec Next.js : on retourne les cartes deux par deux pour retrouver les paires identiques le plus rapidement possible.',
					linksBlock([{ label: 'Repo', url: 'https://github.com/Wissemedd/Memory-Game' }])
				],
				technology: 'Next.js, JavaScript, CSS',
				url: 'https://memory-game-mu-henna.vercel.app/',
				coords: { x: 79, y: 13 },
				accent: '#0891b2',
				thumbnail: placeholderThumb('Memory Game', '#0891b2'),
				videos: [],
				screenshots: []
			},
			{
				id: 'LExorcisme',
				name: "L'Exorcisme des Cheveux Roux",
				details: [
					"Site vitrine réalisé pour la promotion d'un spectacle de comédie (\"L'Exorcisme des Cheveux Roux — Comédie Sacrée\"), avec une interface moderne construite à partir de composants shadcn-ui.",
					linksBlock([{ label: 'Repo', url: 'https://github.com/Wissemedd/LExorcisme' }])
				],
				technology: 'React, TypeScript, Vite, shadcn-ui, Tailwind CSS',
				url: 'https://l-exorcisme.vercel.app',
				coords: { x: 48, y: 35 },
				accent: '#c2410c',
				thumbnail: placeholderThumb("L'Exorcisme", '#c2410c'),
				videos: [],
				screenshots: []
			},
			{
				id: 'Yousra El Hadi',
				name: 'Yousra El Hadi',
				details: [
					'Site portfolio réalisé pour l\'artiste Yousra El Hadi, auteure-compositrice-interprète, pour présenter son parcours et son EP "Silly Piece of Paper". Développé avec Next.js et des shaders WebGL personnalisés pour son identité visuelle.',
					linksBlock([{ label: 'Repo', url: 'https://github.com/Wissemedd/Yousra-el-hadi' }])
				],
				technology: 'Next.js, TypeScript, WebGL, Tailwind CSS',
				url: 'https://yousra-el-hadi.vercel.app',
				coords: { x: 48, y: 62 },
				accent: '#4338ca',
				thumbnail: placeholderThumb('Yousra El Hadi', '#4338ca'),
				videos: [],
				screenshots: []
			}
		]
	},
	Mobile: {
		label: 'Mobile',
		projects: [
			{
				id: 'Zero',
				name: 'Zero',
				details: [
					'Objectifs : Simplifier les échanges entre entreprises et associations pour optimiser la gestion des produits invendus.',
					'Bénéfices : Libération de l\'espace de stockage, avantages fiscaux, amplification de l\'impact social.',
					"Afin de tester l'application, vous aurez besoin d'installer 'Expo' sur votre téléphone et scanner le QR code correspondant à votre mobile, grâce à ça vous pourrez naviguer librement sur l'application.",
					linksBlock([{ label: 'Backend', url: 'https://github.com/Wissemedd/Zerobackdep' }])
				],
				technology: 'React Native, JavaScript, CSS',
				coords: { x: 115, y: 61 },
				accent: '#5a253f',
				thumbnail: 'https://imgur.com/dFkEmq9.png',
				videos: [
					{
						src: 'https://www.youtube.com/embed/Z1o9WQATn4c',
						caption: linksBlock([{ label: 'Voir sur YouTube', url: 'https://youtu.be/Z1o9WQATn4c' }])
					}
				],
				screenshots: [
					{ src: 'https://imgur.com/9agvkBL.png', caption: 'StoryBoard Association' },
					{ src: 'https://imgur.com/uz9VrUw.png', caption: 'StoryBoard Entreprise' },
					{ src: 'https://imgur.com/NXDWbpg.png', caption: 'UI KIT' },
					{ src: 'https://imgur.com/vLwzIny.png', caption: "Architecture de l'application" },
					{ src: 'https://imgur.com/kH6dhtU.png', caption: 'déploiement Android' },
					{ src: 'https://imgur.com/hhcGUiS.png', caption: 'déploiement IOS' }
				]
			},
			{
				id: 'ChattApp',
				name: 'ChattApp',
				details: [
					"Application mobile de messagerie développée avec React Native et Expo, connectée à une API Express dédiée à la gestion des utilisateurs et des conversations.",
					linksBlock([
						{ label: 'Frontend', url: 'https://github.com/Wissemedd/ChattApp-front' },
						{ label: 'Backend', url: 'https://github.com/Wissemedd/ChattApp' }
					])
				],
				technology: 'React Native, Expo, JavaScript, Express',
				coords: { x: 110, y: 12 },
				accent: '#059669',
				thumbnail: placeholderThumb('ChattApp', '#059669'),
				videos: [],
				screenshots: []
			}
		]
	}
};
