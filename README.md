# Dipak Chaudhary: Portfolio

Personal portfolio built with Next.js 16, Tailwind CSS and shadcn/ui.

## Run it on your computer

Requires Node.js 20 or newer.

```bash
npm install
cp .env.example .env.local   # fill in later; the site runs without it
npm run dev
```

Open http://localhost:3000

## Live demo

https://portfolio-deepu59.vercel.app/

## Edit your content

Almost everything lives in one file: `constants/website-data.ts`
(name, summary, experience, projects, skills, education).
Change the text there and every page updates.

- Photo: replace `public/dipak.jpg`
- Colors: `app/globals.css` (the `:root` and `.dark` blocks)
- Fonts: `lib/fonts.ts`
- Site URL: `personal.website` in `constants/website-data.ts` (update it if your production domain changes)

## Turn on the backend features (optional)

| Feature | What you need |
| --- | --- |
| Contact form emails | Fill the `NODEMAILER_*`, `USER_MAILER`, `USER_TO` values. For Gmail, use an App Password. |
| View and love counters | Free MongoDB Atlas cluster, paste its connection string as `MONGODB_URI`. |
| Captcha (optional) | Free Cloudflare Turnstile keys. Leave empty to disable. |

Without these, the site still works: the contact form shows an error toast and counters show a message.

## Deploy free on Vercel

1. Push this folder to a new GitHub repository.
2. On vercel.com choose **Add New, Project** and import that repository.
3. In **Settings, Environment Variables** add the same values you put in `.env.local`.
4. Vercel automatically redeploys each push to the `main` branch.
