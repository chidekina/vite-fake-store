import { useEffect, useState } from "react";
import ShowProducts from "./ShowProducts";

export default function GetProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch("https://fakestoreapi.com/products/");
            const data = await response.json();
            setProducts(data);
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };
    
        fetchProducts();
      }, []);

    return (
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <ShowProducts list={products} />
        </div>

    )
}