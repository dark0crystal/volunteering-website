import "bootstrap/dist/css/bootstrap.min.css" 
import { Inter } from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/navbar/NavMenu";

import ImportBootstrap from "@/components/ImportBootstrap";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ImportBootstrap/>

        <NavMenu/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
