import getProducts from '@/api/getProducts';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <h1 className="mb-6 text-2xl font-bold">Welcome to Nook & Co</h1>
      <SearchBar products={products}></SearchBar>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
