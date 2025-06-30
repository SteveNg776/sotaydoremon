import { Lunar, Solar } from 'lunar-javascript';
import { Holiday, HOLIDAYS_DATA, getHolidaysForDate } from './holidays-data';

export interface DateInfo {
  solarDate: Date;
  lunarDate: string;
  lunarDateDetailed: {
    day: number;
    month: number;
    year: number;
    monthName: string;
    isLeapMonth: boolean;
  };
  canChi: {
    year: string;
    month: string;
    day: string;
  };
  dayOfYear: number;
  daysRemaining: number;
  weekNumber: number;
  yearProgress: number;
  lunarDayOfYear: number;
  lunarDaysRemaining: number;
  lunarWeekNumber: number;
  lunarYearProgress: number;
  festivals: Holiday[];
  solarTerms: string[];
  zodiacAnimal: string;
  constellation: string;
}

// Lunar calendar data array from comaythoigian.space
const LUNAR_INFO = [0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,0x14b63,0x09370,0x049f8,0x04970,0x0a4b0,0x164b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,0x06ca0,0x0b550,0x15355,0x04da0,0x0a5b0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0];

// Helper functions for lunar calendar calculations
function getLunarYearDays(year: number): number {
  let days = 348;
  for (let i = 0x8000; i > 0x8; i >>= 1) {
    days += (LUNAR_INFO[year - 1900] & i) ? 1 : 0;
  }
  return days + getLunarLeapMonthDays(year);
}

function getLunarLeapMonth(year: number): number {
  return LUNAR_INFO[year - 1900] & 0xf;
}

function getLunarLeapMonthDays(year: number): number {
  if (getLunarLeapMonth(year)) {
    return (LUNAR_INFO[year - 1900] & 0x10000) ? 30 : 29;
  }
  return 0;
}

function getLunarMonthDays(year: number, month: number): number {
  return (LUNAR_INFO[year - 1900] & (0x10000 >> month)) ? 30 : 29;
}

// Main lunar date calculation function based on comaythoigian.space logic
function calculateLunarDate(date: Date): {
  year: number;
  month: number;
  day: number;
  isLeap: boolean;
  dayOfYear: number;
  totalDaysInYear: number;
} {
  try {
    const baseDate = new Date(1900, 0, 31); // January 31, 1900
    const diffTime = date.getTime() - baseDate.getTime();
    let totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    let year: number;
    let yearDays: number;
    
    // Find the lunar year
    for (year = 1900; year < 2100 && totalDays >= 0; year++) {
      yearDays = getLunarYearDays(year);
      if (totalDays < yearDays) break;
      totalDays -= yearDays;
    }
    
    // Find the lunar month
    const leapMonth = getLunarLeapMonth(year);
    let isLeap = false;
    let month: number;
    let monthDays: number;
    
    for (month = 1; month <= 12; month++) {
      if (leapMonth > 0 && month === (leapMonth + 1) && !isLeap) {
        month--;
        isLeap = true;
        monthDays = getLunarLeapMonthDays(year);
      } else {
        monthDays = getLunarMonthDays(year, month);
      }
      
      if (totalDays < monthDays) break;
      totalDays -= monthDays;
    }
    
    const day = totalDays + 1;
    
    // Calculate day of year
    let dayOfYear = 0;
    for (let y = 1900; y < year; y++) {
      dayOfYear += getLunarYearDays(y);
    }
    
    let currentDayOfYear = totalDays + 1;
    for (let m = 1; m < month; m++) {
      currentDayOfYear += getLunarMonthDays(year, m);
    }
    
    // Add leap month days if applicable
    if (leapMonth && month > leapMonth) {
      currentDayOfYear += getLunarLeapMonthDays(year);
    }
    
    const totalDaysInYear = getLunarYearDays(year);
    
    return {
      year,
      month,
      day,
      isLeap: isLeap && (month === leapMonth),
      dayOfYear: currentDayOfYear,
      totalDaysInYear
    };
  } catch (error) {
    console.error('Error in calculateLunarDate:', error);
    // Fallback to current date
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      isLeap: false,
      dayOfYear: 1,
      totalDaysInYear: 354
    };
  }
}

