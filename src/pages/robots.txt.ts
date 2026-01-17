import type { APIRoute } from 'astro'

export const GET: APIRoute = ({ site }) => {
	const sitemapURL = site ? new URL('sitemap-index.xml', site).href : undefined

	const robotsTxt = `
User-agent: *
Allow: /

User-agent: GPTBot
Disallow: /

User-agent: CCBot
Disallow: /

${sitemapURL ? `Sitemap: ${sitemapURL}` : ''}
`.trim()

	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	})
}
