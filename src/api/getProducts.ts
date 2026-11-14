import type { ApiResponseProducts } from '@/types/product';

export default async function getProducts() {
  const response = await fetch('https://v2.api.noroff.dev/online-shop');

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }

  const result: ApiResponseProducts = await response.json();
  return result.data;
}
