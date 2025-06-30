"use client";

import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Calendar, 
  Star, 
  Lightbulb, 
  Heart,
  Briefcase,
  Activity,
  Loader2
} from 'lucide-react';

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

interface NumerologyInsightDialogProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  date: Date;
  insightData?: NumerologyInsight;
}

export function NumerologyInsightDialog({ 
  isOpen, 
  onClose, 
  isLoading, 
  date, 
  insightData 
}: NumerologyInsightDialogProps) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] bg-white/95 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-blue-600">
            <Star className="w-5 h-5" />
            <span>Khám phá thêm về ngày này</span>
          </DialogTitle>
          <DialogDescription>
            Phân tích thần số học và ý nghĩa tâm linh cho ngày {formatDate(date)}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center space-y-4">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto" />
                <p className="text-gray-600">Đang phân tích ý nghĩa ngày này...</p>
              </div>
            </div>
          ) : insightData ? (
            <div className="space-y-6">
              {/* Header */}
              <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                <p className="text-gray-700">
                  Dưới đây là thông tin về ngày {formatDate(date)}, được trình bày theo yêu cầu của bạn:
                </p>
              </div>

              {/* Numerology Meaning */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-blue-600 flex items-center space-x-2">
                  <Star className="w-5 h-5" />
                  <span>Ý nghĩa Thần số học</span>
                </h3>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-gray-700 leading-relaxed">{insightData.numerologyMeaning}</p>
                </div>
              </div>

              <Separator />

              {/* Historical Events */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-purple-600 flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Sự kiện Lịch sử ("Ngày này năm xưa")</span>
                </h3>
                <div className="space-y-3">
                  {insightData.historicalEvents.map((event, index) => (
                    <div key={index} className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-start space-x-3">
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 shrink-0">
                          {event.year}
                        </Badge>
                        <p className="text-gray-700 text-sm leading-relaxed">{event.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Energy Information */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-green-600 flex items-center space-x-2">
                  <Activity className="w-5 h-5" />
                  <span>Thông tin Năng lượng</span>
                </h3>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200 space-y-3">
                  <div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 mb-2">
                      {insightData.energy.type}
                    </Badge>
                    <p className="text-gray-700 leading-relaxed">{insightData.energy.description}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {insightData.energy.characteristics.map((characteristic, index) => (
                      <div key={index} className="text-sm bg-white/50 px-3 py-2 rounded border border-green-300">
                        {characteristic}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Separator />

              {/* Activity Suggestions */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-amber-600 flex items-center space-x-2">
                  <Lightbulb className="w-5 h-5" />
                  <span>Gợi ý Hoạt động</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="font-medium text-amber-700">Dành cho gia đình:</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{insightData.suggestions.family}</p>
                  </div>
                  
                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Heart className="w-4 h-4 text-pink-500" />
                      <span className="font-medium text-amber-700">Dành cho cặp đôi:</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{insightData.suggestions.couples}</p>
                  </div>
                  
                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Briefcase className="w-4 h-4 text-blue-500" />
                      <span className="font-medium text-amber-700">Dành cho cá nhân:</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{insightData.suggestions.individuals}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">Không có dữ liệu phân tích.</p>
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}