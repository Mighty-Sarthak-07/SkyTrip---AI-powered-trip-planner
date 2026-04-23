<div align="center">
  <img src="./public/logo.svg" alt="SkyTrip Logo" width="100" height="auto" />
  <h1>✈️ SkyTrip - AI Powered Travel Planner</h1>
  <p><strong>Transforming travel planning with cutting-edge AI and seamless real-time interactions.</strong></p>

  <p>
    <img src="https://img.shields.io/badge/Next.js%2015-000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Gemini AI" />
    <img src="https://img.shields.io/badge/Clerk%20Auth-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" />
    <img src="https://img.shields.io/badge/Convex-000?style=for-the-badge&logo=convex&logoColor=white" alt="Convex" />
  </p>

  <p>
    <i>Crafted with ❤️ by <b>Sarthak Kesarwani</b></i> <br/>
    <a href="https://linkedin.com/in/sarthak-kesarwani">LinkedIn</a> |
    <a href="https://github.com/Mighty-Sarthak-07">GitHub</a> |
    <a href="https://twitter.com/SarthakKesarwani">Twitter</a>
  </p>
</div>

<hr/>

## ✨ Introduction
**SkyTrip** is a next-generation AI travel planner designed to replace hours of research, multiple chaotic browser tabs, and complex bookings with one **intelligent conversation**. 

Just tell the AI where you want to go, who you are traveling with, and your budget, and SkyTrip will orchestrate a complete, personalized, day-by-day itinerary with exact coordinate details, live hotel listings, and ticket estimates.

> **Key Mission**: "Technology should remove friction from travel, not add it."

## 🚀 Key Features

- **🧠 Advanced AI Itinerary Generation:** Chat naturally with the AI travel agent. It parses constraints and dynamically generates a personalized itinerary in highly optimized JSON.
- **🏨 Seamless Booking Integrations:** Integrates intelligently with platforms like MakeMyTrip. We parse local cities dynamically from addresses to create fully functional, auto-filtered direct checkout URLs.
- **🔐 Clerk Powered Auth & Security:** Seamless onboarding using Clerk integrations. Rate limiting and bot-protection on API endpoints robustly handled via Arcjet. 
- **⚡ Real-Time Backend:** Convex database acts as our ultra-fast serverless real-time caching and data persistence layer, rendering load times obsolete.
- **🎨 Elite UI/UX & Glassmorphism:** Features fluid animations (via Framer Motion), sleek glassmorphism dark/light design systems, and responsive components curated to wow users on first impression.
- **🗺️ Discovery Engine:** Browse AI-curated *Hidden Gems*, *Trending Destinations*, and *Adventures* mapped to thrill-scale metrics.

## 🛠️ Architecture & Tech Stack

This repository showcases my ability to architect robust, scalable, and full-stack solutions:

* **Framework:** Next.js 15 (App Router, Server Actions, API Routes)
* **Language:** TypeScript (Strict typing for robust, error-free models)
* **AI Orchestration:** Google Gemini / OpenRouter integration for high quality, schema-validated JSON outputs.
* **Authentication:** Clerk Auth
* **Database & BaaS:** Convex (Real-time syncing and serverless edge functions)
* **Styling & Motion:** Tailwind CSS + Framer Motion (Modern, performant web animations)
* **Security Layer:** Arcjet (Rate limiting and unauthorized access prevention)

## 📸 Sneak Peek
*(To truly experience the application, clone the repo and run it locally!)*
- Crisp gradient typography and micro-interactions.
- Custom interactive modal components for Hotels and Day Plans.
- Gorgeous location-based image fetching utilizing Google Places API.

## 🏃‍♂️ Getting Started

Want to run this masterpiece locally? 

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mighty-Sarthak-07/SkyTrip.git
   cd SkyTrip
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env.local` file in the root and add your keys:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
   CLERK_SECRET_KEY=your_key
   OPENROUTER_API=your_openrouter_or_gemini_key
   # Convex and Google Map Api keys...
   ```

4. **Launch Development Server**
   ```bash
   npm run dev
   ```
   *Visit `http://localhost:3000` and let the journey begin!*

## 💡 Why This Project Stands Out (To Recruiters!)
* **Production-Grade Code:** Utilizes Next.js 15's bleeding-edge features, rigorous TypeScript interfaces, and modularized UI components.
* **Complex Data Flows:** Shows the ability to wrangle unpredictable AI text models into strictly structured, type-safe JSON formats that drive dynamic frontends.
* **User-Centric Engineering:** Meticulous attention to detail on the frontend—handling image fallbacks, smart auto-direct checkout flows, and beautiful fluid animations.
* **Security & Performance Aware:** Integrates Arcjet to gatekeeper API limits and optimizes Next.js font loads and image domains to hit perfect Lighthouse scores.

---
*If you are reading this and hiring, let's build the future together.* 🚀
