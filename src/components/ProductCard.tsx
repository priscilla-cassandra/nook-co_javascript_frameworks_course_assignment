import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <img src={product.image.url} alt={product.image.alt} />
      <h3>{product.title}</h3>
      <p>
        {' '}
        {product.discountedPrice ? (
          <>
            <span className="line-through">{product.price}</span>{' '}
            {product.discountedPrice}
          </>
        ) : (
          product.price
        )}
      </p>
      <p>{product.rating ? product.rating : 'No rating yet'}</p>
    </div>
  );
}
