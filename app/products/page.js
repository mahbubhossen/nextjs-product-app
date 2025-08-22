import ProductCard from "../../components/ProductCard";
import { products } from "../../lib/products";

export default function ProductsPage() {
  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
