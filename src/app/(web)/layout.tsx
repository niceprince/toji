import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Toji Communication Consultancy",
  description:
    "There's little that communication cannot solve. If you have a problem, we have a solution. Try us.",
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col px-4">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
