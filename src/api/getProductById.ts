import type { ApiResponseSingleProduct } from '@/types/product';

export default async function getProductById(id: string) {
  const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.statusText}`);
  }

  const result: ApiResponseSingleProduct = await response.json();
  return result.data;
}
