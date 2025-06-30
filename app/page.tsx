"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles, 
  BookOpen, 
  Calculator, 
  Shuffle, 
  Star, 
  Zap,
  ChevronRight,
  Eye,
  Moon,
  Sun,
  CalendarDays
} from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: BookOpen,
      title: 'Kinh Dịch Oracle',
      description: 'Tham khảo Kinh Dịch cổ đại của Trung Quốc với trình tạo quẻ tương tác và giải thích toàn diện.',
      href: '/i-ching',
      badge: 'Trí Tuệ Cổ Đại',
      color: 'text-blue-400'
    },
    {
      icon: Calculator,
      title: 'Máy Tính Gematria',
      description: 'Khám phá Gematria Hebrew, Hy Lạp và tiếng Anh với nhiều hệ thống mật mã và phân tích số học.',
      href: '/gematria',
      badge: 'Kabbalah',
      color: 'text-purple-400'
    },
    {
      icon: Shuffle,
      title: 'Đọc Tarot',
      description: 'Rút bài và nhận được những hiểu biết sâu sắc với bộ bài tarot toàn diện và hệ thống giải thích.',
      href: '/tarot',
      badge: 'Bói Toán',
      color: 'text-amber-400'
    },
    {
      icon: CalendarDays,
      title: 'Thần Số Học',
      description: 'Công cụ lịch âm dương toàn diện để phân tích và chuyển đổi ngày tháng với thông tin chi tiết.',
      href: '/date-calculator',
      badge: 'Số Học',
      color: 'text-green-400'
    }
  ];

  const traditions = [
    {
      title: 'Huyền Học Phương Đông',
      description: 'Khám phá Kinh Dịch, Phong Thủy và các truyền thống trí tuệ cổ đại của Trung Quốc',
      icon: Sun,
    },
    {
      title: 'Huyền Học Phương Tây',
      description: 'Tìm hiểu Kabbalah, Tarot, Gematria và các truyền thống Hermetic',
      icon: Moon,
    },
    {
      title: 'Trí Tuệ Vũ Trụ',
      description: 'Kết nối kiến thức cổ đại với sự hiểu biết hiện đại',
      icon: Star,
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10"></div>
        <div className="relative container mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-8">
            <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Trí Tuệ Cổ Đại Gặp Công Nghệ Hiện Đại</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            Mở Khóa Những Bí Ẩn Của Trí Tuệ Cổ Đại
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
            Khám phá chiều sâu sâu sắc của Kinh Dịch, Gematria và Tarot thông qua các công cụ tương tác và hướng dẫn toàn diện. 
            Hành trình vào các truyền thống bí truyền đã hướng dẫn những người tìm kiếm trong hàng thiên niên kỷ.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" className="moonrise-button text-lg px-8 py-3">
              <Eye className="w-5 h-5 mr-2" />
              Bắt Đầu Hành Trình
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white/30 hover:border-blue-500 hover:bg-white/10">
              <BookOpen className="w-5 h-5 mr-2" />
              Khám Phá Truyền Thống
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Công Cụ Thiêng Liêng & Bói Toán</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Truy cập các công cụ bói toán mạnh mẽ có nguồn gốc từ truyền thống cổ đại, 
              được tăng cường với những hiểu biết hiện đại và tính năng tương tác.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="moonrise-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <feature.icon className={`w-8 h-8 ${feature.color} animate-float`} style={{ animationDelay: `${index * 0.2}s` }} />
                    <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-blue-200">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6">
                    {feature.description}
                  </CardDescription>
                  <Link href={feature.href}>
                    <Button variant="ghost" className="w-full justify-between hover:bg-blue-50">
                      Khám Phá Ngay
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Traditions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Truyền Thống Cổ Đại</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kết nối trí tuệ của Đông và Tây thông qua nghiên cứu toàn diện về các truyền thống huyền bí 
              đã định hình sự hiểu biết của con người trong hàng nghìn năm.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {traditions.map((tradition, index) => (
              <div key={tradition.title} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <tradition.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {tradition.title}
                </h3>
                <p className="text-gray-600">
                  {tradition.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="moonrise-card text-center p-8 moonrise-glow">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                Sẵn Sàng Bắt Đầu Hành Trình Khám Phá?
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tham gia cùng hàng nghìn người tìm kiếm khám phá trí tuệ cổ đại thông qua các công cụ hiện đại. 
                Bắt đầu hành trình miễn phí và khám phá những bí ẩn đang chờ đợi bạn.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button size="lg" className="moonrise-button text-lg px-8 py-3">
                  <Zap className="w-5 h-5 mr-2" />
                  Bắt Đầu Hành Trình Miễn Phí
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white/30 hover:border-blue-500 hover:bg-white/10">
                  Tìm Hiểu Thêm
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}