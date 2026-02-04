# Anushka Singh - Portfolio Website

A professional, modern portfolio website built with React showcasing product management experience, projects, and achievements.

## Features

- **Multi-page React application** with React Router
- **Responsive design** that works on all devices
- **Professional but funky** aesthetic with distinctive typography
- **Component-based architecture** for easy maintenance
- **Five main sections**: Home, About, Experience, Projects, Gallery

## Project Structure

```
portfolio-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Footer.js
│   │   ├── ExperienceItem.js
│   │   ├── ProjectCard.js
│   │   ├── GalleryItem.js
│   │   └── Lightbox.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   └── Gallery.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── Navigation.css
│   │   ├── Footer.css
│   │   ├── Home.css
│   │   ├── About.css
│   │   ├── Experience.css
│   │   ├── Projects.css
│   │   └── Gallery.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build` folder.

## Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repo to Netlify for automatic deployments

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Install gh-pages: `npm install gh-pages --save-dev`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Run: `npm run deploy`

## Adding Images

Place your images in `public/assets/images/` and reference them as:
```javascript
<img src="/assets/images/your-image.jpg" alt="description" />
```

Current image placeholders to replace:
- `/assets/images/shopbop-team.png` - Your Shopbop team photo
- `/assets/images/pacific-coast.jpg` - Pacific Coast Highway
- `/assets/images/niagara.jpg` - Niagara Falls
- `/assets/images/starry-night.jpg` - Starry Night painting
- `/assets/images/mba-friends.jpg` - MBA friends group
- `/assets/images/brewers-game.jpg` - Brewers baseball game
- `/assets/images/tailgate.jpg` - Tailgate grilling
- `/assets/images/digbi-project.jpg` - Digbi Health project (optional)

## Customization

### Colors

Edit CSS variables in `src/styles/App.css`:

```css
:root {
  --primary: #0F0F0F;
  --accent: #6366F1;
  --accent-light: #818CF8;
  --bg: #FAFAFA;
  --text: #171717;
  --text-light: #525252;
  --border: #E5E5E5;
  --card-bg: #FFFFFF;
}
```

### Content

- **Home page**: Edit `src/pages/Home.js`
- **About page**: Edit `src/pages/About.js`
- **Experience**: Edit the `experiences` array in `src/pages/Experience.js`
- **Projects**: Edit the `projects` array in `src/pages/Projects.js`
- **Gallery**: Edit the `galleryItems` array in `src/pages/Gallery.js`

### Contact Information

Update contact details in:
- `src/pages/Home.js` (CTA buttons)
- `src/pages/About.js` (Contact section)

## Technologies Used

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **CSS3** - Styling with CSS variables
- **Google Fonts** - Epilogue & JetBrains Mono

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Contact

Anushka Singh
- Email: anushka.singh@wisc.edu
- LinkedIn: [linkedin.com/in/anushkasingh15](https://linkedin.com/in/anushkasingh15)
- Phone: (608) 239-0509
