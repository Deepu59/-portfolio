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


https://www.dipakchaudhari.com.np/


## Edit your content


Almost everything lives in one file: `constants/website-data.ts`
(name, summary, experience, projects, skills, education).
Change the text there and every page updates.


- Photo: replace `public/dipak.jpg`
- Colors: `app/globals.css` (the `:root` and `.dark` blocks)
- Fonts: `lib/fonts.ts`
- Site URL: `personal.website` in `constants/website-data.ts` (update it if your production domain changes)
