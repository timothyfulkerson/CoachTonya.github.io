require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Store for demo purposes - in production, use a database
const products = [
  {
    id: 'unloved-book',
    name: 'Unloved',
    description: 'A powerful memoir by Coach Tonya',
    price: 15.99,
    image: '/images/book-cover.jpg'
  }
];

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/achievements', (req, res) => {
  res.sendFile(__dirname + '/public/achievements.html');
});

app.get('/marketplace', (req, res) => {
  res.sendFile(__dirname + '/public/marketplace.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

app.get('/resources', (req, res) => {
  res.sendFile(__dirname + '/public/resources.html');
});

app.get('/on-air', (req, res) => {
  res.sendFile(__dirname + '/public/on-air.html');
});

// Stripe checkout session
app.post('/create-checkout-session', async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;
    const product = products.find(p => p.id === productId);
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: quantity,
      }],
      mode: 'payment',
      success_url: `${req.headers.origin}/success.html`,
      cancel_url: `${req.headers.origin}/marketplace.html`,
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get products API
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});