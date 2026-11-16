import getProductById from '@/api/getProductById';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  return <h1>{product.title}</h1>;
}
