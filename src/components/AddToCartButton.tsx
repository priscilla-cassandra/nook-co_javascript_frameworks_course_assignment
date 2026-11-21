'use client';

import { Product } from '@/types/product';
import useCartStore from '@/stores/cartStore';
import { useState } from 'react';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [showToast, setShowToast] = useState(false);

  function handleClick() {
    const price =
      product.discountedPrice < product.price
        ? product.discountedPrice
        : product.price;
    addItem({
      productId: product.id,
      title: product.title,
      price: price,
      image: product.image,
    });

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="rounded-lg bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
      >
        Add to cart
      </button>

      {showToast && (
        <div
          role="status"
          className="fixed top-20 right-4 z-50 rounded-lg bg-green-600 px-4 py-2 text-white shadow-lg"
        >
          {product.title} added to cart!
        </div>
      )}
    </div>
  );
}
