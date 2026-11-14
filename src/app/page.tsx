import getProducts from '@/api/getProducts';
import ProductCard from '@/components/ProductCard';

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <h1>Welcome to Nook & Co</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
