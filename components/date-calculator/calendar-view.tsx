"use client";

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ChevronLeft, ChevronRight, Calendar, AlertCircle, Info } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { getMonthCalendar, getLunarDateInfo, formatDate } from '@/lib/lunar-calendar-utils';

export function CalendarView() {
  const { t } = useLanguage();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [calendarError, setCalendarError] = useState<string | null>(null);

  const monthNames = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
                     'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];

  const dayNames = ['Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy', 'Chủ nhật'];

  const calendar = useMemo(() => {
    try {
      setCalendarError(null);
      return getMonthCalendar(currentYear, currentMonth);
    } catch (error) {
      console.error('Error generating calendar:', error);
      setCalendarError('Có lỗi xảy ra khi tạo lịch. Vui lòng thử lại.');
      return [];
    }
  }, [currentYear, currentMonth]);

  const handlePreviousMonth = () => {
    try {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
      setCalendarError(null);
    } catch (error) {
      setCalendarError('Không thể chuyển về tháng trước.');
    }
  };

  const handleNextMonth = () => {
    try {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
      setCalendarError(null);
    } catch (error) {
      setCalendarError('Không thể chuyển đến tháng sau.');
    }
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentMonth;
  };

  const handleDateSelect = (date: Date) => {
    try {
      setSelectedDate(date);
      setCalendarError(null);
    } catch (error) {
      setCalendarError('Không thể chọn ngày này.');
    }
  };

  const getLunarDayDisplay = (date: Date) => {
    try {
      const lunarInfo = getLunarDateInfo(date);
      return lunarInfo.lunarDateDetailed.day || 'N/A';
    } catch (error) {
      return 'N/A';
    }
  };

  const getDateFestivals = (date: Date) => {
    try {
      const lunarInfo = getLunarDateInfo(date);
      return lunarInfo.festivals;
    } catch (error) {
      return [];
    }
  };

  return (
    <div className="space-y-6">
      {/* Error Alert */}
      {calendarError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{calendarError}</AlertDescription>
        </Alert>
      )}

      {/* Calendar Card */}
      <Card className="moonrise-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2 text-blue-600">
              <Calendar className="w-5 h-5" />
              <span>{monthNames[currentMonth]} - {currentYear}</span>
            </CardTitle>
            
            <div className="flex items-center space-x-2">
              <Select value={currentMonth.toString()} onValueChange={(value) => setCurrentMonth(parseInt(value))}>
                <SelectTrigger className="w-32 bg-white/50 border-white/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {monthNames.map((month, index) => (
                    <SelectItem key={index} value={index.toString()}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={currentYear.toString()} onValueChange={(value) => setCurrentYear(parseInt(value))}>
                <SelectTrigger className="w-24 bg-white/50 border-white/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 21 }, (_, i) => {
                    const year = new Date().getFullYear() - 10 + i;
                    return (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handlePreviousMonth}
                className="border-white/30 hover:border-blue-500"
                disabled={!!calendarError}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleNextMonth}
                className="border-white/30 hover:border-blue-500"
                disabled={!!calendarError}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-lg p-4">
            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day) => (
                <div key={day} className="text-center text-sm font-medium text-blue-600 p-2">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Calendar Grid */}
            {calendar.length > 0 ? (
              <div className="space-y-1">
                {calendar.map((week, weekIndex) => (
                  <div key={weekIndex} className="grid grid-cols-7 gap-1">
                    {week.map((date, dayIndex) => {
                      const lunarDay = getLunarDayDisplay(date);
                      const festivals = getDateFestivals(date);
                      const hasFestival = festivals.length > 0;
                      
                      return (
                        <button
                          key={dayIndex}
                          onClick={() => handleDateSelect(date)}
                          className={`
                            relative p-2 rounded-lg text-sm transition-all duration-200 hover:scale-105
                            ${isCurrentMonth(date) 
                              ? 'bg-white/50 text-gray-800 hover:bg-blue-50' 
                              : 'bg-white/20 text-gray-500 hover:bg-white/30'
                            }
                            ${isToday(date) 
                              ? 'ring-2 ring-blue-500 bg-blue-100' 
                              : ''
                            }
                            ${isSelected(date) 
                              ? 'bg-blue-200 text-blue-800 font-bold' 
                              : ''
                            }
                            ${hasFestival && isCurrentMonth(date)
                              ? 'ring-1 ring-red-300 bg-red-50'
                              : ''
                            }
                          `}
                          title={hasFestival ? `Lễ hội: ${festivals.join(', ')}` : ''}
                        >
                          <div className="flex flex-col items-center space-y-1">
                            <span className="font-semibold">{date.getDate()}</span>
                            {isCurrentMonth(date) && (
                              <span className="text-xs text-green-600 opacity-70">
                                {lunarDay}
                              </span>
                            )}
                            {hasFestival && isCurrentMonth(date) && (
                              <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Không thể hiển thị lịch</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Selected Date Information */}
      {selectedDate && (
        <Card className="moonrise-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-purple-600">
              <Info className="w-5 h-5" />
              <span>Thông Tin Ngày Đã Chọn</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-700 mb-2">Dương Lịch</h4>
                <p className="text-blue-600">{formatDate(selectedDate, 'vi')}</p>
                <p className="text-sm text-gray-600 mt-1">
                  {selectedDate.toLocaleDateString('vi-VN', { weekday: 'long' })}
                </p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-700 mb-2">Âm Lịch</h4>
                <p className="text-green-600">{getLunarDateInfo(selectedDate).lunarDate}</p>
                {getDateFestivals(selectedDate).length > 0 && (
                  <div className="mt-2">
                    {getDateFestivals(selectedDate).map((festival, index) => (
                      <Badge key={index} variant="secondary" className="mr-1 bg-red-100 text-red-700">
                        {festival}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Legend */}
      <Card className="moonrise-card">
        <CardContent className="p-4">
          <h4 className="font-semibold text-gray-700 mb-3">Chú Thích</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-100 border-2 border-blue-500 rounded"></div>
              <span>Hôm nay</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-200 rounded"></div>
              <span>Ngày đã chọn</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-50 border border-red-300 rounded"></div>
              <span>Có lễ hội</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span>Ngày âm lịch</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}