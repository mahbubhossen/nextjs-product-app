import { products } from "../../../lib/products";

export default function ProductDetails({ params }) {
  const product = products.find((p) => p.id === parseInt(params.id));
  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="mb-2">{product.description}</p>
      <p className="font-semibold mb-2">${product.price}</p>
    </div>
  );
}
