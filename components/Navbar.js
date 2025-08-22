"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-200 shadow-md">
      {/* Left Side - Logo */}
      <div className="text-xl font-bold text-gray-800">
        <Link href="/">ProductApp</Link>
      </div>

      {/* Middle - Links */}
      <div className="space-x-6">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/products" className="hover:text-blue-600">
          Products
        </Link>
        {session && (
          <Link href="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>
        )}
      </div>

      {/* Right Side - Auth */}
      <div>
        {session ? (
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
