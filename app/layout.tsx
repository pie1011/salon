import "./globals.css";
import { roboto } from "./fonts";

export const metadata = {
  metadataBase: new URL("https://salon-kh.vercel.app"),
  title: "The Salon: Mock Website",
  description: "A simple Next.js and Tailwind app with Vercel Postgres as the database",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
