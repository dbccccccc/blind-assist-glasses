import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "智能辅助眼镜 - 为视障人士打造",
  description: "新一代智能辅助眼镜，为视障人士提供环境感知、智能导航和危险预警等功能",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigation = [
    { href: "/", text: "首页" },
    { href: "/product", text: "产品" },
    { href: "/specs", text: "技术规格" },
  ];

  return (
    <html lang="zh">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-black/50 backdrop-blur-xl border-t border-gray-800 py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <Link
                  href="/"
                  className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                >
                  智能辅助眼镜
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed">
                  为视障人士创造更美好的生活
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white">快速链接</h3>
                <div className="flex flex-col space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
              <p>© 2024 智能辅助眼镜. 保留所有权利.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