// Convert lunar date to solar date for a specific year
function lunarToSolarForYear(year: number, lunarMonth: number, lunarDay: number): Date | null {
  try {
    const lunar = Lunar.fromYmd(year, lunarMonth, lunarDay);
    const solar = lunar.getSolar();
    return solar.toDate();
  } catch (error) {
    console.error('Error converting lunar to solar:', error);
    return null;
  }
}

export function getDayOfYear(date: Date): number {
  try {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - start.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    return Math.max(1, dayOfYear);
  } catch (error) {
    console.error('Error calculating day of year:', error);
    return 1;
  }
}

export function getDaysRemainingInYear(date: Date): number {
  try {
    const endOfYear = new Date(date.getFullYear(), 11, 31);
    const diff = endOfYear.getTime() - date.getTime();
    const daysRemaining = Math.floor(diff / (1000 * 60 * 60 * 24));
    return Math.max(0, daysRemaining);
  } catch (error) {
    console.error('Error calculating days remaining:', error);
    return 0;
  }
}

export function getWeekNumber(date: Date): number {
  try {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNumber = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
    return Math.max(1, weekNumber);
  } catch (error) {
    console.error('Error calculating week number:', error);
    return 1;
  }
}

export function getYearProgress(date: Date): number {
  try {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const endOfYear = new Date(date.getFullYear(), 11, 31);
    const totalDays = (endOfYear.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24);
    const daysPassed = (date.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24);
    const progress = Math.round((daysPassed / totalDays) * 100 * 100) / 100;
    return Math.min(100, Math.max(0, progress));
  } catch (error) {
    console.error('Error calculating year progress:', error);
    return 0;
  }
}

export function formatLunarDate(day: number, month: number, year: number, isLeapMonth: boolean = false): string {
  // Format with leading zeros for day and month
  const formattedDay = day.toString().padStart(2, '0');
  const formattedMonth = month.toString().padStart(2, '0');
  
  return `Ngày ${formattedDay} tháng ${formattedMonth} năm ${year}${isLeapMonth ? ' (nhuận)' : ''} (Âm lịch)`;
}

