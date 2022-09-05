import { ReactNode } from "react";

export interface Product {
  name: string;
  shortDescription: string;
  id: string;
  images: {
    alt: string;
    asset: {
      url: string;
    };
  }[];
  category: {
    _id: string;
    name: string;
  };
}

export interface ProductContainerProps {
  props: Product;
}

export interface ProductListProps {
  props: Product[];
}

export interface ProductProviderData {
  filteredProduct: Product[];
  getOneProduct: (id: string) => Product;
  filterProducts: (
    product_name: string,
    product_category?: string | undefined
  ) => void;
  categories: string[];
}

export interface ProductsProviderProps {
  children: ReactNode;
}
