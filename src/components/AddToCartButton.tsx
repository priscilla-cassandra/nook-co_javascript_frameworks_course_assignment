'use client';

import { Product } from '@/types/product';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  function handleClick() {
    console.log('Added', product.title);
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-lg bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
    >
      Add to cart
    </button>
  );
}
