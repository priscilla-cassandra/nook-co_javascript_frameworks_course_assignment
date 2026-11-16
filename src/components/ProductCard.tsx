import type { Product } from '@/types/product';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const onSale = product.discountedPrice < product.price;
  return (
    <Link
      href={`/product/${product.id}`}
      className="block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <img
        src={product.image.url}
        alt={product.image.alt}
        className="h-48 w-full object-cover"
      />
      <div className="flex flex-col gap-2 p-4">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="flex gap-2">
          {onSale ? (
            <>
              <span className="text-gray-400 line-through">
                {product.price}
              </span>{' '}
              <span className="font-bold text-red-600">
                {product.discountedPrice}
              </span>
            </>
          ) : (
            <span className="font-bold">{product.price}</span>
          )}
        </p>
        <p className="text-sm text-gray-500">
          {product.rating ? product.rating : 'No rating yet'}
        </p>
      </div>
    </Link>
  );
}
