import Razorpay from 'razorpay';
import { v4 as uuidv4 } from 'uuid';
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


export default async function handler(req, res) {
  const { amount } = req.body;
  const orderId = uuidv4();

  const options = {
    amount: amount*100,
    currency: 'INR',
    receipt: orderId,
  };

  try {
    const response = await razorpay.orders.create(options);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

