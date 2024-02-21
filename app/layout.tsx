import "./globals.css";
import { inter } from "./fonts";

export const metadata = {
  metadataBase: new URL("https://postgres-starter.vercel.app"),
  title: "Vercel Postgres Demo",
  description: "A simple Next.js app with Vercel Postgres as the database",
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
