import { createContext, useEffect, useState } from "react";
import data from "../../assets/productsCategory.json"
import {
  Product,
  ProductProviderData,
  ProductsProviderProps,
} from "../../models";
import api from "../api/api";

export const ProductsContext = createContext({} as ProductProviderData);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const PRODUCT_KEY = "/products"
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProduct, setFilteredProduct] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [jsonData, setData] = useState(data.data.nodes);

  useEffect(() => {
    fetchUpdate()
  }, []);
  
  useEffect(() => {
    filterProducts();
    getCategories();
  }, [products]);

  const addDataIntoCache = (
    cacheName: string,
    url: string,
    response: [] | Product[]
  ) => {
    const data = new Response(JSON.stringify(response));
    if ("caches" in window) {
      caches.open(cacheName).then((cache) => {
        cache.put(url, data);
      });
    }
  };

  const fetchUpdate = () => {
    api.get(PRODUCT_KEY).then((res:any) => {
      
      if(JSON.stringify(jsonData) === JSON.stringify(res.data)){
        setJsonCache();
      }
      else{
        setData(res.data);
        setJsonCache();
      }
    }).catch((e) =>{
      setJsonCache()
      console.log(e)
    })
    
  }

  const getSingleCacheData = async (cacheName: string, url: string) => {
    if (typeof caches === "undefined") return false;

    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(url);

    if (!cachedResponse || !cachedResponse.ok) {
      return null;
    }

    return cachedResponse?.json().then((item) => {
      return item;
    });
  };


  const setJsonCache = async () => {

   const cacheData = await getSingleCacheData("Products", PRODUCT_KEY);
    if (cacheData) {
      setProducts(cacheData);
    } else {
      try{
      addDataIntoCache("Products", PRODUCT_KEY, jsonData);
      }catch(e){
        console.log(e);
      }
    }
  };

  const getOneProduct = (id: string) => {
    const filteredProduct = products.filter((p) => p.id === id);
    return filteredProduct[0];
  };


  const getCategories = () => {
    const mapCategories = products.map((product) => product.category.name);
    const uniqueCategories = [...new Set(mapCategories)];
    setCategories(uniqueCategories);
  };

  const filterProducts = (product_name = "", product_category = "") => {
    if (product_name && product_category) {
      const newProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(product_name.toLowerCase()) &&
          product.category.name === product_category
      );
      setFilteredProduct(newProducts);
    } else if (product_category) {
      const newProducts = products.filter(
        (product) => product.category.name === product_category
      );
      setFilteredProduct(newProducts);
    } else if (product_name) {
      const newProducts = products.filter((product) =>
        product.name.toLowerCase().includes(product_name.toLowerCase())
      );
      setFilteredProduct(newProducts);
    } else {
      setFilteredProduct(products);
    }
  };
  return (
    <ProductsContext.Provider
      value={{ filteredProduct, getOneProduct, filterProducts, categories }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
