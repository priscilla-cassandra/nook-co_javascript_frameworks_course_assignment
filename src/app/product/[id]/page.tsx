export default async function ProductPage({
  params,
}: PageProps<'/product/[id]'>) {
  const { id } = await params;
  return <main>Product {id}</main>;
}
