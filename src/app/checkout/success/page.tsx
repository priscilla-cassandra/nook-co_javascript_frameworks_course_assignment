'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import useCartStore from '@/stores/cartStore';

export default function CheckoutSuccessPage() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center">
      <h1 className="mb-4 text-3xl font-bold">Thank you for your order!</h1>
      <p className="mb-2">Your order has been confirmed.</p>
      <p className="mb-8 text-gray-600">
        We are preparing your items and will get them on their way soon.
      </p>

      <Link
        href="/"
        className="inline-block rounded-lg bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
      >
        Continue shopping
      </Link>
    </div>
  );
}