export function getLunarDateInfo(date: Date): { 
  lunarDate: string; 
  lunarDateDetailed: any;
  canChi: any;
  dayOfYear: number; 
  daysRemaining: number;
  weekNumber: number;
  yearProgress: number;
  festivals: Holiday[];
  solarTerms: string[];
  zodiacAnimal: string;
  constellation: string;
} {
  try {
    // Use our custom lunar calculation
    const lunarData = calculateLunarDate(date);
    
    // Create Solar object for additional information
    const solar = Solar.fromDate(date);
    const lunar = solar.getLunar();
    
    // Get month name in Vietnamese
    const monthNames = [
      'Giêng', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu',
      'Bảy', 'Tám', 'Chín', 'Mười', 'Mười một', 'Chạp'
    ];
    const monthName = monthNames[lunarData.month - 1] || `Tháng ${lunarData.month}`;
    
    // Format lunar date with new format
    const lunarDate = formatLunarDate(lunarData.day, lunarData.month, lunarData.year, lunarData.isLeap);
    
    // Get Can Chi information with safe method calls
    let yearCanChi = 'Không xác định';
    let monthCanChi = 'Không xác định';
    let dayCanChi = 'Không xác định';
    
    try {
      if (typeof lunar.getYearInGanZhi === 'function') {
        yearCanChi = lunar.getYearInGanZhi();
      }
      if (typeof lunar.getMonthInGanZhi === 'function') {
        monthCanChi = lunar.getMonthInGanZhi();
      }
      if (typeof lunar.getDayInGanZhi === 'function') {
        dayCanChi = lunar.getDayInGanZhi();
      }
    } catch (canChiError) {
      console.warn('Error extracting Can Chi information:', canChiError);
    }
    
    // Get zodiac animal and constellation with safe method calls
    let zodiacAnimal = 'Không xác định';
    let constellation = 'Không xác định';
    
    try {
      if (typeof lunar.getYearShengXiao === 'function') {
        zodiacAnimal = lunar.getYearShengXiao();
      }
      if (typeof lunar.getYearNaYin === 'function') {
        constellation = lunar.getYearNaYin();
      }
    } catch (zodiacError) {
      console.warn('Error extracting zodiac information:', zodiacError);
    }
    
    // Calculate lunar metrics using our custom data
    const dayOfYear = lunarData.dayOfYear;
    const daysRemaining = lunarData.totalDaysInYear - lunarData.dayOfYear;
    const weekNumber = Math.ceil(lunarData.dayOfYear / 7);
    const yearProgress = Math.round((lunarData.dayOfYear / lunarData.totalDaysInYear) * 100 * 100) / 100;
    
    // Get festivals and solar terms with safe method calls
    let traditionalFestivals: Holiday[] = [];
    let solarTerms: string[] = [];
    
    try {
      if (typeof lunar.getFestivals === 'function') {
        const lunarFestivals = lunar.getFestivals() || [];
        traditionalFestivals = lunarFestivals.map((f: any) => {
          const festivalName = typeof f === 'string' ? f : 
                              (f && typeof f.getName === 'function') ? f.getName() : 
                              (f && f.toString) ? f.toString() : 'Lễ hội';
          
          return {
            id: `traditional-${festivalName.toLowerCase().replace(/\s+/g, '-')}`,
            name: festivalName,
            type: 'traditional' as const,
            description: `Lễ hội truyền thống: ${festivalName}`,
            isRecurring: true,
            country: 'VN'
          };
        }).filter(Boolean);
      }
      
      if (typeof solar.getJieQi === 'function') {
        const jieQi = solar.getJieQi();
        if (jieQi) {
          const termName = typeof jieQi === 'string' ? jieQi : 
                          (jieQi && typeof jieQi.getName === 'function') ? jieQi.getName() : 
                          (jieQi && jieQi.toString) ? jieQi.toString() : '';
          if (termName) solarTerms = [termName];
        }
      }
    } catch (error) {
      console.warn('Error getting festivals and solar terms:', error);
    }
    
    // Get holidays from our custom data
    const customHolidays = getHolidaysForDate(date);
    
    // Get lunar holidays for this date
    const year = date.getFullYear();
    const lunarHolidays = HOLIDAYS_DATA.filter(holiday => {
      if (!holiday.lunarDate) return false;
      
      const solarDate = lunarToSolarForYear(year, holiday.lunarDate.month, holiday.lunarDate.day);
      if (!solarDate) return false;
      
      return solarDate.toDateString() === date.toDateString();
    });
    
    // Combine all festivals
    const allFestivals = [...traditionalFestivals, ...customHolidays, ...lunarHolidays];
    
    return {
      lunarDate,
      lunarDateDetailed: {
        day: lunarData.day,
        month: lunarData.month,
        year: lunarData.year,
        monthName,
        isLeapMonth: lunarData.isLeap
      },
      canChi: {
        year: yearCanChi,
        month: monthCanChi,
        day: dayCanChi
      },
      dayOfYear,
      daysRemaining,
      weekNumber,
      yearProgress,
      festivals: allFestivals,
      solarTerms,
      zodiacAnimal,
      constellation
    };
  } catch (error) {
    console.error('Error calculating lunar date:', error);
    // Enhanced fallback with better error handling
    return {
      lunarDate: 'Không thể tính toán',
      lunarDateDetailed: {
        day: 1,
        month: 1,
        year: date.getFullYear(),
        monthName: 'Giêng',
        isLeapMonth: false
      },
      canChi: {
        year: 'Không xác định',
        month: 'Không xác định',
        day: 'Không xác định'
      },
      dayOfYear: 1,
      daysRemaining: 0,
      weekNumber: 1,
      yearProgress: 0,
      festivals: [],
      solarTerms: [],
      zodiacAnimal: 'Không xác định',
      constellation: 'Không xác định'
    };
  }
}

