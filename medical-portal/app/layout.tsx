import "@/styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/logo.png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <Link href="/" className="logo">
            <Image
              src={logoImg}
              alt="PharmaCanada Logo"
              width={40}
              height={40}
            />
            <span>PharmaCanada</span>
          </Link>
          <nav className="nav-links">
            <Link href="/refill">Refill</Link>
            <Link href="/transfer">Transfer</Link>
          </nav>
        </header>
        <main className="container flex flex-col justify-center items-center min-h-screen py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
