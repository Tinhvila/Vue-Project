export default interface Product {
  name: string;
  description: string;
  brand: string;
  categories: string[];
  hierarchicalCategories: { lvl0: string; lvl1: string };
  type: string;
  price: number;
  price_range: string;
  image: string;
  url: string;
  free_shipping: boolean;
  rating: number;
  popularity: number;
  objectID: string;
  category: string;
  subCategory: string;
}

export interface Total_Product {
  data: Product[];
  total: number;
}