export function getDateInfo(date: Date): DateInfo {
  try {
    const lunarInfo = getLunarDateInfo(date);
    
    return {
      solarDate: date,
      lunarDate: lunarInfo.lunarDate,
      lunarDateDetailed: lunarInfo.lunarDateDetailed,
      canChi: lunarInfo.canChi,
      dayOfYear: getDayOfYear(date),
      daysRemaining: getDaysRemainingInYear(date),
      weekNumber: getWeekNumber(date),
      yearProgress: getYearProgress(date),
      lunarDayOfYear: lunarInfo.dayOfYear,
      lunarDaysRemaining: lunarInfo.daysRemaining,
      lunarWeekNumber: lunarInfo.weekNumber,
      lunarYearProgress: lunarInfo.yearProgress,
      festivals: lunarInfo.festivals,
      solarTerms: lunarInfo.solarTerms,
      zodiacAnimal: lunarInfo.zodiacAnimal,
      constellation: lunarInfo.constellation
    };
  } catch (error) {
    console.error('Error getting date info:', error);
    // Return safe fallback data
    return {
      solarDate: date,
      lunarDate: 'Không thể tính toán',
      lunarDateDetailed: {
        day: 1,
        month: 1,
        year: date.getFullYear(),
        monthName: 'Giêng',
        isLeapMonth: false
      },
      canChi: {
        year: 'Không xác định',
        month: 'Không xác định',
        day: 'Không xác định'
      },
      dayOfYear: getDayOfYear(date),
      daysRemaining: getDaysRemainingInYear(date),
      weekNumber: getWeekNumber(date),
      yearProgress: getYearProgress(date),
      lunarDayOfYear: 1,
      lunarDaysRemaining: 0,
      lunarWeekNumber: 1,
      lunarYearProgress: 0,
      festivals: [],
      solarTerms: [],
      zodiacAnimal: 'Không xác định',
      constellation: 'Không xác định'
    };
  }
}

export function getDateByDayNumber(year: number, dayNumber: number): Date {
  try {
    if (dayNumber < 1 || dayNumber > 366) {
      throw new Error(`Số ngày không hợp lệ: ${dayNumber}. Vui lòng nhập số từ 1 đến 366.`);
    }
    
    const date = new Date(year, 0, 1);
    date.setDate(dayNumber);
    
    // Check if the calculated date is valid for the given year
    if (date.getFullYear() !== year) {
      const isLeapYear = new Date(year, 1, 29).getMonth() === 1;
      const maxDays = isLeapYear ? 366 : 365;
      throw new Error(`Năm ${year} chỉ có ${maxDays} ngày. Vui lòng nhập số nhỏ hơn hoặc bằng ${maxDays}.`);
    }
    
    return date;
  } catch (error) {
    console.error('Error getting date by day number:', error);
    throw error;
  }
}

export function getDateByRemainingDays(year: number, remainingDays: number): Date {
  try {
    const endOfYear = new Date(year, 11, 31);
    const totalDaysInYear = getDayOfYear(endOfYear);
    
    if (remainingDays < 0 || remainingDays > totalDaysInYear) {
      throw new Error(`Số ngày còn lại không hợp lệ: ${remainingDays}. Vui lòng nhập số từ 0 đến ${totalDaysInYear}.`);
    }
    
    const date = new Date(endOfYear);
    date.setDate(endOfYear.getDate() - remainingDays);
    return date;
  } catch (error) {
    console.error('Error getting date by remaining days:', error);
    throw error;
  }
}

export function getLunarDateByDayNumber(year: number, dayNumber: number): Date {
  try {
    if (dayNumber < 1 || dayNumber > 384) { // Lunar year can have up to 384 days
      throw new Error(`Số ngày âm lịch không hợp lệ: ${dayNumber}. Vui lòng nhập số từ 1 đến 384.`);
    }
    
    // Start from lunar new year
    const lunarYearStart = Lunar.fromYmd(year, 1, 1);
    const solarStart = lunarYearStart.getSolar().toDate();
    
    // Add days to get the target date
    const targetDate = new Date(solarStart);
    targetDate.setDate(solarStart.getDate() + dayNumber - 1);
    
    return targetDate;
  } catch (error) {
    console.error('Error calculating lunar date by day number:', error);
    // Fallback to solar calendar
    return getDateByDayNumber(year, Math.min(dayNumber, 365));
  }
}

