import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

export const metadata: Metadata = {
  title: "Erewhon Library",
  description: "Erewhon Library is a modern digital platform for book management, featuring a robust Node.js REST API and a dynamic Next.js front end. Utilizing Shadcn UI for its sleek interface, it offers seamless CRUD operations, efficient search, and detailed library analytics. Designed for ease of use and efficient data handling, Erewhon Library streamlines the management and exploration of book collections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  );
}
