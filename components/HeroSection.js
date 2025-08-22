import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="text-center p-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to ProductApp</h1>
      <p className="mb-6">Explore our amazing products</p>
      <Link href="/products" className="bg-blue-600 text-white px-4 py-2 rounded">
        View Products
      </Link>
    </section>
  );
}