export function getLunarDateByRemainingDays(year: number, remainingDays: number): Date {
  try {
    if (remainingDays < 0 || remainingDays > 384) {
      throw new Error(`Số ngày còn lại âm lịch không hợp lệ: ${remainingDays}. Vui lòng nhập số từ 0 đến 384.`);
    }
    
    // Get the actual lunar year length
    const lunarYearLength = getLunarYearDays(year);
    
    // Get lunar year start
    const lunarYearStart = Lunar.fromYmd(year, 1, 1);
    const solarStart = lunarYearStart.getSolar().toDate();
    
    // Calculate target date
    const targetDate = new Date(solarStart);
    targetDate.setDate(solarStart.getDate() + lunarYearLength - remainingDays);
    
    return targetDate;
  } catch (error) {
    console.error('Error calculating lunar date by remaining days:', error);
    // Fallback to solar calendar
    return getDateByRemainingDays(year, Math.min(remainingDays, 365));
  }
}

export function formatDate(date: Date, language: 'en' | 'vi' = 'vi'): string {
  try {
    if (language === 'vi') {
      return date.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    }
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return date.toISOString().split('T')[0];
  }
}

export function getMonthCalendar(year: number, month: number): Date[][] {
  try {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    
    // Start from Monday of the week containing the first day
    const dayOfWeek = firstDay.getDay();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    startDate.setDate(firstDay.getDate() + mondayOffset);
    
    const calendar: Date[][] = [];
    let currentWeek: Date[] = [];
    
    for (let i = 0; i < 42; i++) { // 6 weeks max
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      
      currentWeek.push(currentDate);
      
      if (currentWeek.length === 7) {
        calendar.push(currentWeek);
        currentWeek = [];
        
        // Stop if we've passed the last day and completed a week
        if (currentDate > lastDay && calendar.length >= 5) {
          break;
        }
      }
    }
    
    return calendar;
  } catch (error) {
    console.error('Error generating month calendar:', error);
    return [];
  }
}

// Conversion functions between solar and lunar dates
export function solarToLunar(solarDate: Date): { lunar: any; formatted: string } {
  try {
    const lunarData = calculateLunarDate(solarDate);
    const formatted = formatLunarDate(lunarData.day, lunarData.month, lunarData.year, lunarData.isLeap);
    
    return { lunar: lunarData, formatted };
  } catch (error) {
    console.error('Error converting solar to lunar:', error);
    throw new Error('Không thể chuyển đổi ngày dương lịch sang âm lịch. Vui lòng kiểm tra lại ngày nhập vào.');
  }
}

export function lunarToSolar(lunarYear: number, lunarMonth: number, lunarDay: number, isLeapMonth: boolean = false): Date {
  try {
    const lunar = Lunar.fromYmd(lunarYear, lunarMonth, lunarDay);
    if (isLeapMonth) {
      lunar.setLeap(true);
    }
    const solar = lunar.getSolar();
    return solar.toDate();
  } catch (error) {
    console.error('Error converting lunar to solar:', error);
    throw new Error('Không thể chuyển đổi ngày âm lịch sang dương lịch. Vui lòng kiểm tra lại thông tin âm lịch.');
  }
}

// Validation functions
export function validateSolarDate(date: Date): { isValid: boolean; error?: string } {
  try {
    if (isNaN(date.getTime())) {
      return { isValid: false, error: 'Ngày dương lịch không hợp lệ.' };
    }
    
    const year = date.getFullYear();
    if (year < 1900 || year > 2100) {
      return { isValid: false, error: 'Năm phải nằm trong khoảng từ 1900 đến 2100.' };
    }
    
    return { isValid: true };
  } catch (error) {
    return { isValid: false, error: 'Lỗi xác thực ngày dương lịch.' };
  }
}

export function validateLunarDate(year: number, month: number, day: number): { isValid: boolean; error?: string } {
  try {
    if (year < 1900 || year > 2100) {
      return { isValid: false, error: 'Năm âm lịch phải nằm trong khoảng từ 1900 đến 2100.' };
    }
    
    if (month < 1 || month > 12) {
      return { isValid: false, error: 'Tháng âm lịch phải nằm trong khoảng từ 1 đến 12.' };
    }
    
    if (day < 1 || day > 30) {
      return { isValid: false, error: 'Ngày âm lịch phải nằm trong khoảng từ 1 đến 30.' };
    }
    
    return { isValid: true };
  } catch (error) {
    return { isValid: false, error: 'Lỗi xác thực ngày âm lịch.' };
  }
}