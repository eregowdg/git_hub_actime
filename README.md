# Actime Analytics website

A self-contained static recreation of the authorized Actime Analytics preview, including its seven main views and generated image assets.

The canonical and social-sharing domain is configured as `https://actimeanalytics.com/`.

## Run it

Open `index.html` in a browser. Navigation uses hash routes, so it works without a build step or server:

- `index.html#/` — Home
- `index.html#/services` — Services
- `index.html#/solutions` — Solutions
- `index.html#/industries` — Industries
- `index.html#/insights` — Insights
- `index.html#/about` — About
- `index.html#/contact` — Contact

The contact form is a front-end demo and does not deliver submissions.

## Publish on the custom domain

The domain currently displays a GoDaddy parked page. The site files do not change domain DNS or publish themselves. To make the site live, deploy this folder to a static web host, configure `actimeanalytics.com` as the site's custom domain in that host, and update the domain's GoDaddy DNS records to the values provided by the host. Enable HTTPS at the host. Keep the bare domain as the preferred canonical domain, and configure `www.actimeanalytics.com` to redirect to it if desired.
