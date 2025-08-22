import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="font-bold text-xl mb-2">{product.name}</h2>
      <p className="mb-2">{product.description}</p>
      <p className="font-semibold mb-2">${product.price}</p>
      <Link href={`/products/${product.id}`} className="text-blue-600">
        See Details
      </Link>
    </div>
  );
}
