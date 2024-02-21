import "./globals.css";
import { inter } from "./fonts";

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
