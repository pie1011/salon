import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import localFont from "next/font/local";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer-text";
import FooterSticky from "@/components/footer-sticky";

export const metadata = {
  metadataBase: new URL("https://salon-kh.vercel.app"),
  title: "The Salon: Mock Website",
  description:
    "A simple Next.js and Tailwind app with Vercel Postgres as the database",
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
    <ClerkProvider>
      <html lang="en" className="scroll-smooth leading-relaxed">
        <body className={`${roboto_condensed.variable} font-sans text-slate-700 bg-white `}>
          <header className="sticky absolute bg-white drop-shadow shadow-xl top-0">
            <Navigation />
          </header>
          <div className="absoulte bg-white text-slate-700 min-h-svh ">
            <main className="min-h-full">
              {children}
            </main>
            <footer className="">
              <Footer />
              <FooterSticky />
            </footer>
          </div>

        </body>
      </html>
    </ClerkProvider>
  );
}
