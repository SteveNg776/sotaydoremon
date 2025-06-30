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

export const HOLIDAYS_DATA: Holiday[] = [
  // Vietnamese Official Holidays
  {
    id: 'new-year',
    name: 'Tết Dương lịch',
    date: { month: 1, day: 1 },
    type: 'official',
    description: 'Ngày đầu năm mới theo dương lịch, ngày nghỉ lễ chính thức của Việt Nam.',
    isRecurring: true,
    country: 'VN',
    significance: 'high',
    activities: ['Chúc tết', 'Tặng quà', 'Họp mặt gia đình']
  },
  {
    id: 'tet-nguyen-dan',
    name: 'Tết Nguyên Đán',
    lunarDate: { month: 1, day: 1 },
    type: 'official',
    description: 'Tết cổ truyền của dân tộc Việt Nam, ngày lễ quan trọng nhất trong năm.',
    isRecurring: true,
    country: 'VN',
    significance: 'high',
    activities: ['Cúng tổ tiên', 'Lì xì', 'Thăm họ hàng', 'Ăn bánh chưng']
  },
  {
    id: 'hung-kings-death',
    name: 'Giỗ Tổ Hùng Vương',
    lunarDate: { month: 3, day: 10 },
    type: 'official',
    description: 'Ngày giỗ các vua Hùng, tổ tiên của dân tộc Việt Nam.',
    isRecurring: true,
    country: 'VN',
    significance: 'high',
    activities: ['Cúng tổ tiên', 'Thăm đền Hùng', 'Tham gia lễ hội']
  },
  {
    id: 'liberation-day',
    name: 'Ngày Giải phóng miền Nam',
    date: { month: 4, day: 30 },
    type: 'official',
    description: 'Ngày kỷ niệm chiến thắng 30/4/1975, thống nhất đất nước.',
    isRecurring: true,
    country: 'VN',
    significance: 'high',
    activities: ['Lễ kỷ niệm', 'Thăm di tích lịch sử']
  },
  {
    id: 'labor-day',
    name: 'Ngày Quốc tế Lao động',
    date: { month: 5, day: 1 },
    type: 'official',
    description: 'Ngày Quốc tế Lao động, ngày nghỉ lễ chính thức.',
    isRecurring: true,
    country: 'VN',
    significance: 'high',
    activities: ['Nghỉ ngơi', 'Du lịch', 'Tham gia hoạt động cộng đồng']
  },
  {
    id: 'national-day',
    name: 'Quốc khánh Việt Nam',
    date: { month: 9, day: 2 },
    type: 'official',
    description: 'Ngày Quốc khánh nước Cộng hòa Xã hội chủ nghĩa Việt Nam.',
    isRecurring: true,
    country: 'VN',
    significance: 'high',
    activities: ['Lễ diễu binh', 'Bắn pháo hoa', 'Hoạt động văn hóa']
  },

  // Traditional Vietnamese Holidays
  {
    id: 'tet-han-thuc',
    name: 'Tết Hàn thực',
    lunarDate: { month: 3, day: 3 },
    type: 'traditional',
    description: 'Lễ hội truyền thống để tưởng nhớ tổ tiên, ăn bánh trôi bánh chay.',
    isRecurring: true,
    country: 'VN',
    significance: 'medium',
    activities: ['Ăn bánh trôi', 'Ăn bánh chay', 'Cúng tổ tiên']
  },
  {
    id: 'tet-doan-ngo',
    name: 'Tết Đoan Ngọ',
    lunarDate: { month: 5, day: 5 },
    type: 'traditional',
    description: 'Tết Đoan Ngọ, ngày tránh dịch bệnh, ăn chè đậu đỏ và rượu nếp.',
    isRecurring: true,
    country: 'VN',
    significance: 'medium',
    activities: ['Ăn chè đậu đỏ', 'Uống rượu nếp', 'Tắm nước lá']
  },
  {
    id: 'vu-lan',
    name: 'Lễ Vu Lan',
    lunarDate: { month: 7, day: 15 },
    type: 'traditional',
    description: 'Lễ Vu Lan báo hiếu, ngày tưởng nhớ cha mẹ và tổ tiên.',
    isRecurring: true,
    country: 'VN',
    significance: 'high',
    activities: ['Cúng cha mẹ', 'Thăm mộ', 'Làm từ thiện', 'Đeo hoa hồng']
  },
  {
    id: 'tet-trung-thu',
    name: 'Tết Trung Thu',
    lunarDate: { month: 8, day: 15 },
    type: 'traditional',
    description: 'Tết Trung Thu, lễ hội của trẻ em với bánh trung thu và đèn lồng.',
    isRecurring: true,
    country: 'VN',
    significance: 'high',
    activities: ['Ăn bánh trung thu', 'Múa lân', 'Thả đèn lồng', 'Ngắm trăng']
  },
  {
    id: 'tet-trung-nguyen',
    name: 'Tết Trung Nguyên',
    lunarDate: { month: 7, day: 15 },
    type: 'traditional',
    description: 'Tết Trung Nguyên, ngày cúng cô hồn và tế độ vong linh.',
    isRecurring: true,
    country: 'VN',
    significance: 'medium',
    activities: ['Cúng cô hồn', 'Thả đèn hoa đăng', 'Làm từ thiện']
  },
  {
    id: 'tet-nguyen-tieu',
    name: 'Tết Nguyên Tiêu',
    lunarDate: { month: 1, day: 15 },
    type: 'traditional',
    description: 'Rằm tháng Giêng, đêm trăng tròn đầu tiên của năm mới.',
    isRecurring: true,
    country: 'VN',
    significance: 'medium',
    activities: ['Thả đèn lồng', 'Cúng Phật', 'Ăn chè']
  },
  {
    id: 'le-phat-dan',
    name: 'Lễ Phật Đản',
    lunarDate: { month: 4, day: 8 },
    type: 'religious',
    description: 'Ngày sinh của Đức Phật Thích Ca Mâu Ni.',
    isRecurring: true,
    country: 'VN',
    significance: 'high',
    activities: ['Đi chùa', 'Cúng Phật', 'Làm từ thiện', 'Thả chim phóng sinh']
  },

  // International Holidays
  {
    id: 'womens-day',
    name: 'Ngày Quốc tế Phụ nữ',
    date: { month: 3, day: 8 },
    type: 'international',
    description: 'Ngày Quốc tế Phụ nữ, tôn vinh vai trò và đóng góp của phụ nữ.',
    isRecurring: true,
    significance: 'high',
    activities: ['Tặng hoa', 'Tổ chức sự kiện', 'Vinh danh phụ nữ']
  },
  {
    id: 'childrens-day',
    name: 'Ngày Quốc tế Thiếu nhi',
    date: { month: 6, day: 1 },
    type: 'international',
    description: 'Ngày Quốc tế Thiếu nhi, bảo vệ quyền lợi trẻ em trên toàn thế giới.',
    isRecurring: true,
    significance: 'high',
    activities: ['Tổ chức vui chơi cho trẻ', 'Tặng quà', 'Hoạt động giáo dục']
  },
  {
    id: 'teachers-day-vn',
    name: 'Ngày Nhà giáo Việt Nam',
    date: { month: 11, day: 20 },
    type: 'cultural',
    description: 'Ngày Nhà giáo Việt Nam, tôn vinh các thầy cô giáo.',
    isRecurring: true,
    country: 'VN',
    significance: 'high',
    activities: ['Tặng hoa cho thầy cô', 'Tổ chức lễ kỷ niệm', 'Thăm thầy cô cũ']
  },
  {
    id: 'vietnamese-womens-day',
    name: 'Ngày Phụ nữ Việt Nam',
    date: { month: 10, day: 20 },
    type: 'cultural',
    description: 'Ngày Phụ nữ Việt Nam, tôn vinh phụ nữ Việt Nam.',
    isRecurring: true,
    country: 'VN',
    significance: 'high',
    activities: ['Tặng hoa', 'Tổ chức tiệc', 'Vinh danh phụ nữ Việt']
  },
  {
    id: 'valentines-day',
    name: 'Ngày Lễ Tình Nhân',
    date: { month: 2, day: 14 },
    type: 'international',
    description: 'Ngày Lễ Tình Nhân, ngày của tình yêu và lãng mạn.',
    isRecurring: true,
    significance: 'medium',
    activities: ['Tặng hoa hồng', 'Hẹn hò', 'Tặng quà cho người yêu']
  },
  {
    id: 'mothers-day',
    name: 'Ngày của Mẹ',
    date: { month: 5, day: 12 }, // Second Sunday of May - using approximate date
    type: 'international',
    description: 'Ngày của Mẹ, tôn vinh và tri ân các bà mẹ.',
    isRecurring: true,
    significance: 'high',
    activities: ['Tặng hoa cho mẹ', 'Nấu ăn cho mẹ', 'Thăm mẹ']
  },
  {
    id: 'fathers-day',
    name: 'Ngày của Cha',
    date: { month: 6, day: 16 }, // Third Sunday of June - using approximate date
    type: 'international',
    description: 'Ngày của Cha, tôn vinh và tri ân các người cha.',
    isRecurring: true,
    significance: 'high',
    activities: ['Tặng quà cho cha', 'Đi chơi cùng cha', 'Thăm cha']
  },

  // Memorial and Historical Days
  {
    id: 'war-invalids-martyrs-day',
    name: 'Ngày Thương binh Liệt sĩ',
    date: { month: 7, day: 27 },
    type: 'memorial',
    description: 'Ngày tưởng nhớ các anh hùng liệt sĩ và thương binh.',
    isRecurring: true,
    country: 'VN',
    significance: 'high',
    activities: ['Thăm nghĩa trang', 'Dâng hương', 'Hoạt động từ thiện']
  },
  {
    id: 'dien-bien-phu-victory',
    name: 'Ngày chiến thắng Điện Biên Phủ',
    date: { month: 5, day: 7 },
    type: 'memorial',
    description: 'Kỷ niệm chiến thắng Điện Biên Phủ năm 1954.',
    isRecurring: true,
    country: 'VN',
    significance: 'high',
    activities: ['Lễ kỷ niệm', 'Thăm di tích lịch sử']
  },
  {
    id: 'ho-chi-minh-birthday',
    name: 'Sinh nhật Chủ tịch Hồ Chí Minh',
    date: { month: 5, day: 19 },
    type: 'memorial',
    description: 'Ngày sinh của Chủ tịch Hồ Chí Minh.',
    isRecurring: true,
    country: 'VN',
    significance: 'high',
    activities: ['Lễ kỷ niệm', 'Thăm lăng Bác', 'Hoạt động thiện nguyện']
  },

  // Cultural and Seasonal Events
  {
    id: 'spring-equinox',
    name: 'Xuân phân',
    date: { month: 3, day: 20 },
    type: 'cultural',
    description: 'Ngày xuân phân, đánh dấu sự chuyển mùa từ đông sang xuân.',
    isRecurring: true,
    significance: 'low',
    activities: ['Ngắm hoa', 'Dã ngoại', 'Trồng cây']
  },
  {
    id: 'summer-solstice',
    name: 'Hạ chí',
    date: { month: 6, day: 21 },
    type: 'cultural',
    description: 'Ngày hạ chí, ngày dài nhất trong năm.',
    isRecurring: true,
    significance: 'low',
    activities: ['Hoạt động ngoài trời', 'Tắm biển', 'Picnic']
  },
  {
    id: 'autumn-equinox',
    name: 'Thu phân',
    date: { month: 9, day: 23 },
    type: 'cultural',
    description: 'Ngày thu phân, đánh dấu sự chuyển mùa từ hè sang thu.',
    isRecurring: true,
    significance: 'low',
    activities: ['Ngắm lá vàng', 'Thu hoạch', 'Chuẩn bị mùa đông']
  },
  {
    id: 'winter-solstice',
    name: 'Đông chí',
    date: { month: 12, day: 22 },
    type: 'cultural',
    description: 'Ngày đông chí, ngày ngắn nhất trong năm.',
    isRecurring: true,
    significance: 'medium',
    activities: ['Ăn chè đậu đỏ', 'Quây quần gia đình', 'Chuẩn bị Tết']
  },

  // Modern Vietnamese Cultural Days
  {
    id: 'family-day-vn',
    name: 'Ngày Gia đình Việt Nam',
    date: { month: 6, day: 28 },
    type: 'cultural',
    description: 'Ngày Gia đình Việt Nam, tôn vinh giá trị gia đình.',
    isRecurring: true,
    country: 'VN',
    significance: 'medium',
    activities: ['Họp mặt gia đình', 'Chụp ảnh gia đình', 'Hoạt động cùng nhau']
  },
  {
    id: 'elderly-day-vn',
    name: 'Ngày Người cao tuổi Việt Nam',
    date: { month: 10, day: 1 },
    type: 'cultural',
    description: 'Ngày Người cao tuổi Việt Nam, tôn vinh người già.',
    isRecurring: true,
    country: 'VN',
    significance: 'medium',
    activities: ['Thăm ông bà', 'Tặng quà', 'Chăm sóc người già']
  },
  {
    id: 'book-day-vn',
    name: 'Ngày Sách Việt Nam',
    date: { month: 4, day: 21 },
    type: 'cultural',
    description: 'Ngày Sách Việt Nam, khuyến khích việc đọc sách.',
    isRecurring: true,
    country: 'VN',
    significance: 'medium',
    activities: ['Đọc sách', 'Mua sách', 'Tặng sách']
  },

  // Environmental and Health Days
  {
    id: 'earth-day',
    name: 'Ngày Trái Đất',
    date: { month: 4, day: 22 },
    type: 'international',
    description: 'Ngày Trái Đất, nâng cao ý thức bảo vệ môi trường.',
    isRecurring: true,
    significance: 'medium',
    activities: ['Trồng cây', 'Dọn dẹp môi trường', 'Tuyên truyền bảo vệ môi trường']
  },
  {
    id: 'world-health-day',
    name: 'Ngày Y tế Thế giới',
    date: { month: 4, day: 7 },
    type: 'international',
    description: 'Ngày Y tế Thế giới, nâng cao ý thức về sức khỏe.',
    isRecurring: true,
    significance: 'medium',
    activities: ['Khám sức khỏe', 'Tập thể dục', 'Tuyên truyền sức khỏe']
  },
  {
    id: 'world-tourism-day',
    name: 'Ngày Du lịch Thế giới',
    date: { month: 9, day: 27 },
    type: 'international',
    description: 'Ngày Du lịch Thế giới, thúc đẩy phát triển du lịch bền vững.',
    isRecurring: true,
    significance: 'medium',
    activities: ['Du lịch', 'Khám phá văn hóa', 'Tuyên truyền du lịch bền vững']
  },
  {
    id: 'world-peace-day',
    name: 'Ngày Hòa bình Thế giới',
    date: { month: 9, day: 21 },
    type: 'international',
    description: 'Ngày Hòa bình Thế giới, kêu gọi hòa bình và chấm dứt xung đột.',
    isRecurring: true,
    significance: 'medium',
    activities: ['Hoạt động hòa bình', 'Cầu nguyện', 'Tuyên truyền hòa bình']
  },

  // Technology and Innovation Days
  {
    id: 'internet-day',
    name: 'Ngày Internet An toàn',
    date: { month: 2, day: 11 },
    type: 'international',
    description: 'Ngày Internet An toàn, nâng cao ý thức sử dụng internet an toàn.',
    isRecurring: true,
    significance: 'low',
    activities: ['Học về an toàn mạng', 'Cập nhật bảo mật', 'Giáo dục trẻ em']
  },
  {
    id: 'world-radio-day',
    name: 'Ngày Phát thanh Thế giới',
    date: { month: 2, day: 13 },
    type: 'international',
    description: 'Ngày Phát thanh Thế giới, tôn vinh vai trò của đài phát thanh.',
    isRecurring: true,
    significance: 'low',
    activities: ['Nghe radio', 'Tìm hiểu lịch sử phát thanh']
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

export function getHolidaysBySignificance(significance: Holiday['significance']): Holiday[] {
  return HOLIDAYS_DATA.filter(holiday => holiday.significance === significance);
}

export function getHolidaysByCountry(country: string): Holiday[] {
  return HOLIDAYS_DATA.filter(holiday => holiday.country === country);
}

export function searchHolidays(query: string): Holiday[] {
  const lowercaseQuery = query.toLowerCase();
  return HOLIDAYS_DATA.filter(holiday =>
    holiday.name.toLowerCase().includes(lowercaseQuery) ||
    holiday.description.toLowerCase().includes(lowercaseQuery) ||
    (holiday.activities && holiday.activities.some(activity => 
      activity.toLowerCase().includes(lowercaseQuery)
    ))
  );
}

export function getUpcomingHolidays(fromDate: Date, limit: number = 10): Holiday[] {
  const currentMonth = fromDate.getMonth() + 1;
  const currentDay = fromDate.getDate();
  
  const upcoming = HOLIDAYS_DATA
    .filter(holiday => holiday.date) // Only solar calendar holidays for now
    .map(holiday => ({
      ...holiday,
      daysUntil: calculateDaysUntil(fromDate, holiday.date!)
    }))
    .filter(holiday => holiday.daysUntil >= 0)
    .sort((a, b) => a.daysUntil - b.daysUntil)
    .slice(0, limit);
    
  return upcoming;
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
  const total = HOLIDAYS_DATA.length;
  const byType = Object.keys(HOLIDAY_TYPE_NAMES).reduce((acc, type) => {
    acc[type] = getHolidaysByType(type as Holiday['type']).length;
    return acc;
  }, {} as Record<string, number>);
  
  const bySignificance = Object.keys(HOLIDAY_SIGNIFICANCE_NAMES).reduce((acc, significance) => {
    acc[significance] = getHolidaysBySignificance(significance as Holiday['significance']).length;
    return acc;
  }, {} as Record<string, number>);
  
  const vietnameseHolidays = getHolidaysByCountry('VN').length;
  
  return {
    total,
    byType,
    bySignificance,
    vietnameseHolidays,
    internationalHolidays: total - vietnameseHolidays
  };
}