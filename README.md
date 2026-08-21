# Backend Developer Portfolio (Next.js)

Premium, dark-first developer portfolio built with Next.js (App Router), Tailwind CSS v4, and Framer Motion. Includes a custom animated circle cursor that follows the mouse and expands over clickable elements.

## Run it

npm install
npm run dev

Open http://localhost:3000

## Build for production

npm run build
npm start

## Personalize

Edit data/content.js — replace every [BRACKETED] placeholder (name, email, GitHub/LinkedIn, resume link, experience, projects) with your real info.

The contact form in components/Contact.jsx simulates a submit — wire handleSubmit up to your own backend/email service when ready.

## Custom cursor

components/CustomCursor.jsx renders a small dot plus a spring-trailing ring that follows the mouse and expands over any link, button, input, or element with data-cursor-hover. It auto-disables on touch devices (checks pointer: fine).

## Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- Framer Motion
- lucide-react icons
