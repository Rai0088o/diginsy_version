import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
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
      <body className={poppins.variable}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
