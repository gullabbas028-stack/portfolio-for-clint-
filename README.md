# Muhammad Ashfaq — Cyber Security Portfolio

A responsive React portfolio built for Muhammad Ashfaq (BS Cyber Security student, CEH trained),
with a terminal-inspired hero, animated CEH methodology timeline, skills, education/certifications,
and a working contact form that emails messages straight to Gmail.

## Tech stack
- React 18 + Vite
- Tailwind CSS
- Framer Motion (animations)
- EmailJS (contact form → Gmail, no backend needed)

## 1. Install & run locally

```bash
npm install
npm run dev
```

Open the printed local URL in your browser.

## 2. Connect the contact form to Gmail (EmailJS — free)

The form is wired to EmailJS so messages land directly in `ashfaqpro9852@gmail.com` — no server needed.

1. Create a free account at https://www.emailjs.com
2. **Add Email Service** → choose Gmail → connect the Gmail account that should receive messages.
   Copy the **Service ID**.
3. **Create Email Template** with these variables (already sent by the form):
   `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{to_email}}`.
   A simple template body:
   ```
   New message from {{from_name}} ({{from_email}})

   {{message}}
   ```
   Copy the **Template ID**.
4. Go to **Account → General** and copy your **Public Key**.
5. Open `src/data.js` and fill in:
   ```js
   export const emailjsConfig = {
     serviceId: "service_xxxxxxx",
     templateId: "template_xxxxxxx",
     publicKey: "xxxxxxxxxxxxxxxx",
   };
   ```
6. Rebuild (`npm run build`) or restart `npm run dev`. Test the form — you should receive the
   message in the connected Gmail inbox within a few seconds.

Until these values are filled in, the form will show a friendly message telling the visitor
that it isn't connected yet — it will never fail silently.

## 3. Editing content

Everything text-based — name, summary, education, certifications, skills, contact details —
lives in **`src/data.js`**. Edit that one file to update the whole site.

## 4. Build for production

```bash
npm run build
```

Output goes to the `dist/` folder — this is what you upload/deploy.

## 5. Deploy

**Vercel**
```bash
npm i -g vercel
vercel
```
Follow the prompts (framework preset: Vite).

**Netlify**
- Drag-and-drop the `dist/` folder at https://app.netlify.com/drop, or
- `npm i -g netlify-cli && netlify deploy --prod --dir=dist`

**cPanel / shared hosting**
1. Run `npm run build`.
2. Zip the contents of the `dist/` folder (not the folder itself).
3. Upload and extract into `public_html` (or a subdomain folder) via File Manager.

## Notes
- Fully responsive: mobile, tablet, and desktop.
- Respects `prefers-reduced-motion` for accessibility.
- Favicon is a custom shield mark at `public/shield.svg`.
- Update the WhatsApp number / email in `src/data.js` under `profile` and `socials` if they change.
