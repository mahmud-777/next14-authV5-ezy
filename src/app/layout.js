import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" flex flex-grow">
          <div className=" min-h-screen w-[300px] bg-blue-400">
            <Nav />
          </div>
          <div className="w-full min-h-screen flex justify-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}