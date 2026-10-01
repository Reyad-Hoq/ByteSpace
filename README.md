# ByteSpace 🚀

A modern online course marketplace built with Next.js and TypeScript, designed to connect learners with creators across diverse educational categories.

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js** | App Router, SSR, image optimization |
| **TypeScript** | Type-safe components and data models |
| **Motion Dev** | Smooth marquee animations and scroll transitions |
| **HeroUI** | Form components, buttons, search fields, select inputs |
| **Lucide React** | Iconography throughout the UI |
| **Gravity UI** | Supplementary icon set for navigation and actions |
| **Tailwind CSS** | Utility-first styling with custom design tokens |

---

## ✨ Features

- **Hero Section** — Full-screen landing with animated search bar, floating course cards, learning progress widget and happy students badge
- **Category Filter** — Interactive tag-based course filtering with show more/less toggle
- **Logo Marquee** — Infinite scrolling partner logos powered by Motion Dev
- **Course Grid** — Responsive 3-column course cards with thumbnail overlays, ratings, student avatars and pricing
- **Category Cards** — Icon-based category navigation grid
- **About Section** — Two-row split layout with floating stat cards and revenue dashboards
- **Creator Banner** — Full-width CTA section with decorative lemon and white shapes
- **Testimonials** — Community reviews in a responsive card grid
- **Register Page** — Split-screen auth page with floating UI previews and a clean sign-up form
- **Footer** — Newsletter subscription, link columns and bottom copyright bar

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Reyad-Hoq/ByteSpace.git

# Navigate to the project
cd bytespace

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure
bytespace/
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ └── (auth)/
│       ├── register/
│       └── signin/
├── components/
│ └── SectTwo/
│ │     ├── CategoryCards.tsx
│ │     ├── Course.tsx
│ │     └── Tags.tsx
│ │      
│ ├── AboutSect.tsx
│ ├── CreatorSect.tsx
│ ├── Footer.tsx
│ ├── HappyStudentsCard.tsx
│ ├── HeroSect.tsx
│ ├── Navbar.tsx
│ ├── SearchField.tsx
│ ├── SectOne.tsx
│ ├── SectTwo.tsx
│ └── TestimonialsSect.tsx
├── assets/
│ ├── courses/
│ ├── shapes/
│ ├── students/
│ └── testimonials/
└── public/


---

## 🎨 Design Tokens

```ts
// tailwind.config.ts
colors: {
  primary:   "#003be2",  // Blue
  secondary: "#D4FB20",  // Lemon Green
}
```
## 🖋 Fonts

| Font | Usage | Source |
|---|---|---|
| **Clash Display** | Hero headings, section titles | [Fontshare](https://www.fontshare.com/fonts/clash-display) |
| **Satoshi** | Body text, descriptions, labels | [Fontshare](https://www.fontshare.com/fonts/satoshi) |
| **Poppins** | Buttons, badges, card titles | [Google Fonts](https://fonts.google.com/specimen/Poppins) |

Clash Display and Satoshi are self-hosted via `@font-face` in `globals.css`.  
Poppins is loaded via Google Fonts in `layout.tsx`.

> Download Clash Display and Satoshi from [Fontshare](https://www.fontshare.com)  
> and place the files in `public/fonts/` before running the project.
---

## 📦 Dependencies

```bash
npm install next react react-dom typescript
npm install motion
npm install @heroui/react
npm install lucide-react
npm install @gravity-ui/icons
npm install tailwindcss
```

---

## 🔗 Live Demo

[bytespace-new-project.vercel.app](https://bytespace-new-project.vercel.app/)

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

- Design inspired by [Figma Design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website)
- Icons from [Lucide](https://lucide.dev) and [Gravity UI](https://gravity-ui.com)