import { useState } from "react";
import Products from "./components/Products/Products.component";
import { products as initialProducts } from "./mocks/products.json";
import { Product } from "./components/Products/Products.types";

function App() {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: "all",
    miniPrice: 0,
  });
  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      return (
        (filters.category === "all" || product.category === filters.category) &&
        product.price >= filters.miniPrice
      );
    });
  };
  return (
    <div>
      <Products products={products} />
    </div>
  );
}

export default App;
