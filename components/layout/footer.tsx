import React from 'react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-white/50 backdrop-blur-sm border-t border-white/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">∞</span>
              </div>
              <span className="font-bold text-xl text-gray-800">
                Nghiên Cứu Huyền Bí
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Khám phá trí tuệ cổ đại và kiến thức bí truyền thông qua các công cụ tương tác và hướng dẫn toàn diện. 
              Khám phá những bí ẩn của Kinh Dịch, Gematria, Tarot và nhiều hơn nữa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/i-ching" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Kinh Dịch Oracle
                </Link>
              </li>
              <li>
                <Link href="/gematria" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Máy Tính Gematria
                </Link>
              </li>
              <li>
                <Link href="/tarot" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Đọc Tarot
                </Link>
              </li>
              <li>
                <Link href="/date-calculator" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Thần Số Học
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Tài Nguyên</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Hướng Dẫn Học Tập
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Chính Sách Bảo Mật
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2025 Nghiên Cứu Huyền Bí. Tất cả quyền được bảo lưu.
          </p>
          <p className="text-gray-600 text-sm mt-2 md:mt-0">
            "Như trên, như dưới" - Hermes Trismegistus
          </p>
        </div>
      </div>
    </footer>
  );
}