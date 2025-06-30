"use client";

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calendar, CalendarDays, Clock, TrendingUp, Sparkles, Star, AlertCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { getDateInfo, formatDate, validateSolarDate, type DateInfo } from '@/lib/lunar-calendar-utils';
import { NumerologyInsightDialog } from './numerology-insight-dialog';

interface NumerologyInsight {
  numerologyMeaning: string;
  historicalEvents: Array<{
    year: number;
    event: string;
  }>;
  energy: {
    type: string;
    description: string;
    characteristics: string[];
  };
  suggestions: {
    family: string;
    couples: string;
    individuals: string;
  };
}

export function DateHandbook() {
  const { t } = useLanguage();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isInsightDialogOpen, setIsInsightDialogOpen] = useState(false);
  const [isFetchingInsight, setIsFetchingInsight] = useState(false);
  const [insightData, setInsightData] = useState<NumerologyInsight | undefined>(undefined);
  const [dateError, setDateError] = useState<string | null>(null);
  const [conversionSuccess, setConversionSuccess] = useState<string | null>(null);

  const dateInfo: DateInfo = useMemo(() => {
    try {
      const info = getDateInfo(currentDate);
      setDateError(null);
      return info;
    } catch (error) {
      console.error('Error getting date info:', error);
      setDateError('Có lỗi xảy ra khi tính toán thông tin ngày. Vui lòng thử lại.');
      // Return fallback data
      return {
        solarDate: currentDate,
        lunarDate: 'Không xác định',
        lunarDateDetailed: {
          day: 0,
          month: 0,
          year: 0,
          monthName: 'Không xác định',
          isLeapMonth: false
        },
        canChi: {
          year: 'Không xác định',
          month: 'Không xác định',
          day: 'Không xác định'
        },
        dayOfYear: 0,
        daysRemaining: 0,
        weekNumber: 0,
        yearProgress: 0,
        lunarDayOfYear: 0,
        lunarDaysRemaining: 0,
        lunarWeekNumber: 0,
        lunarYearProgress: 0,
        festivals: [],
        solarTerms: [],
        zodiacAnimal: 'Không xác định',
        constellation: 'Không xác định'
      } as DateInfo;
    }
  }, [currentDate]);

  const handleTodayClick = () => {
    const today = new Date();
    setCurrentDate(today);
    setConversionSuccess('Đã chuyển về ngày hôm nay.');
    setTimeout(() => setConversionSuccess(null), 3000);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const newDate = new Date(e.target.value);
      const validation = validateSolarDate(newDate);
      
      if (!validation.isValid) {
        setDateError(validation.error || 'Ngày không hợp lệ');
        return;
      }
      
      setCurrentDate(newDate);
      setDateError(null);
      setConversionSuccess('Đã cập nhật thông tin ngày thành công.');
      setTimeout(() => setConversionSuccess(null), 3000);
    } catch (error) {
      setDateError('Định dạng ngày không hợp lệ. Vui lòng chọn ngày từ lịch.');
    }
  };

  const handleExploreInsight = async () => {
    setIsFetchingInsight(true);
    setIsInsightDialogOpen(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock data - in real implementation, this would come from Gemini API
    const mockInsightData: NumerologyInsight = {
      numerologyMeaning: `Ngày ${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} mang trong mình năng lượng của số ${currentDate.getDate()}. Trong thần số học, số này đại diện cho sự khởi đầu mới, sáng tạo và độc lập. Những người sinh vào ngày này thường có khả năng lãnh đạo tự nhiên và tinh thần tiên phong. Ngày này khuyến khích bạn bắt đầu những dự án mới, thể hiện tính cá nhân và theo đuổi những ước mơ của mình với sự tự tin và quyết tâm.`,
      historicalEvents: [
        {
          year: 1976,
          event: "Seychelles giành được độc lập từ Vương quốc Anh."
        },
        {
          year: 1995,
          event: "Tàu con thoi Atlantis của NASA ghép nối thành công với trạm vũ trụ Mir của Nga, mở ra kỷ nguyên hợp tác không gian quốc tế."
        },
        {
          year: 1949,
          event: "Nam Phi bắt đầu thực thi chế độ Apartheid."
        },
        {
          year: 2007,
          event: "Chiếc iPhone thế hệ đầu tiên được Apple bán ra, đánh dấu một bước ngoặt lớn trong ngành công nghiệp điện thoại di động."
        },
        {
          year: 1966,
          event: "Chiến tranh Việt Nam - Hoa Kỳ ném bom Bắc Việt Nam."
        }
      ],
      energy: {
        type: "Năng lượng Khởi đầu",
        description: `Vì ngày ${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} là ${currentDate.toLocaleDateString('vi-VN', { weekday: 'long' })} và rơi vào mùa ${currentDate.getMonth() < 3 || currentDate.getMonth() > 10 ? 'đông' : currentDate.getMonth() < 6 ? 'xuân' : currentDate.getMonth() < 9 ? 'hè' : 'thu'}, đây là một ngày mang năng lượng đặc biệt.`,
        characteristics: ["Sáng tạo", "Độc lập", "Lãnh đạo", "Tiên phong", "Tự tin", "Quyết đoán"]
      },
      suggestions: {
        family: "Dành thời gian ở các khu du lịch ven biển như Nha Trang, Đà Nẵng hoặc Vũng Tàu. Tận hưởng không khí biển, tắm biển và thưởng thức hải sản tươi ngon.",
        couples: "Tổ chức một buổi picnic lãng mạn ở công viên hoặc khu vườn, hoặc tham gia một lớp học nấu ăn cùng nhau để tạo thêm kỷ niệm đáng nhớ.",
        individuals: "Tham gia một lớp học yoga hoặc thiền ngoài trời để thư giãn và tái tạo năng lượng. Hoặc đơn giản là đọc một cuốn sách hay trong một quán cà phê yên tĩnh."
      }
    };
    
    setInsightData(mockInsightData);
    setIsFetchingInsight(false);
  };

  const handleCloseInsightDialog = () => {
    setIsInsightDialogOpen(false);
    setInsightData(undefined);
  };

  return (
    <div className="space-y-6">
      {/* Error and Success Alerts */}
      {dateError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{dateError}</AlertDescription>
        </Alert>
      )}
      
      {conversionSuccess && (
        <Alert className="border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">{conversionSuccess}</AlertDescription>
        </Alert>
      )}

      {/* Compact Date Selection - Above the fold priority */}
      <Card className="moonrise-card">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <input
              type="date"
              value={currentDate.toISOString().split('T')[0]}
              onChange={handleDateChange}
              className="flex-1 w-full px-3 py-2 bg-white/50 border border-white/20 rounded-lg focus:border-blue-500 focus:outline-none"
            />
            <Button
              onClick={handleTodayClick}
              className="w-full sm:w-auto px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium"
            >
              Hôm Nay
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Streamlined Date Information Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Solar Calendar Info */}
        <Card className="moonrise-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-blue-400 text-lg">
              <Calendar className="w-5 h-5" />
              <span>Dương Lịch</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-white/50 rounded-lg border border-white/20">
                <div className="text-xs text-gray-600 mb-1">Ngày thứ</div>
                <div className="text-xl font-bold text-blue-400">{dateInfo.dayOfYear}</div>
              </div>
              <div className="text-center p-3 bg-white/50 rounded-lg border border-white/20">
                <div className="text-xs text-gray-600 mb-1">Còn lại</div>
                <div className="text-xl font-bold text-blue-400">{dateInfo.daysRemaining}</div>
              </div>
              <div className="text-center p-3 bg-white/50 rounded-lg border border-white/20">
                <div className="text-xs text-gray-600 mb-1">Tuần</div>
                <div className="text-xl font-bold text-blue-400">{dateInfo.weekNumber}</div>
              </div>
              <div className="text-center p-3 bg-white/50 rounded-lg border border-white/20">
                <div className="text-xs text-gray-600 mb-1">% năm</div>
                <div className="text-xl font-bold text-blue-400">{dateInfo.yearProgress}%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lunar Calendar Info */}
        <Card className="moonrise-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-green-400 text-lg">
              <Clock className="w-5 h-5" />
              <span>Âm Lịch</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              <div className="p-3 bg-white/50 rounded-lg border border-white/20">
                <div className="text-xs text-gray-600 mb-1">Ngày âm lịch</div>
                <div className="text-sm font-semibold text-green-400">{dateInfo.lunarDate}</div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-white/50 rounded-lg border border-white/20">
                  <div className="text-xs text-gray-600 mb-1">Ngày thứ</div>
                  <div className="text-xl font-bold text-green-400">{dateInfo.lunarDayOfYear}</div>
                </div>
                <div className="text-center p-3 bg-white/50 rounded-lg border border-white/20">
                  <div className="text-xs text-gray-600 mb-1">% năm</div>
                  <div className="text-xl font-bold text-green-400">{dateInfo.lunarYearProgress}%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insight Exploration - Prominent CTA */}
      <Card className="moonrise-card">
        <CardContent className="p-6 text-center">
          <div className="mb-4">
            <Star className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Khám phá ý nghĩa sâu sắc
            </h3>
            <p className="text-gray-600 text-sm">
              Tìm hiểu thêm về thần số học và ý nghĩa tâm linh của ngày này
            </p>
          </div>
          
          <Button
            onClick={handleExploreInsight}
            className="moonrise-button"
            size="lg"
            disabled={!!dateError}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Khám phá ngay
          </Button>
        </CardContent>
      </Card>

      {/* Numerology Insight Dialog */}
      <NumerologyInsightDialog
        isOpen={isInsightDialogOpen}
        onClose={handleCloseInsightDialog}
        isLoading={isFetchingInsight}
        date={currentDate}
        insightData={insightData}
      />
    </div>
  );
}