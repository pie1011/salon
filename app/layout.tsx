import "./globals.css";
import localFont from 'next/font/local';

export const metadata = {
  metadataBase: new URL("https://salon-kh.vercel.app"),
  title: "The Salon: Mock Website",
  description: "A simple Next.js and Tailwind app with Vercel Postgres as the database",
};

const roboto_condensed = localFont({
  src: "../public/fonts/Roboto_Condensed/RobotoCondensed-VariableFont_wght.ttf",
  weight: "400 700 900",
  variable: "--font-RobotoCondensed",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth leading-relaxed">
      <body className={`${roboto_condensed.variable} font-sans text-slate-700 `}>{children}</body>
    </html>
  );
}
