import { Inter } from "next/font/google";
import "./globals.css";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex bg-[#F8F9FA]`}>
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Topbar />
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
