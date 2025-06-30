# Nghiên Cứu Huyền Bí - Mystic Studies

Một ứng dụng web toàn diện để khám phá trí tuệ cổ đại và kiến thức bí truyền thông qua các công cụ tương tác hiện đại.

## 📖 Mô tả dự án

Nghiên Cứu Huyền Bí là một nền tảng web cung cấp các công cụ và hướng dẫn để khám phá:

- **Kinh Dịch Oracle**: Tham khảo Kinh Dịch cổ đại với trình tạo quẻ tương tác
- **Thần Số Học**: Công cụ lịch âm dương với phân tích số học chi tiết

## 🚀 Hướng dẫn cài đặt và chạy

### Yêu cầu hệ thống
- Node.js 18.0 hoặc cao hơn
- npm hoặc yarn

### Cài đặt

1. Clone repository:
```bash
git clone <repository-url>
cd occult-studies-web
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy ứng dụng ở chế độ development:
```bash
npm run dev
```

4. Mở trình duyệt và truy cập: `http://localhost:3000`

### Build cho production

```bash
npm run build
npm start
```

## 📁 Cấu trúc thư mục

```
occult-studies-web/
├── app/                          # Next.js App Router
│   ├── date-calculator/         # Trang Thần Số Học
│   ├── i-ching/                # Trang Kinh Dịch
│   ├── globals.css             # CSS toàn cục
│   ├── layout.tsx              # Layout chính
│   └── page.tsx                # Trang chủ
├── components/                  # React Components
│   ├── date-calculator/        # Components cho Thần Số Học
│   ├── i-ching/               # Components cho Kinh Dịch
│   ├── layout/                # Components layout
│   ├── providers/             # Context providers
│   └── ui/                    # UI components (shadcn/ui)
├── contexts/                   # React Contexts
├── lib/                       # Utilities và helpers
│   ├── i-ching-data.ts        # Dữ liệu Kinh Dịch
│   ├── lunar-calendar-utils.ts # Utilities lịch âm
│   └── utils.ts               # Utilities chung
├── public/                    # Static assets
└── README.md                  # Tài liệu này
```

## 🛠️ Công nghệ sử dụng

### Frontend Framework
- **Next.js 13.5.1** - React framework với App Router
- **React 18.2.0** - UI library
- **TypeScript** - Type safety

### UI/UX
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

### Specialized Libraries
- **lunar-javascript** - Thư viện tính toán lịch âm
- **next-themes** - Theme management

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## ✨ Tính năng chính

### 1. Kinh Dịch Oracle
- Tạo quẻ bằng phương pháp ba đồng xu truyền thống
- Đọc nhanh với quẻ ngẫu nhiên
- Giải thích chi tiết cho từng quẻ
- Phân tích vạch thay đổi

### 2. Thần Số Học
- **Sổ tay ngày**: Phân tích chi tiết ngày được chọn
- **Chuyển đổi âm-dương**: Chuyển đổi chính xác giữa hai loại lịch
- **Nhập số**: Tìm ngày theo số thứ tự hoặc số ngày còn lại
- **Xem lịch**: Lịch tương tác với thông tin âm lịch

## 🎨 Thiết kế

Ứng dụng sử dụng thiết kế "moonrise" với:
- Gradient màu từ xanh nhạt đến hồng nhạt
- Hiệu ứng backdrop blur và transparency
- Animation mượt mà và micro-interactions
- Responsive design cho mọi thiết bị

## 🌐 Ngôn ngữ

Hiện tại hỗ trợ tiếng Việt với kế hoạch mở rộng đa ngôn ngữ trong tương lai.

## 📝 Ghi chú phát triển

- Sử dụng "use client" directive cho các component có client-side hooks
- Error handling toàn diện cho tất cả tính năng
- Fallback data cho các trường hợp lỗi
- Validation đầu vào nghiêm ngặt

## 🤝 Đóng góp

Dự án này đang trong giai đoạn phát triển. Mọi đóng góp và phản hồi đều được hoan nghênh.

## 📄 License

Tất cả quyền được bảo lưu © 2025 Nghiên Cứu Huyền Bí

---

*"Như trên, như dưới" - Hermes Trismegistus*