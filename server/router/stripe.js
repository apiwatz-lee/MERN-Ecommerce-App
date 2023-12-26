import Stripe from 'stripe'
import { Router } from 'express';

const stripe = Stripe(process.env.STRIPE_KEY);
const stripeRouter = Router();

stripeRouter.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
         price_data:{
          currency: 'usd',
          product_data:{
            name:'T-shirt'
          },
          unit_amount: 2000,
         },
         quantity:1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
    });
  
    res.send({url:session.url});
  });

  export default stripeRouter;