export interface Holiday {
  id: string;
  name: string;
  date?: { month: number; day: number }; // Solar calendar date
  lunarDate?: { month: number; day: number; isLeap?: boolean }; // Lunar calendar date
  type: 'official' | 'traditional' | 'international' | 'cultural' | 'religious' | 'memorial';
  description: string;
  isRecurring: boolean;
  country?: string;
  significance?: 'high' | 'medium' | 'low';
  activities?: string[];
}

// Empty holidays data array - all holiday data has been removed
export const HOLIDAYS_DATA: Holiday[] = [];

export function getHolidaysForDate(date: Date): Holiday[] {
  // Return empty array since no holidays are defined
  return [];
}

export function getHolidaysByType(type: Holiday['type']): Holiday[] {
  // Return empty array since no holidays are defined
  return [];
}

export function getHolidaysByMonth(month: number): Holiday[] {
  // Return empty array since no holidays are defined
  return [];
}

export function getHolidaysBySignificance(significance: Holiday['significance']): Holiday[] {
  // Return empty array since no holidays are defined
  return [];
}

export function getHolidaysByCountry(country: string): Holiday[] {
  // Return empty array since no holidays are defined
  return [];
}

export function searchHolidays(query: string): Holiday[] {
  // Return empty array since no holidays are defined
  return [];
}

export function getUpcomingHolidays(fromDate: Date, limit: number = 10): Holiday[] {
  // Return empty array since no holidays are defined
  return [];
}

function calculateDaysUntil(fromDate: Date, holidayDate: { month: number; day: number }): number {
  const currentYear = fromDate.getFullYear();
  let targetDate = new Date(currentYear, holidayDate.month - 1, holidayDate.day);
  
  // If the holiday has passed this year, check next year
  if (targetDate < fromDate) {
    targetDate = new Date(currentYear + 1, holidayDate.month - 1, holidayDate.day);
  }
  
  const diffTime = targetDate.getTime() - fromDate.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export const HOLIDAY_TYPE_COLORS = {
  official: 'bg-red-100 text-red-800 border-red-300',
  traditional: 'bg-green-100 text-green-800 border-green-300',
  international: 'bg-blue-100 text-blue-800 border-blue-300',
  cultural: 'bg-purple-100 text-purple-800 border-purple-300',
  religious: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  memorial: 'bg-gray-100 text-gray-800 border-gray-300'
};

export const HOLIDAY_TYPE_NAMES = {
  official: 'Lễ chính thức',
  traditional: 'Lễ truyền thống',
  international: 'Lễ quốc tế',
  cultural: 'Sự kiện văn hóa',
  religious: 'Lễ tôn giáo',
  memorial: 'Ngày kỷ niệm'
};

export const HOLIDAY_SIGNIFICANCE_COLORS = {
  high: 'bg-red-500',
  medium: 'bg-yellow-500',
  low: 'bg-green-500'
};

export const HOLIDAY_SIGNIFICANCE_NAMES = {
  high: 'Quan trọng cao',
  medium: 'Quan trọng trung bình',
  low: 'Quan trọng thấp'
};

// Helper function to get holiday statistics
export function getHolidayStats() {
  // Return zero stats since no holidays are defined
  const total = 0;
  const byType = Object.keys(HOLIDAY_TYPE_NAMES).reduce((acc, type) => {
    acc[type] = 0;
    return acc;
  }, {} as Record<string, number>);
  
  const bySignificance = Object.keys(HOLIDAY_SIGNIFICANCE_NAMES).reduce((acc, significance) => {
    acc[significance] = 0;
    return acc;
  }, {} as Record<string, number>);
  
  const vietnameseHolidays = 0;
  
  return {
    total,
    byType,
    bySignificance,
    vietnameseHolidays,
    internationalHolidays: 0
  };
}