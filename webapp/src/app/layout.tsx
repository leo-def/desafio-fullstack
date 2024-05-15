import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppMessage } from "../commons/message/_components/appMessage";
import { Sidebar } from "../commons/sidebar/_components/sidebar";
import { AppLoader } from "./_components/appLoader";
import { AppProvider } from "./_components/appProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mentor App",
  description: "App for manage mentors",
};

export default function RootLayout({
  children,
  navbar
}: Readonly<{
  children: React.ReactNode;
  navbar: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <AppLoader />
          <AppMessage />
            <Sidebar />
              TEST
            <main className='container mx-auto'>
                {navbar}
                {children}
            </main>
        </AppProvider >
      </body>
    </html>
  );
}
