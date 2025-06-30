export interface Holiday {
  id: string;
  name: string;
  date?: { month: number; day: number }; // Solar calendar date
  lunarDate?: { month: number; day: number; isLeap?: boolean }; // Lunar calendar date
  type: 'official' | 'traditional' | 'international' | 'cultural';
  description: string;
  isRecurring: boolean;
  country?: string;
}

export const HOLIDAYS_DATA: Holiday[] = [
  // Vietnamese Official Holidays
  {
    id: 'new-year',
    name: 'Tết Dương lịch',
    date: { month: 1, day: 1 },
    type: 'official',
    description: 'Ngày đầu năm mới theo dương lịch, ngày nghỉ lễ chính thức của Việt Nam.',
    isRecurring: true,
    country: 'VN'
  },
  {
    id: 'tet-nguyen-dan',
    name: 'Tết Nguyên Đán',
    lunarDate: { month: 1, day: 1 },
    type: 'official',
    description: 'Tết cổ truyền của dân tộc Việt Nam, ngày lễ quan trọng nhất trong năm.',
    isRecurring: true,
    country: 'VN'
  },
  {
    id: 'hung-kings-death',
    name: 'Giỗ Tổ Hùng Vương',
    lunarDate: { month: 3, day: 10 },
    type: 'official',
    description: 'Ngày giỗ các vua Hùng, tổ tiên của dân tộc Việt Nam.',
    isRecurring: true,
    country: 'VN'
  },
  {
    id: 'liberation-day',
    name: 'Ngày Giải phóng miền Nam',
    date: { month: 4, day: 30 },
    type: 'official',
    description: 'Ngày kỷ niệm chiến thắng 30/4/1975, thống nhất đất nước.',
    isRecurring: true,
    country: 'VN'
  },
  {
    id: 'labor-day',
    name: 'Ngày Quốc tế Lao động',
    date: { month: 5, day: 1 },
    type: 'official',
    description: 'Ngày Quốc tế Lao động, ngày nghỉ lễ chính thức.',
    isRecurring: true,
    country: 'VN'
  },
  {
    id: 'national-day',
    name: 'Quốc khánh Việt Nam',
    date: { month: 9, day: 2 },
    type: 'official',
    description: 'Ngày Quốc khánh nước Cộng hòa Xã hội chủ nghĩa Việt Nam.',
    isRecurring: true,
    country: 'VN'
  },

  // Traditional Vietnamese Holidays
  {
    id: 'tet-han-thuc',
    name: 'Tết Hàn thực',
    lunarDate: { month: 3, day: 3 },
    type: 'traditional',
    description: 'Lễ hội truyền thống để tưởng nhớ tổ tiên, ăn bánh trôi bánh chay.',
    isRecurring: true,
    country: 'VN'
  },
  {
    id: 'tet-doan-ngo',
    name: 'Tết Đoan Ngọ',
    lunarDate: { month: 5, day: 5 },
    type: 'traditional',
    description: 'Tết Đoan Ngọ, ngày tránh dịch bệnh, ăn chè đậu đỏ và rượu nếp.',
    isRecurring: true,
    country: 'VN'
  },
  {
    id: 'vu-lan',
    name: 'Lễ Vu Lan',
    lunarDate: { month: 7, day: 15 },
    type: 'traditional',
    description: 'Lễ Vu Lan báo hiếu, ngày tưởng nhớ cha mẹ và tổ tiên.',
    isRecurring: true,
    country: 'VN'
  },
  {
    id: 'tet-trung-thu',
    name: 'Tết Trung Thu',
    lunarDate: { month: 8, day: 15 },
    type: 'traditional',
    description: 'Tết Trung Thu, lễ hội của trẻ em với bánh trung thu và đèn lồng.',
    isRecurring: true,
    country: 'VN'
  },
  {
    id: 'tet-trung-nguyen',
    name: 'Tết Trung Nguyên',
    lunarDate: { month: 7, day: 15 },
    type: 'traditional',
    description: 'Tết Trung Nguyên, ngày cúng cô hồn và tế độ vong linh.',
    isRecurring: true,
    country: 'VN'
  },

  // International Holidays
  {
    id: 'womens-day',
    name: 'Ngày Quốc tế Phụ nữ',
    date: { month: 3, day: 8 },
    type: 'international',
    description: 'Ngày Quốc tế Phụ nữ, tôn vinh vai trò và đóng góp của phụ nữ.',
    isRecurring: true
  },
  {
    id: 'childrens-day',
    name: 'Ngày Quốc tế Thiếu nhi',
    date: { month: 6, day: 1 },
    type: 'international',
    description: 'Ngày Quốc tế Thiếu nhi, bảo vệ quyền lợi trẻ em trên toàn thế giới.',
    isRecurring: true
  },
  {
    id: 'teachers-day-vn',
    name: 'Ngày Nhà giáo Việt Nam',
    date: { month: 11, day: 20 },
    type: 'cultural',
    description: 'Ngày Nhà giáo Việt Nam, tôn vinh các thầy cô giáo.',
    isRecurring: true,
    country: 'VN'
  },
  {
    id: 'vietnamese-womens-day',
    name: 'Ngày Phụ nữ Việt Nam',
    date: { month: 10, day: 20 },
    type: 'cultural',
    description: 'Ngày Phụ nữ Việt Nam, tôn vinh phụ nữ Việt Nam.',
    isRecurring: true,
    country: 'VN'
  },

  // September 2025 specific examples
  {
    id: 'national-day-2025',
    name: 'Quốc khánh Việt Nam',
    date: { month: 9, day: 2 },
    type: 'official',
    description: 'Kỷ niệm 80 năm Quốc khánh nước Cộng hòa Xã hội chủ nghĩa Việt Nam (1945-2025).',
    isRecurring: true,
    country: 'VN'
  },
  {
    id: 'mid-autumn-2025',
    name: 'Tết Trung Thu',
    lunarDate: { month: 8, day: 15 },
    type: 'traditional',
    description: 'Tết Trung Thu năm 2025, lễ hội truyền thống của trẻ em.',
    isRecurring: true,
    country: 'VN'
  },
  {
    id: 'world-tourism-day',
    name: 'Ngày Du lịch Thế giới',
    date: { month: 9, day: 27 },
    type: 'international',
    description: 'Ngày Du lịch Thế giới, thúc đẩy phát triển du lịch bền vững.',
    isRecurring: true
  },

  // Additional cultural events
  {
    id: 'autumn-equinox',
    name: 'Xuân phân Thu',
    date: { month: 9, day: 23 },
    type: 'cultural',
    description: 'Ngày xuân phân thu, đánh dấu sự chuyển mùa từ hè sang thu.',
    isRecurring: true
  },
  {
    id: 'world-peace-day',
    name: 'Ngày Hòa bình Thế giới',
    date: { month: 9, day: 21 },
    type: 'international',
    description: 'Ngày Hòa bình Thế giới, kêu gọi hòa bình và chấm dứt xung đột.',
    isRecurring: true
  }
];

