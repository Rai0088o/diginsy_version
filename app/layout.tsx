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
       <main className="flex-1"> {children}</main>
        {/* <div className="absolute bottom-0 left-0">

        <Footer />
        </div> */}
      </body>
    </html>
  );
}
{/* <div className="flex h-screen flex-col ">
<main className="flex-1">{children}</main>
<Header />
<main className="flex-1">{children}</main>
<Footer />
</div> */}
