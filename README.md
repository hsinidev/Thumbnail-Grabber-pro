# 🌌 Doodax YouTube Thumbnail Grabber

**The Professional's Choice for High-Resolution Asset Extraction**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-blue.svg?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Doodax-purple)](https://doodax.com)

---

## 🚀 LIVE DEMO
**Experience the application live:**  
👉 **[doodax.com](https://doodax.com/tools/thumbnail-grabber/index.html)** 👈

---

## 🌟 Overview

**Doodax** is a state-of-the-art web utility engineered for content creators, marketers, and designers. It allows for the instant extraction of high-fidelity YouTube thumbnails (up to 4K resolution) directly from the browser.

Unlike typical downloaders that rely on server-side scraping, Doodax utilizes a **Privacy-First, Client-Side Architecture**. This ensures lightning-fast performance, zero server logging of user activity, and a secure experience.

### ✨ Key Features

- **Immersive Galaxy UI:** A stunning, fully animated CSS-only background featuring nebula layers, rotating starfields, and glassmorphic panels.
- **Maximum Resolution:** Intelligently fetches the `maxresdefault` (1920x1080) asset, falling back to HD (720p) only when necessary.
- **SEO Optimized:** Built with comprehensive JSON-LD Schema (FAQ, WebApplication), Semantic HTML5, and optimized meta tags for superior search engine visibility.
- **Mobile Responsive:** A fluid design that adapts perfectly to desktops, tablets, and mobile devices.
- **Robust Legal Compliance:** Includes detailed, modal-based Privacy Policy, Terms of Service, and DMCA documentation.

---

## 📂 Project Structure

```bash
/
├── public/                 # Static assets served at root
│   ├── favicon.svg         # Vector logo asset
│   ├── robots.txt          # Search engine crawler directives
│   └── sitemap.xml         # SEO indexing map
├── src/
│   ├── components/
│   │   ├── Layout.tsx              # Core Layout (Galaxy Background, Footer, Modal System)
│   │   └── ThumbnailGrabberTool.tsx # Main Application Logic (URL Parsing, Fetching, UI)
│   ├── constants/
│   │   └── seo.tsx                 # Static Content (Legal Text, Long-form Article, JSON-LD)
│   ├── services/
│   │   └── youtubeService.ts       # Utility functions for YouTube API interaction
│   ├── App.tsx             # Root Component Composition
│   └── main.tsx            # React Entry Point
├── index.html              # HTML5 Entry (Tailwind Config, Meta Tags)
├── package.json            # Dependency Manifest
└── README.md               # Project Documentation
```

---

## 🛠 Developer Setup

### Prerequisites
- Node.js v16+
- npm or yarn

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/hsinidev/doodax-thumbnail-grabber.git
   cd doodax-thumbnail-grabber
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to view the app in your browser.

4. **Build for Production**
   ```bash
   npm run build
   ```

---

## 👨‍💻 Author & Credits

**HSINI MOHAMED**  
*Senior Full Stack Engineer*

- **Portfolio:** [doodax.com](https://doodax.com)
- **GitHub:** [github.com/hsinidev](https://github.com/hsinidev)
- **Email:** hsini.web@gmail.com

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
