# Actime Analytics website

A self-contained static recreation of the authorized Actime Analytics preview, including its seven main views and generated image assets.

The canonical and social-sharing domain is configured as `https://actimeanalytics.com/`.
The content and careers/contact flows reflect the latest captured preview. The public contact address in this project is `info@actimeanalytics.com`.

## Run it

Open `index.html` in a browser. Navigation uses hash routes, so it works without a build step or server:

- `index.html#/` — Home
- `index.html#/services` — Services
- `index.html#/solutions` — Solutions
- `index.html#/industries` — Industries
- `index.html#/insights` — Insights
- `index.html#/about` — About
- `index.html#/careers` — Careers
- `index.html#/contact` — Contact

The careers and contact forms are front-end demos; submissions and uploaded resumes are not stored or delivered.

## Publish on the custom domain

This project is configured to deploy from the `actime-site-clone` branch to GitHub Pages using `.github/workflows/deploy-pages.yml`. The custom domain file is `CNAME`.

1. Push the `actime-site-clone` branch to the GitHub repository.
2. In the GitHub repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. In your domain registrar's DNS settings, point the apex (`@`) to GitHub Pages with these `A` records:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
4. Optionally add `www` as a `CNAME` to `<your-github-owner>.github.io` if you want the `www` address to resolve too.
5. After DNS propagates and the Pages deployment succeeds, enable **Enforce HTTPS** in **Settings → Pages**.

The domain currently displays a GoDaddy parked page. These project files cannot change the domain's DNS or publish to GitHub without repository access. The contact form remains a front-end demo and does not deliver submissions.
