export interface Product {
  id: number;
  name: string;
  cost: number;
  img: string;
  variants: string[];
}

export interface CartItem {
  product: Product;
  variant: string;
}
