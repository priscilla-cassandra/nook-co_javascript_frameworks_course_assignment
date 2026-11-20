'use client';

import useCartStore from '@/stores/cartStore';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const router = useRouter();

  if (items.length === 0) {
    return (
      <p className="mt-8 text-center text-2xl font-semibold">
        Handlekurven er tom
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Your Shopping Cart</h1>
      <ul>
        {items.map((item) => (
          <li
            key={item.productId}
            className="flex flex-wrap items-center gap-4 border-b py-4"
          >
            <img
              src={item.image.url}
              alt={item.image.alt}
              className="h-20 w-20 rounded object-cover sm:h-24 sm:w-24"
            ></img>
            <div className="flex flex-col">
              <span className="font-semibold">{item.title}</span>
              <span>{item.price}</span>
            </div>
            <div className="flex w-full items-center gap-3 sm:ml-auto sm:w-auto">
              <button
                className="h-8 w-8 rounded border hover:bg-gray-100"
                onClick={() =>
                  updateQuantity(item.productId, item.quantity - 1)
                }
              >
                -
              </button>
              <span>Quantity: {item.quantity}</span>
              <button
                className="h-8 w-8 rounded border hover:bg-gray-100"
                onClick={() =>
                  updateQuantity(item.productId, item.quantity + 1)
                }
              >
                +
              </button>
              <button
                className="ml-auto text-sm text-red-600 hover:underline sm:ml-2"
                onClick={() => removeItem(item.productId)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-lg">
          Total: <strong>{totalPrice.toFixed(2)}</strong>
        </p>
      </div>
      <button
        className="rounded-lg bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
        onClick={() => router.push('/checkout/success')}
      >
        Checkout
      </button>
    </div>
  );
}
