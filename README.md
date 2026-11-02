```
techubster_vanilla/
    ├── index.html # Trang chủ
    ├── pages/ # Các trang sub-page chính
    │   ├── auth/
    │   │   ├── login.html
    │   │   └── register.html
    │   ├── dashboard/
    │   │   └── index.html
    │   └── products/
    │   ├── detail.html
    │   └── list.html
    │
    ├── assets/ # Tài nguyên tĩnh của toàn bộ ứng dụng
    │   ├── images/ # Hình ảnh tĩnh (logo, banners, icons)
    │   ├── icons/ # SVG icons riêng lẻ
    │   └── fonts/ # Local Web Fonts (.woff2)
    │
    ├── src/ # Toàn bộ mã nguồn xử lý chính (Source)
    │   ├── css/ # Kiến trúc CSS phân tầng (Áp dụng ITCSS/BEM)
    │   │   ├── base/ # Styles cơ bản nhất
    │   │   │   ├── \_reset.css # Normalize / Reset CSS mặc định
    │   │   │   ├── \_variables.css # Biến CSS (Color palette, font size, spacing)
    │   │   │   └── \_typography.css # Quy chuẩn font, heading, paragraph
    │   │   ├── components/ # CSS cho các thành phần dùng lại nhiều nơi
    │   │   │   ├── \_buttons.css
    │   │   │   ├── \_cards.css
    │   │   │   ├── \_modal.css
    │   │   │   └── \_forms.css
    │   │   ├── layouts/ # Layout khung của trang
    │   │   │   ├── \_header.css
    │   │   │   ├── \_footer.css
    │   │   │   ├── \_sidebar.css
    │   │   │   └── \_grid.css
    │   │   ├── pages/ # CSS đặc thù riêng cho từng trang
    │   │   │   ├── \_dashboard.css
    │   │   │   └── \_product-detail.css
    │   │   └── main.css # File tổng gộp toàn bộ các file CSS trên (Import)
    │   │
    │   └── js/ # Kiến trúc JS dạng ES6 Modules (`type="module"`)
    │   ├── config/ # Cấu hình chung cho ứng dụng
    │   │   ├── constants.js # Lưu URL API, App Key, mã lỗi
    │   │   └── routes.js # Đường dẫn ứng dụng
    │   ├── core/ # Các thư viện tự viết hoặc helper cấp thấp
    │   │   ├── api.js # Wrapper fetch/axios gọi API tập trung
    │   │   ├── storage.js # Utility thao tác với LocalStorage/Cookie
    │   │   └── router.js # (Nếu có) Client-side router đơn giản
    │   ├── utils/ # Các hàm bổ trợ xử lý dữ liệu thuần
    │   │   ├── formatters.js # Format tiền tệ, ngày tháng, chuỗi
    │   │   └── validators.js # Validate dữ liệu form (Email, phone, password)
    │   ├── components/ # Logic UI cho các thành phần dùng lại
    │   │   ├── modal.js
    │   │   ├── toast.js
    │   │   └── navbar.js
    │   ├── modules/ # Business Logic phân theo tính năng chính
    │   │ ├── auth/ # Xử lý Đăng nhập / Đăng ký
    │   │ │     ├── auth.service.js
    │   │ │     └── auth.ui.js
    │   │ └── products/ # Xử lý danh sách / chi tiết sản phẩm
    │   │       ├── product.service.js
    │   │       └── product.ui.js
    │   └── app.js # Entry point chính của JavaScript
    │
    ├── .gitignore # Bỏ qua các tệp không cần đẩy lên Git
    └── README.md # Hướng dẫn chạy và giải thích project
```