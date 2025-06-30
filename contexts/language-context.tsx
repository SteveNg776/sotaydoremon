"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface Translations {
  [key: string]: any;
}

const translations: Translations = {
  nav: {
    home: "Trang Chủ",
    iching: "Kinh Dịch",
    dateCalculator: "Thần Số Học",
    blog: "Blog",
    profile: "Hồ Sơ",
    signIn: "Đăng Nhập"
  },
  common: {
    language: "Ngôn Ngữ",
    english: "Tiếng Anh",
    vietnamese: "Tiếng Việt",
    back: "Quay Lại",
    next: "Tiếp Theo",
    calculate: "Tính Toán",
    reset: "Đặt Lại",
    today: "Hôm Nay",
    year: "Năm",
    month: "Tháng",
    day: "Ngày",
    week: "Tuần",
    loading: "Đang tải...",
    error: "Lỗi",
    success: "Thành công"
  },
  home: {
    title: "Khám Phá Những Bí Ẩn Của Trí Tuệ Cổ Đại",
    subtitle: "Khám phá chiều sâu sâu sắc của Kinh Dịch và Thần Số Học thông qua các công cụ tương tác và hướng dẫn toàn diện. Hành trình vào các truyền thống bí truyền đã hướng dẫn những người tìm kiếm trong hàng thiên niên kỷ.",
    beginJourney: "Bắt Đầu Hành Trình",
    exploreTraditions: "Khám Phá Truyền Thống",
    featuresTitle: "Công Cụ Thiêng Liêng & Bói Toán",
    featuresSubtitle: "Truy cập các công cụ bói toán mạnh mẽ có nguồn gốc từ truyền thống cổ đại, được tăng cường với những hiểu biết hiện đại và tính năng tương tác.",
    traditionsTitle: "Truyền Thống Cổ Đại",
    traditionsSubtitle: "Kết nối trí tuệ của Đông và Tây thông qua nghiên cứu toàn diện về các truyền thống huyền bí đã định hình sự hiểu biết của con người trong hàng nghìn năm.",
    ctaTitle: "Sẵn Sàng Bắt Đầu Hành Trình?",
    ctaSubtitle: "Tham gia cùng hàng nghìn người tìm kiếm khám phá trí tuệ cổ đại thông qua các công cụ hiện đại. Tạo tài khoản để lưu các lần đọc, theo dõi hiểu biết và truy cập các tính năng nâng cao.",
    startFreeJourney: "Bắt Đầu Hành Trình Miễn Phí",
    learnMore: "Tìm Hiểu Thêm"
  },
  dateCalculator: {
    title: "Thần Số Học",
    subtitle: "Công cụ lịch âm dương toàn diện để phân tích và chuyển đổi ngày tháng với thông tin chi tiết về số học và ý nghĩa tâm linh",
    dateHandbook: "Sổ Tay Ngày",
    numberInput: "Nhập Số",
    dateHandbookDesc: "Xem thông tin chi tiết cho bất kỳ ngày nào với dữ liệu lịch âm và dương",
    numberInputDesc: "Tìm ngày bằng cách nhập số thứ tự ngày hoặc số ngày còn lại trong năm",
    selectDate: "Chọn Ngày",
    solarCalendar: "Dương Lịch",
    lunarCalendar: "Âm Lịch",
    dayOfYear: "Số thứ tự ngày",
    daysRemaining: "Số ngày còn lại",
    weekNumber: "Số tuần",
    yearProgress: "% của năm",
    lunarDate: "Ngày",
    lunarDayOfYear: "Số thứ tự ngày",
    lunarDaysRemaining: "Số ngày còn lại",
    enterYear: "Chọn năm",
    enterNumber: "Nhập số",
    findDate: "Tìm Ngày",
    solarResult: "Lịch Dương",
    lunarResult: "Lịch Âm",
    dayNumber: "Ngày thứ {{number}} của năm {{year}} là: {{date}}",
    remainingDays: "Ngày còn lại thứ {{number}} của năm {{year}} là: {{date}}",
    lunarDayNumber: "Ngày thứ {{number}} của năm âm lịch {{year}} là: {{date}}",
    lunarRemainingDays: "Ngày còn lại thứ {{number}} của năm âm lịch {{year}} là: {{date}}",
    discoverMore: "Khám phá thêm về ngày này",
    calendarView: "Xem Lịch",
    previousMonth: "Tháng Trước",
    nextMonth: "Tháng Sau",
    viewCalendar: "Xem Lịch"
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language] = useState<Language>('vi');

  const handleSetLanguage = (lang: Language) => {
    // Since we're only using Vietnamese, this function doesn't need to do anything
    console.log('Language set to:', lang);
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (typeof value !== 'string') {
      return key; // Return key if translation not found
    }

    // Replace parameters in the translation
    if (params) {
      return value.replace(/\{\{(\w+)\}\}/g, (match: string, paramKey: string) => {
        return params[paramKey]?.toString() || match;
      });
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}