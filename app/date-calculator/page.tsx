"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Hash, 
  CalendarDays,
  BookOpen
} from 'lucide-react';
import { DateHandbook } from '@/components/date-calculator/date-handbook';
import { NumberInput } from '@/components/date-calculator/number-input';
import { CalendarView } from '@/components/date-calculator/calendar-view';

export default function DateCalculator() {
  return (
    <div className="min-h-screen py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Compact Header - Above the fold optimization */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/20 border border-white/30 mb-4">
            <CalendarDays className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Lịch Âm & Dương</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
            Thần Số Học
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Công cụ lịch âm dương toàn diện với thông tin chi tiết về số học và ý nghĩa tâm linh.
          </p>
        </div>

        {/* Main Content - Prioritized above the fold */}
        <Tabs defaultValue="handbook" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6 h-12">
            <TabsTrigger value="handbook" className="flex items-center space-x-2 text-sm sm:text-base">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Sổ Tay Ngày</span>
              <span className="sm:hidden">Sổ Tay</span>
            </TabsTrigger>
            <TabsTrigger value="number-input" className="flex items-center space-x-2 text-sm sm:text-base">
              <Hash className="w-4 h-4" />
              <span className="hidden sm:inline">Nhập Số</span>
              <span className="sm:hidden">Số</span>
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center space-x-2 text-sm sm:text-base">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Xem Lịch</span>
              <span className="sm:hidden">Lịch</span>
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

        {/* Quick Access Cards - Streamlined and functional */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="moonrise-card group hover:scale-105 transition-all duration-300 cursor-pointer">
            <CardContent className="p-4 text-center">
              <BookOpen className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Phân Tích Ngày</h3>
              <p className="text-sm text-gray-600">Thông tin chi tiết can chi, con giáp và ý nghĩa</p>
            </CardContent>
          </Card>

          <Card className="moonrise-card group hover:scale-105 transition-all duration-300 cursor-pointer">
            <CardContent className="p-4 text-center">
              <Hash className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Tìm Kiếm Số</h3>
              <p className="text-sm text-gray-600">Tìm ngày theo số thứ tự hoặc ngày còn lại</p>
            </CardContent>
          </Card>

          <Card className="moonrise-card group hover:scale-105 transition-all duration-300 cursor-pointer">
            <CardContent className="p-4 text-center">
              <Calendar className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Lịch Tương Tác</h3>
              <p className="text-sm text-gray-600">Xem lịch âm dương với thông tin chi tiết</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}