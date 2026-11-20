export interface CartProduct {
  productId: string;
  title: string;
  price: number;
  image: { url: string; alt: string };
}

export interface CartItem {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image: { url: string; alt: string };
}

export interface CartState {
  items: CartItem[];
  addItem: (product: CartProduct) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}
