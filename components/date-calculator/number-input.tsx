"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Hash, Calendar, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { 
  getDateByDayNumber, 
  getDateByRemainingDays, 
  getLunarDateByDayNumber, 
  getLunarDateByRemainingDays,
  formatDate 
} from '@/lib/lunar-calendar-utils';

interface NumberInputResult {
  solarDate: string;
  lunarDate: string;
  description: string;
}

export function NumberInput() {
  const { t } = useLanguage();
  const [year, setYear] = useState(new Date().getFullYear());
  const [number, setNumber] = useState('');
  const [results, setResults] = useState<NumberInputResult[]>([]);

  const handleCalculate = () => {
    if (!number.trim() || !year) return;

    const dayNumber = parseInt(number);
    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 366) return;

    const newResults: NumberInputResult[] = [];

    try {
      // Solar calendar - day number
      const solarDateByDay = getDateByDayNumber(year, dayNumber);
      newResults.push({
        solarDate: formatDate(solarDateByDay, 'vi'),
        lunarDate: '',
        description: `Ngày thứ ${dayNumber} của năm ${year} là: ${formatDate(solarDateByDay, 'vi')}`
      });

      // Solar calendar - remaining days
      const solarDateByRemaining = getDateByRemainingDays(year, dayNumber);
      newResults.push({
        solarDate: formatDate(solarDateByRemaining, 'vi'),
        lunarDate: '',
        description: `Ngày còn lại thứ ${dayNumber} của năm ${year} là: ${formatDate(solarDateByRemaining, 'vi')}`
      });

      // Lunar calendar - day number
      const lunarDateByDay = getLunarDateByDayNumber(year, dayNumber);
      newResults.push({
        solarDate: formatDate(lunarDateByDay, 'vi'),
        lunarDate: '',
        description: `Ngày thứ ${dayNumber} của năm âm lịch ${year} là: ${formatDate(lunarDateByDay, 'vi')}`
      });

      // Lunar calendar - remaining days
      const lunarDateByRemaining = getLunarDateByRemainingDays(year, dayNumber);
      newResults.push({
        solarDate: formatDate(lunarDateByRemaining, 'vi'),
        lunarDate: '',
        description: `Ngày còn lại thứ ${dayNumber} của năm âm lịch ${year} là: ${formatDate(lunarDateByRemaining, 'vi')}`
      });

    } catch (error) {
      console.error('Error calculating dates:', error);
    }

    setResults(newResults);
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <Card className="moonrise-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-blue-600">
            <Hash className="w-5 h-5" />
            <span>{t('dateCalculator.numberInput')}</span>
          </CardTitle>
          <CardDescription>
            {t('dateCalculator.numberInputDesc')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="year-input" className="text-blue-600">
                {t('dateCalculator.enterYear')}
              </Label>
              <Select value={year.toString()} onValueChange={(value) => setYear(parseInt(value))}>
                <SelectTrigger className="bg-white/50 border-white/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 21 }, (_, i) => {
                    const yearOption = new Date().getFullYear() - 10 + i;
                    return (
                      <SelectItem key={yearOption} value={yearOption.toString()}>
                        {yearOption}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="number-input" className="text-blue-600">
                {t('dateCalculator.enterNumber')}
              </Label>
              <Input
                id="number-input"
                type="number"
                min="1"
                max="366"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="1-366"
                className="bg-white/50 border-white/20 focus:border-blue-500"
              />
            </div>
          </div>

          <Button
            onClick={handleCalculate}
            disabled={!number.trim() || !year}
            className="moonrise-button w-full"
          >
            <Search className="w-4 h-4 mr-2" />
            {t('dateCalculator.findDate')}
          </Button>
        </CardContent>
      </Card>

      {/* Results Section */}
      {results.length > 0 && (
        <Card className="moonrise-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-blue-600">
              <Calendar className="w-5 h-5" />
              <span>Kết Quả</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Solar Calendar Results */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-400 border-b border-blue-400/20 pb-2">
                    {t('dateCalculator.solarResult')}
                  </h4>
                  {results.slice(0, 2).map((result, index) => (
                    <div key={index} className="p-3 bg-blue-500/5 rounded-lg border border-blue-500/20">
                      <div className="text-sm text-gray-600 mb-1">
                        {result.description.split(':')[0]}:
                      </div>
                      <div className="font-semibold text-blue-400">
                        {result.description.split(': ')[1]}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Lunar Calendar Results */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-400 border-b border-green-400/20 pb-2">
                    {t('dateCalculator.lunarResult')}
                  </h4>
                  {results.slice(2, 4).map((result, index) => (
                    <div key={index} className="p-3 bg-green-500/5 rounded-lg border border-green-500/20">
                      <div className="text-sm text-gray-600 mb-1">
                        {result.description.split(':')[0]}:
                      </div>
                      <div className="font-semibold text-green-400">
                        {result.description.split(': ')[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}