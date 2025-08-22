"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session } = useSession();

  if (!session) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome, {session.user?.name}</h1>
      <p>Email: {session.user?.email}</p>

      <Link
        href="/add-product"
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 inline-block"
      >
        Add Product
      </Link>
    </div>
  );
}
