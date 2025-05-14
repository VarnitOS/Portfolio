# Varnit Sahu - Personal Portfolio

A modern, interactive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Interactive UI with fluid animations and Apple-inspired design
- System-preference based theming (light/dark mode)
- Smooth parallax and scroll effects
- Horizontally scrollable projects section
- Explosion animation when clicking while scrolling
- Responsive design for all devices
- "Book an appointment" feature that sends emails

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **UI Components**: shadcn/ui
- **3D Elements**: Three.js (React Three Fiber)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment to GoDaddy

To deploy this site to GoDaddy with your varnitsahu.com domain, follow these steps:

### 1. Build Your Site

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

### 2. Export Static Site (Optional)

If you prefer to host as a static site:

```bash
next export
```

This will create a static version in the `out` directory.

### 3. Deploy to GoDaddy

#### Option 1: Using Vercel and custom domain

1. Create a Vercel account (https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy your app:
   ```bash
   vercel
   ```
4. After deploying, go to your GoDaddy domain settings:
   - Point your domain's DNS to Vercel by adding the nameservers Vercel provides
   - Alternatively, add A records pointing to Vercel's IP addresses

#### Option 2: Manual FTP Upload

1. Access your GoDaddy hosting account
2. Use FTP credentials to connect to your hosting
3. Upload the contents of the `out` directory (if you exported static site) or set up Node.js hosting for the full Next.js app

### 4. Configure Domain

1. Log in to your GoDaddy account
2. Go to your domain settings
3. Point your varnitsahu.com domain to where you've hosted your portfolio

## Customization

- Update project details in `src/components/sections/projects-section.tsx`
- Modify personal information in each section component
- Replace placeholder images with your actual images in `public/images/`
- Adjust colors and theme in `tailwind.config.ts`

## License

This project is open source and available under the MIT License.