export function getHolidaysForDate(date: Date): Holiday[] {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  // Get solar calendar holidays
  const solarHolidays = HOLIDAYS_DATA.filter(holiday => 
    holiday.date && 
    holiday.date.month === month && 
    holiday.date.day === day
  );

  // For lunar holidays, we would need to convert lunar to solar for the specific year
  // This is a simplified version - in practice, you'd use the lunar calendar conversion
  const lunarHolidays: Holiday[] = [];
  
  return [...solarHolidays, ...lunarHolidays];
}

export function getHolidaysByType(type: Holiday['type']): Holiday[] {
  return HOLIDAYS_DATA.filter(holiday => holiday.type === type);
}

export function getHolidaysByMonth(month: number): Holiday[] {
  return HOLIDAYS_DATA.filter(holiday => 
    (holiday.date && holiday.date.month === month) ||
    (holiday.lunarDate && holiday.lunarDate.month === month)
  );
}

export function searchHolidays(query: string): Holiday[] {
  const lowercaseQuery = query.toLowerCase();
  return HOLIDAYS_DATA.filter(holiday =>
    holiday.name.toLowerCase().includes(lowercaseQuery) ||
    holiday.description.toLowerCase().includes(lowercaseQuery)
  );
}

export const HOLIDAY_TYPE_COLORS = {
  official: 'bg-red-100 text-red-800 border-red-300',
  traditional: 'bg-green-100 text-green-800 border-green-300',
  international: 'bg-blue-100 text-blue-800 border-blue-300',
  cultural: 'bg-purple-100 text-purple-800 border-purple-300'
};

export const HOLIDAY_TYPE_NAMES = {
  official: 'Lễ chính thức',
  traditional: 'Lễ truyền thống',
  international: 'Lễ quốc tế',
  cultural: 'Sự kiện văn hóa'
};