# Tonya Duran Portfolio Website

A personal portfolio website for Tonya Duran, Coach & Author from Toledo, Ohio. Inspired by the sophisticated dark theme of neilgaiman.com.

## Features

- **Dark, sophisticated theme** - Literary aesthetic with gold accents
- **Multiple pages/tabs** - Home, About, Achievements, Marketplace, Contact
- **Stripe payment integration** - Sell books directly through the site
- **Responsive design** - Works on desktop and mobile devices
- **Smooth animations** - Elegant fade-in effects

## Pages

| Page | Description |
|------|-------------|
| Home | Hero section with featured projects |
| About | Personal story, philosophy, and social links |
| Achievements | Awards, projects, media appearances, credentials |
| Marketplace | "Unloved" book sales with Stripe checkout |
| Contact | Contact form and connection info |

## Project Structure

```
tonya-duran-portfolio/
├── server.js          # Express server with Stripe integration
├── package.json       # Dependencies
├── .env              # Environment variables (Stripe keys)
├── public/
│   ├── index.html    # Home page
│   ├── about.html    # About page
│   ├── achievements.html  # Achievements page
│   ├── marketplace.html   # Marketplace with Stripe
│   ├── contact.html  # Contact page
│   ├── success.html  # Payment success page
│   └── css/
│       └── style.css # All styles
└── README.md
```

## Setup Instructions

### 1. Install Dependencies

```bash
cd "Desktop\VS Code\Websites\Tonya Duran"
npm install
```

### 2. Configure Stripe

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)
2. Copy your **Secret Key** (starts with `sk_test_`)
3. Copy your **Publishable Key** (starts with `pk_test_`)
4. Edit the `.env` file and replace the placeholder keys:

```
STRIPE_SECRET_KEY=sk_test_your_actual_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key_here
```

### 3. Run the Server

```bash
npm start
```

The website will be available at `http://localhost:3000`

## Stripe Setup Notes

- The site uses **Stripe Checkout** for secure payment processing
- Test mode keys allow you to test payments without real charges
- Replace `pk_test_placeholder` in `public/marketplace.html` with your actual publishable key for the frontend

## Customization

### Adding More Products

Edit `server.js` and add products to the `products` array:

```javascript
const products = [
  {
    id: 'unloved-book',
    name: 'Unloved',
    description: 'A powerful memoir by Tonya Duran',
    price: 15.99,
    image: '/images/book-cover.jpg'
  },
  // Add more products here
];
```

### Updating Content

Edit the HTML files in the `public` folder to update:
- Personal information
- Project details
- Contact information
- Social media links

## Technologies Used

- **Express.js** - Web server
- **Stripe** - Payment processing
- **HTML/CSS** - Frontend
- **Vanilla JavaScript** - Client-side functionality

## License

© 2026 Tonya Duran. All rights reserved.