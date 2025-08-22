import ProductCard from "./ProductCard";
import { products } from "../lib/products";

export default function ProductHighlights() {
  return (
    <section className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.slice(0, 6).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
