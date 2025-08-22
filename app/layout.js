import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Providers from "./providers";

export const metadata = {
  title: "NextJS Product App",
  description: "Simple Next.js app with authentication and product management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
