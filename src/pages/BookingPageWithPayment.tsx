
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import BookingFacility from './BookingFacility';

// Load your Stripe publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);
console.log(import.meta.env.VITE_PUBLISHABLE_KEY);
const BookingPageWithPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <BookingFacility />
    </Elements>
  );
};

export default BookingPageWithPayment;
