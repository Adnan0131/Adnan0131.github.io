/** @type {import("next").NextConfig} */
const config = {
	/* config options here */
	output: "export",
	images: {
		unoptimized: true,
	},
	experimental: {
		serverComponentsExternalPackages: [
			"three",
			"@react-three/fiber",
			"@react-three/drei",
		],
	},
};

export default config;
