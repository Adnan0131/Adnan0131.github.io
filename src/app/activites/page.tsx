import { Column, Flex, Heading } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/activites/Posts";
import { baseURL } from "@/app/resources";
import { activites, person, newsletter } from "@/app/resources/content";

export async function generateMetadata() {
	const title = activites.title;
	const description = activites.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: "website",
			url: `https://${baseURL}/activites`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Activites() {
	return (
		<Column maxWidth="s">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "ActivityFeed",
						headline: activites.title,
						description: activites.description,
						url: `https://${baseURL}/activites`,
						image: `${baseURL}/og?title=${encodeURIComponent(activites.title)}`,
						author: {
							"@type": "Person",
							name: person.name,
							image: {
								"@type": "ImageObject",
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			<Heading marginBottom="l" variant="display-strong-s">
				{activites.title}
			</Heading>
			<Column fillWidth flex={1}>
				<Posts range={[1,4]} thumbnail />
			</Column>
			{newsletter.display && <Mailchimp newsletter={newsletter} />}
		</Column>
	);
}
