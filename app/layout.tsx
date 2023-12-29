import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const metadata: Metadata = {
  title: "Diginsy",
  description: "a digital ",
  icons: {
    icon: "/icons/digency_logo.png",
  },
};
export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <Header />
        <main className="flex-1"> {children}</main>
        {/* <div className="absolute bottom-0 left-0">

        <Footer />
        </div> */}
      </body>
    </html>
  );
}
