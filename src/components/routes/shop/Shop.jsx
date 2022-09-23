import { useContext } from "react";

import { ProductsContext } from "../../../contexts/ProductsContext";
import ProductCard from "../../products-card/ProductCard";
import './shopStyles.scss';
const Shop = () => {
    const { products}= useContext(ProductsContext)
  return (
    <div className="products-container">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default Shop;