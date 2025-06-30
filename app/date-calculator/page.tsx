"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Hash, 
  CalendarDays,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { DateHandbook } from '@/components/date-calculator/date-handbook';
import { NumberInput } from '@/components/date-calculator/number-input';
import { CalendarView } from '@/components/date-calculator/calendar-view';

export default function DateCalculator() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-6">
            <CalendarDays className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Lịch Âm & Dương</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Thần Số Học
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Công cụ lịch âm dương toàn diện để phân tích và chuyển đổi ngày tháng với thông tin chi tiết về số học, can chi, và ý nghĩa tâm linh.
          </p>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="handbook" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="handbook" className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>Sổ Tay Ngày</span>
            </TabsTrigger>
            <TabsTrigger value="number-input" className="flex items-center space-x-2">
              <Hash className="w-4 h-4" />
              <span>Nhập Số</span>
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Xem Lịch</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="handbook" className="space-y-6">
            <DateHandbook />
          </TabsContent>

          <TabsContent value="number-input" className="space-y-6">
            <NumberInput />
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <CalendarView />
          </TabsContent>
        </Tabs>

        {/* Features Overview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="moonrise-card group hover:scale-105 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="w-8 h-8 text-blue-400 animate-float" />
                <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-blue-200">
                  Toàn Diện
                </Badge>
              </div>
              <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                Sổ Tay Ngày
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Thông tin chi tiết về can chi, con giáp, lễ hội và ý nghĩa tâm linh
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="moonrise-card group hover:scale-105 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Hash className="w-8 h-8 text-purple-400 animate-float" style={{ animationDelay: '0.1s' }} />
                <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-blue-200">
                  Linh Hoạt
                </Badge>
              </div>
              <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                Nhập Số
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Tìm ngày bằng số thứ tự hoặc số ngày còn lại với xử lý lỗi thông minh
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="moonrise-card group hover:scale-105 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Calendar className="w-8 h-8 text-amber-400 animate-float" style={{ animationDelay: '0.2s' }} />
                <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-blue-200">
                  Tương Tác
                </Badge>
              </div>
              <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                Xem Lịch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Lịch tương tác hiển thị ngày âm, lễ hội và tiết khí một cách trực quan
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}