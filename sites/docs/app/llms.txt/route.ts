import { source } from "@/lib/source";

export const revalidate = false;

export async function GET() {
	const pages = source.getPages();

	// Group pages by section
	const sections = new Map<string, Array<{ title: string; url: string; description: string }>>();

	for (const page of pages) {
		const parts = page.url.split('/').filter(Boolean);
		// Group root-level pages and single-segment pages under 'getting-started'
		// Multi-segment pages use their first segment as section
		let section: string;
		if (parts.length === 0 || parts.length === 1) {
			section = 'getting-started';
		} else {
			section = parts[0];
		}

		if (!sections.has(section)) {
			sections.set(section, []);
		}

		sections.get(section)!.push({
			title: page.data.title,
			url: `/llms.mdx${page.url}`,
			description: page.data.description || '',
		});
	}

	// Map section names to Korean titles
	const sectionTitles: Record<string, string> = {
		'getting-started': '시작하기',
		'guides': '가이드',
		'functions': '함수 개발',
		'api': 'API Reference',
	};

	// Build llms.txt content
	let content = `# imprun.dev

> imprun Platform 문서

`;

	// Add sections
	for (const [section, items] of sections) {
		const title = sectionTitles[section] || section;
		content += `## ${title}\n\n`;

		for (const item of items) {
			content += `- [${item.title}](${item.url})`;
			if (item.description) {
				content += ` - ${item.description}`;
			}
			content += '\n';
		}

		content += '\n';
	}

	return new Response(content.trim());
}
