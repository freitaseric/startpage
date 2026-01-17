import { OGImageRoute } from 'astro-og-canvas'

export const { GET } = await OGImageRoute({
	param: 'og',
	pages: {
		default: {
			title: 'StartPage',
			description: 'Productivity Hub & Developer Tools',
		},
	},
	getImageOptions: (_, page) => ({
		title: page.title,
		description: page.description,
		bgGradient: [[24, 24, 27]],
		logo: {
			path: './public/favicon.svg',
			size: [100],
		},
		font: {
			title: {
				size: 80,
				color: [255, 255, 255],
				weight: 'Bold',
				families: ['Inter', 'sans-serif'],
			},
			description: {
				size: 40,
				color: [161, 161, 170],
				families: ['Inter', 'sans-serif'],
			},
		},
	}),
})
