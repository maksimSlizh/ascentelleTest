import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/widgets/Header/Header";
import { Footer } from "@/widgets/Footer/Footer";

export const metadata: Metadata = {
  title: "Ascentelle",
  description: "Fashion store — статичная главная",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
