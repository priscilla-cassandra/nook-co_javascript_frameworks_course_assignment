'use client';

import { Product } from '@/types/product';
import useCartStore from '@/stores/cartStore';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);

  function handleClick() {
    const price =
      product.discountedPrice > product.price
        ? product.discountedPrice
        : product.price;
    addItem({
      productId: product.id,
      title: product.title,
      price: price,
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-lg bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
    >
      Add to cart
    </button>
  );
}
