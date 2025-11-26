import { openapi } from "@/lib/source";

export const { GET, HEAD, PUT, POST, PATCH, DELETE } = openapi.createProxy({
	allowedOrigins: [
		"https://docs.imprun.io",
		"https://api.imprun.io/**",
		"http://localhost:3005",
		"http://localhost:4001/**",
		...(process.env.API_URL ? [process.env.API_URL] : []),
	],
});
