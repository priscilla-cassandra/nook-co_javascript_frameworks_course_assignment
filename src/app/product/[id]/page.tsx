import getProductById from '@/api/getProductById';
import AddToCartButton from '@/components/AddToCartButton';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);
  const onSale = product.discountedPrice < product.price;

  return (
    <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-8 p-4 md:flex-row">
      <div className="md:w-1/2">
        <img
          src={product.image.url}
          alt={product.image.alt}
          className="w-full rounded-lg object-cover"
        ></img>
      </div>
      <div className="flex flex-col gap-4 md:w-1/2">
        <h2 className="text-3xl font-bold">{product.title}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="flex items-center gap-2 text-xl">
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
        <AddToCartButton product={product} />
        <div>
          {product.tags && product.tags.length > 0 && (
            <ul className="flew-wrap flex gap-2">
              {product.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
        <h3 className="mt-4 text-xl font-semibold">Reviews</h3>
        {product.reviews && product.reviews.length > 0 ? (
          <ul className="flex flex-col gap-3">
            {product.reviews.map((review) => (
              <li
                key={review.id}
                className="rounded-lg border border-gray-200 p-3"
              >
                <p className="font-medium">
                  {review.username} ({review.rating}/5)
                </p>
                <p className="text-gray-600">{review.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No reviews for this product</p>
        )}
      </div>
    </div>
  );
}
