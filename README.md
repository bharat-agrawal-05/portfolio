# Bharat Agrawal — Portfolio

A minimal, high-performance, authentic portfolio website designed for **Bharat Agrawal** (B.Tech CSE @ IIT Mandi, Exchange @ TU Munich).

Built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**, ready for automated deployment to **GitHub Pages**.

---

## ⚡ Key Highlights
- **Authentic Engineering Aesthetic**: Clean editorial typography, monospace data accents, zero AI fluff.
- **Data & Architecture Density**: Showcases technical projects with parameter counts, latency metrics, accuracy benchmarks, and awards.
- **Dual Institution Focus**: Highlights TU Munich (9.43 CGPA) & IIT Mandi (9.02 CGPA).
- **Competitive Programming & CTF Scorecards**: 1,100+ problems solved across Codeforces, LeetCode, and GFG, plus Top 10 CSAW CTF finish.
- **Interactive Features**:
  - `Cmd+K` / `Ctrl+K` Command Palette for quick search and keyboard navigation.
  - Interactive project filtering (`All`, `Machine Learning & AI`, `Full-Stack & Systems`, `Data Pipelines`).
  - Dark / Light mode toggle.
  - One-click copy email button with feedback tooltip.
  - Direct PDF resume download.

---

## 🛠️ Tech Stack
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS (with dark mode class support)
- **Icons**: Lucide React + custom SVG brand icons
- **Deployment**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

---

## 🚀 Getting Started Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bharatagrawal1322/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deploying to GitHub Pages

This repository is preconfigured with an automated GitHub Actions workflow (`.github/workflows/deploy.yml`).

### Step-by-Step Activation:
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio build"
   git branch -M main
   git remote add origin https://github.com/bharatagrawal1322/portfolio.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Any push to `main` will automatically build and deploy the portfolio to:
   `https://bharatagrawal1322.github.io/portfolio` (or your custom domain).

---

## 📄 License
MIT © [Bharat Agrawal](https://github.com/bharatagrawal1322)
