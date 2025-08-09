export default {
	providers: [
		{
			// Replace with your own Clerk Issuer URL from your "convex" JWT template
			// or with `process.env.CLERK_JWT_ISSUER_DOMAIN`
			// and configure CLERK_JWT_ISSUER_DOMAIN on the Convex Dashboard
			// See https://docs.convex.dev/auth/clerk#configuring-dev-and-prod-instances
			domain: (() => {
				if (!process.env.CLERK_JWT_ISSUER_DOMAIN) {
					throw new Error(
						"Environment variable CLERK_JWT_ISSUER_DOMAIN is not defined.",
					);
				}
				return process.env.CLERK_JWT_ISSUER_DOMAIN;
			domain: getClerkJwtIssuerDomain(),
			applicationID: "convex",
		},
	],
};
