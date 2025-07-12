# ByteFolio - Web Development Agency Landing Page

A beautiful, animated landing page for ByteFolio web development agency built with React.js. Features a modern design with dark/light theme support, smooth animations, and responsive layout.

## 🚀 Features

- **Modern Design**: Clean, professional design with beautiful animations
- **Dark/Light Theme**: Toggle between dark and light modes with smooth transitions
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: CSS animations and transitions for engaging user experience
- **Interactive Components**: 
  - Animated hero section with floating elements
  - Service cards with hover effects
  - Portfolio filtering system
  - Testimonial slider
  - Contact form with validation
  - Scroll-to-top functionality

## 🎨 Sections

1. **Header** - Navigation with theme toggle
2. **Hero Section** - Animated landing area with call-to-action
3. **Services** - Service offerings with detailed descriptions
4. **Portfolio** - Project showcase with filtering
5. **About Us** - Company information and team
6. **Testimonials** - Client reviews with slider
7. **Contact** - Contact form and information
8. **Footer** - Links and company details

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **CSS3** - Styling with custom properties and animations
- **React Icons** - Icon library
- **Responsive Design** - Mobile-first approach

## 🎯 Color Scheme

- **Primary Color**: #18cb96 (Teal Green)
- **Primary Light**: #1ae1a2
- **Primary Dark**: #16b085
- **Background**: Dynamic based on theme
- **Text**: Dynamic based on theme

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bytefolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
bytefolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js & Header.css
│   │   ├── Hero.js & Hero.css
│   │   ├── Services.js & Services.css
│   │   ├── Portfolio.js & Portfolio.css
│   │   ├── About.js & About.css
│   │   ├── Testimonials.js & Testimonials.css
│   │   ├── Contact.js & Contact.css
│   │   └── Footer.js & Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Theme Customization

The website uses CSS custom properties for easy theme customization. You can modify the colors in `src/App.css`:

```css
:root {
  --primary-color: #18cb96;
  --primary-dark: #16b085;
  --primary-light: #1ae1a2;
  /* ... other variables */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Removes the single build dependency

## 🎯 Performance Features

- **Optimized Images**: Placeholder images with optimized loading
- **Smooth Scrolling**: CSS scroll-behavior for navigation
- **Efficient Animations**: CSS transforms and transitions
- **Responsive Images**: Adaptive image sizing
- **Lazy Loading**: Components load efficiently

## 🌟 Key Components

### Header Component
- Fixed navigation with backdrop blur
- Smooth scroll to sections
- Mobile-responsive hamburger menu
- Theme toggle functionality

### Hero Section
- Animated floating cards
- Gradient backgrounds
- Statistics display
- Call-to-action buttons

### Services Section
- Grid layout with hover effects
- Service icons and descriptions
- Feature lists for each service

### Portfolio Section
- Project filtering system
- Interactive project cards
- Technology tags
- Live demo and code links

### About Section
- Company statistics
- Team member profiles
- Company values and mission

### Testimonials Section
- Auto-playing slider
- Manual navigation controls
- Star ratings
- Client information

### Contact Section
- Interactive contact form
- Contact information cards
- Social media links
- Form validation

## 🎨 Animation Details

- **Fade In Animations**: Elements animate in on scroll
- **Hover Effects**: Interactive hover states
- **Loading Animations**: Smooth transitions
- **Floating Elements**: Subtle floating animations
- **Gradient Animations**: Dynamic background effects

## 🔧 Customization Guide

1. **Colors**: Modify CSS variables in `App.css`
2. **Content**: Update text content in component files
3. **Images**: Replace placeholder images with actual assets
4. **Animations**: Adjust animation durations and effects in CSS
5. **Layout**: Modify grid layouts and spacing

## 📧 Contact

For any questions or support, please contact:
- Email: hello@bytefolio.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ by ByteFolio Team** 