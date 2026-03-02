<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logoColor=white&logo=next.js&color=black"/>
    <img src="https://img.shields.io/badge/-Better Auth-black?style=for-the-badge&logoColor=white&logo=betterauth&color=black"/>
<img src="https://img.shields.io/badge/-Shadcn-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=black"/>
<img src="https://img.shields.io/badge/-Inngest-black?style=for-the-badge&logoColor=white&logo=inngest&color=black"/><br/>

<img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=00A35C"/>
<img src="https://img.shields.io/badge/-TailwindCSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=38B2AC"/>
<img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6"/>

  </div>

  <h3 align="center">MarketSense, a Stock Market App — Alerts, Charts, AI Insights</h3>

</div>

## 📋 <a name="table">Table of Contents</a>

1. ✨ [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">✨ Introduction</a>

Discover a next-generation stock market platform powered by AI—built with Next.js, Shadcn, Better Auth, and Inngest. Get real-time market updates, create personalized alerts, and explore in-depth company insights with ease. Manage watchlists and stay informed with a clean, intuitive interface designed for smart investors. <br/><br/>
The powerful admin dashboard lets you oversee stock data, publish financial news, and monitor user activity seamlessly. Event-driven automation powers AI-generated daily summaries, earnings alerts, and sentiment insights, bringing a fully dynamic, real-time financial experience to life.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **[Better Auth](https://www.better-auth.com/)** is a flexible, framework-agnostic authentication and authorization library for TypeScript. It offers seamless support for email and password login, popular OAuth providers like Google, GitHub, and Apple, as well as multi-factor authentication. Designed for simplicity and scalability, Better Auth streamlines secure user management and integrates effortlessly into modern TypeScript applications.

- **[Finnhub](https://finnhub.io/)** is a real‑time financial data API that delivers market information for stocks, forex, and cryptocurrencies. It gives developers access to real‑time and historical prices, fundamental company data, economic indicators, and news feeds, making it well suited for trading apps, dashboards, and financial analysis tools.

- **[Inngest](https://www.inngest.com)** is an event‑driven platform for building durable workflows and background jobs. It lets developers create reliable, scalable automation—such as real‑time alerts, notifications, and AI‑powered pipelines—without managing queues, workers, or complex infrastructure.

- **[MongoDB](https://www.mongodb.com/)** is a flexible, high‑performance NoSQL database that stores data in JSON‑like documents using a dynamic schema. It supports rich querying, indexing, horizontal scaling, replication, and high availability, making it well suited for modern, data‑intensive applications.

- **[Nodemailer](https://nodemailer.com/)** is a lightweight, widely used Node.js library for sending emails with minimal setup. It supports multiple transport options—including SMTP, OAuth2, and third‑party services—along with HTML content, attachments, and secure TLS, making it ideal for transactional emails, notifications, and contact‑form workflows in modern applications.

- **[Next.js](https://nextjs.org/docs)**  is a full‑stack React framework that simplifies building high‑performance web applications. It supports server‑side rendering, static site generation, and API routes out of the box, enabling developers to ship optimized, SEO‑friendly, and scalable apps with minimal configuration.

- **[Shadcn](https://ui.shadcn.com/docs)** is an open‑source collection of accessible, fully customizable React components designed to help teams build polished, consistent user interfaces quickly. It gives you complete control over styling and layout while providing well‑crafted defaults that work together as a cohesive design system.

- **[TailwindCSS](https://tailwindcss.com/)** is a utility‑first CSS framework that lets developers style modern, responsive interfaces directly in HTML. It offers a rich set of pre‑defined classes for layout, spacing, typography, colors, and responsive behavior, enabling fast, consistent UI development without writing custom CSS.

- **[TypeScript](https://www.typescriptlang.org/)**  is a statically typed superset of JavaScript that adds type safety, better tooling, and early error detection to your code. It is especially well suited for large‑scale applications, helping teams improve maintainability, catch bugs at compile time, and navigate complex codebases more confidently.

## <a name="features">🔋 Features</a>

👉 **Stock Dashboard**: Monitor real‑time stock prices with interactive line and candlestick charts, historical data, and filters by industry, performance, or market cap for a clear market overview.

👉 **Smart Search**: Discover top stocks fast with an intelligent search engine that surfaces relevant results and helps you navigate Signalist efficiently.

👉 **Watchlists & Alerts**: Build custom watchlists, define alert thresholds for price movements and volume spikes, and get instant email notifications to never miss key market events.

👉 **Company Insights**: Dive into comprehensive financial metrics such as PE ratio, EPS, revenue, filings, analyst ratings, and sentiment scores, enriched with recent news for well‑informed decisions.

👉 **Real‑Time Workflows**: Leverage **Inngest** to orchestrate event‑driven workflows for live price updates, alert scheduling, automated reports, and AI‑driven analytics.

👉 **AI‑Driven Alerts & Summaries**: Receive tailored market summaries, daily digests, and earnings‑report notifications that highlight performance trends and support data‑driven trading.

👉 **Personalized Notifications**: Configure alerts and notifications around your watchlists and preferences for a highly customized, user‑centric experience.

👉 **Analytics & Insights**: Explore detailed analytics on user behavior, stock trends, and engagement patterns to guide both product and trading strategies.

👉 **Email notifications & unsubscribe**: Welcome and daily news summary emails include one-click unsubscribe links. Unsubscribed users are stored in an `email_unsubscribes` collection and are excluded from future marketing and news emails. Token-based unsubscribe links are generated with HMAC verification for security.

> **Note — Unsubscribe feature status:** The unsubscribe flow (API route, token verification, and exclusion from emails) is partially implemented. It is **not yet fully complete or fully functional**. Please use with this in mind.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/jatinn-sw/realtime-stock-market-analysis-with-live-news-feed-personalised-alerts-and-live-company-insights.git
cd realtime-stock-market-analysis-with-live-news-feed-personalised-alerts-and-live-company-insights
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NODE_ENV='development'
NEXT_PUBLIC_BASE_URL=http://localhost:3001

# FINNHUB
NEXT_PUBLIC_NEXT_PUBLIC_FINNHUB_API_KEY=
FINNHUB_BASE_URL=https://finnhub.io/api/v1

# MONGODB
MONGODB_URI=

# BETTER AUTH
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3001

# GEMINI
GEMINI_API_KEY=

#NODEMAILER
NODEMAILER_EMAIL=
NODEMAILER_PASSWORD=

NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

Replace the placeholder values with your real credentials. You can get these by signing up at: [**MongoDB**](https://www.mongodb.com/products/platform/atlas-database), [**Gemini**](https://aistudio.google.com/prompts/new_chat?utm_source=chatgpt.com), [**Inngest**](https://jsm.dev/stocks-inggest), [**Finnhub**](https://finnhub.io).

**Running the Project**

```bash
npm run dev
npx inngest-cli@latest dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser to view the project.
