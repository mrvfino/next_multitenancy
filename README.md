## About
This project demonstrates multi-tenancy and wildcard subdomains with Next.js.

# Demo
https://pricekodo.com/

## Getting Started
1. Clone this repository.
2. Navigate to the `app` directory.
3. Run `npm install`.
4. Create a `.env.local` file based on the `.env.example` file.
5. Run `npm run dev`.
6. Explore the site at `localhost`!

## Configuring Your Wildcard Subdomains

1. Go to your website's `Settings` in Vercel.
2. Navigate to `Domains`.
3. Add your domain. (IMPORTANT: Choose the last option, which allows you to add your root domain directly. Do not select the "Recommended" option.)
4. Add your domain with the wildcard pattern, e.g., `*.yourdomain.com`.
5. Click the "Enable Vercel DNS" button.
6. Update the DNS settings in your domain registrar based on the values provided in step 5.
7. Refresh your domain settings.
8. Add the `NEXT_PUBLIC_ROOT_DOMAIN` environment variable to your project.
9. Redeploy!
