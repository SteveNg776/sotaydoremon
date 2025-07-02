"use client";

import React from 'react';
import { Hexagram } from '@/lib/i-ching-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';

interface HexagramDisplayProps {
  hexagram: Hexagram;
  changingLines?: number[];
}

export function HexagramDisplay({ hexagram, changingLines = [] }: HexagramDisplayProps) {
  const renderHexagramLines = () => {
    return (
      <div className="flex flex-col items-center space-y-2 p-6">
        {hexagram.lines.map((isYang, index) => {
          const lineNumber = 6 - index; // Lines are numbered from bottom to top
          const isChanging = changingLines.includes(lineNumber);
          
          return (
            <div
              key={index}
              className={`relative w-16 h-2 ${
                isChanging ? 'animate-pulse' : ''
              }`}
            >
              {isYang ? (
                // Yang line (solid)
                <div className={`w-full h-full rounded ${
                  isChanging 
                    ? 'bg-gradient-to-r from-mystical-gold to-yellow-500' 
                    : 'bg-mystical-gold'
                }`} />
              ) : (
                // Yin line (broken)
                <div className="flex space-x-2">
                  <div className={`w-6 h-full rounded ${
                    isChanging 
                      ? 'bg-gradient-to-r from-mystical-gold to-yellow-500' 
                      : 'bg-mystical-gold'
                  }`} />
                  <div className={`w-6 h-full rounded ${
                    isChanging 
                      ? 'bg-gradient-to-r from-mystical-gold to-yellow-500' 
                      : 'bg-mystical-gold'
                  }`} />
                </div>
              )}
              {isChanging && (
                <div className="absolute -right-8 top-0 text-mystical-gold text-sm font-bold">
                  {lineNumber}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Card className="mystical-card">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <div className="text-4xl font-mystical">{hexagram.symbol}</div>
          <div>
            <CardTitle className="text-2xl font-mystical text-mystical-gold">
              {hexagram.name}
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              {hexagram.chineseName}
            </CardDescription>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {hexagram.keywords.map((keyword) => (
            <Badge key={keyword} variant="secondary" className="bg-mystical-gold/10 text-mystical-gold">
              {keyword}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Hexagram Lines */}
          <div className="flex justify-center">
            <Card className="bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center text-mystical-gold">Vạch Quẻ</CardTitle>
              </CardHeader>
              <CardContent>
                {renderHexagramLines()}
                {changingLines.length > 0 && (
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Vạch thay đổi: {changingLines.join(', ')}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Interpretation */}
          <div>
            <Tabs defaultValue="meaning" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                <TabsTrigger value="meaning">Ý Nghĩa</TabsTrigger>
                <TabsTrigger value="advice">Lời Khuyên</TabsTrigger>
                <TabsTrigger value="relationships">Tình Yêu</TabsTrigger>
                <TabsTrigger value="career">Sự Nghiệp</TabsTrigger>
              </TabsList>
              
              <TabsContent value="meaning" className="mt-4">
                <ScrollArea className="h-[300px] w-full">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-mystical-gold mb-2">Ý Nghĩa Cốt Lõi</h4>
                      <p className="text-muted-foreground">{hexagram.meaning}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-mystical-gold mb-2">Giải Thích</h4>
                      <p className="text-muted-foreground">{hexagram.interpretation}</p>
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>
              
              <TabsContent value="advice" className="mt-4">
                <ScrollArea className="h-[300px] w-full">
                  <div>
                    <h4 className="font-semibold text-mystical-gold mb-2">Hướng Dẫn</h4>
                    <p className="text-muted-foreground">{hexagram.advice}</p>
                  </div>
                </ScrollArea>
              </TabsContent>
              
              <TabsContent value="relationships" className="mt-4">
                <ScrollArea className="h-[300px] w-full">
                  <div>
                    <h4 className="font-semibold text-mystical-gold mb-2">Tình Yêu & Các Mối Quan Hệ</h4>
                    <p className="text-muted-foreground">{hexagram.relationships}</p>
                  </div>
                </ScrollArea>
              </TabsContent>
              
              <TabsContent value="career" className="mt-4">
                <ScrollArea className="h-[300px] w-full">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-mystical-gold mb-2">Sự Nghiệp & Công Việc</h4>
                      <p className="text-muted-foreground">{hexagram.career}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-mystical-gold mb-2">Sức Khỏe & Thể Chất</h4>
                      <p className="text-muted-foreground">{hexagram.health}</p>
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Changing Lines Interpretation */}
        {changingLines.length > 0 && (
          <div className="mt-6 p-4 bg-mystical-gold/5 rounded-lg border border-mystical-gold/20">
            <h4 className="font-semibold text-mystical-gold mb-3">Giải Thích Vạch Thay Đổi</h4>
            <div className="space-y-2">
              {changingLines.map((lineNumber) => (
                <div key={lineNumber} className="text-sm">
                  <span className="font-medium text-mystical-gold">Vạch {lineNumber}:</span>
                  <span className="text-muted-foreground ml-2">
                    {hexagram.changingLines[lineNumber] || 'Không có giải thích cụ thể.'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}