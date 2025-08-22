"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        onClick={() => signIn("google", { callbackUrl: "/products" })}
        className="bg-red-600 text-white px-6 py-3 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
