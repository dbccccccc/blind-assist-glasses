'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navLinks = [
    { href: "/", text: "首页" },
    { href: "/product", text: "产品" },
    { href: "/specs", text: "技术规格" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
              智能辅助眼镜
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-blue-400 bg-blue-900/20'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {link.text}
              </Link>
            ))}
            <Link 
              href="/admin"
              className={`transition-colors px-4 py-2 rounded-lg border ${
                isActive('/admin')
                  ? 'text-blue-400 border-blue-400 bg-blue-900/20'
                  : 'text-gray-300 border-gray-600 hover:text-white hover:border-gray-500'
              }`}
            >
              管理平台
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 