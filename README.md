# Game Developer Portfolio Website

Một website portfolio hiện đại với phong cách cyberpunk/game developer, được thiết kế theo yêu cầu với giao diện tối chuyên nghiệp và các hiệu ứng động mượt mà.

## ✨ Tính năng chính

### 🎨 Giao diện

- **Dark Mode Cyberpunk**: Thiết kế tối với màu neon tím (#8b5cf6) và xanh cyan (#06b6d4)
- **Layout 2 cột**: Sidebar navigation + Main content area
- **Responsive Design**: Tương thích hoàn toàn với mobile, tablet, desktop
- **Typography hiện đại**: Sử dụng font Orbitron (cho tiêu đề) và Rajdhani (cho nội dung)

### 🚀 Hiệu ứng & Animation

- **Loading Screen**: Màn hình chờ với hiệu ứng glitch và thanh progress bar
- **Particles Background**: Hiệu ứng hạt động với particles.js
- **Glitch Effect**: Hiệu ứng lỗi màn hình cho các tiêu đề chính
- **Typing Animation**: Hiệu ứng gõ chữ tự động cho các vai trò nghề nghiệp
- **Smooth Transitions**: Chuyển tab mượt mà không reload trang
- **Skill Progress Bars**: Thanh tiến độ kỹ năng với animation
- **Counter Animation**: Số liệu thống kê tăng dần từ 0

### 🎵 Âm thanh

- **Background Music**: Nhạc nền có thể bật/tắt
- **Audio Control**: Nút điều khiển âm thanh ở góc phải màn hình

### 📱 Các Section

#### 1. **Home**

- Avatar động với hiệu ứng glow
- Giới thiệu bản thân với typing effect
- Thống kê số liệu (dự án, kinh nghiệm, khách hàng)
- Buttons Download CV và Hire Me

#### 2. **About**

- Thông tin cá nhân chi tiết
- Skill bars với animation (Unity, Unreal, C#, C++, Blender, AI)
- Personal information grid

#### 3. **Resume**

- Timeline kinh nghiệm làm việc
- Timeline học vấn và chứng chỉ
- Hiệu ứng scroll animations

#### 4. **Portfolio**

- Filter system (All, Unity, Unreal, Mobile, 3D Art)
- Grid layout responsive
- Hover effects với overlay thông tin
- Links preview và external

#### 5. **Blog**

- Grid layout các bài viết
- Card design với date badge
- Hover animations
- Read more links

#### 6. **Contact**

- Thông tin liên hệ với icons
- Contact form với validation
- Notification system cho feedback

## 🛠️ Công nghệ sử dụng

### Frontend

- **HTML5**: Semantic markup
- **CSS3**:
  - Flexbox & Grid Layout
  - CSS Variables
  - Animations & Transitions
  - Gradient backgrounds
  - Custom scrollbar
- **Vanilla JavaScript**:
  - ES6+ features
  - Intersection Observer API
  - Local Storage
  - Form handling

### Libraries

- **Particles.js**: Background particle effects
- **GSAP**: Advanced animations (optional)
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Orbitron, Rajdhani)

## 📁 Cấu trúc project

```
MYCV/
├── index.html              # File HTML chính
├── css/
│   └── style.css          # Stylesheet chính
├── js/
│   └── script.js          # JavaScript functionality
├── assets/
│   ├── images/
│   │   ├── avatar.jpg     # Ảnh đại diện
│   │   ├── portfolio/     # Ảnh các dự án
│   │   │   ├── project1.jpg
│   │   │   ├── project2.jpg
│   │   │   └── ...
│   │   └── blog/          # Ảnh blog posts
│   │       ├── blog1.jpg
│   │       ├── blog2.jpg
│   │       └── ...
│   └── audio/
│       └── cyberpunk-ambient.mp3  # Nhạc nền
└── README.md              # File hướng dẫn này
```

## 🚀 Hướng dẫn sử dụng

### 1. Chuẩn bị Assets

Để website hoạt động đầy đủ, bạn cần thêm các file ảnh và âm thanh:

**Ảnh cần thiết:**

- `assets/images/avatar.jpg` - Ảnh đại diện (120x120px, tròn)
- `assets/images/portfolio/project1.jpg` đến `project6.jpg` - Ảnh dự án (350x250px)
- `assets/images/blog/blog1.jpg` đến `blog3.jpg` - Ảnh blog (350x200px)

**Âm thanh (tùy chọn):**

- `assets/audio/cyberpunk-ambient.mp3` - Nhạc nền cyberpunk

### 2. Tùy chỉnh nội dung

#### Thông tin cá nhân (trong `index.html`):

```html
<!-- Tìm và thay đổi các thông tin sau -->
<h2 class="name glitch" data-text="TÊN CỦA BẠN">TÊN CỦA BẠN</h2>
<p class="title typing-text">GAME DEVELOPER</p>

<!-- Trong section About -->
<span class="value">john.doe@email.com</span>
<!-- Email -->
<span class="value">Ho Chi Minh City, Vietnam</span>
<!-- Địa chỉ -->
```

#### Kỹ năng và phần trăm (trong `index.html`):

```html
<div class="skill-header">
  <span class="skill-name">Unity 3D</span>
  <span class="skill-percent">95%</span>
</div>
<div class="skill-bar">
  <div class="skill-progress" data-width="95"></div>
</div>
```

#### Typing animation texts (trong `js/script.js`):

```javascript
const typingTexts = ["GAME DEVELOPER", "UNITY EXPERT", "UNREAL DEVELOPER", "3D ARTIST", "AI PROGRAMMER", "CREATIVE CODER"];
```

### 3. Màu sắc và Theme

Để thay đổi màu chủ đạo, sửa CSS variables trong `css/style.css`:

```css
:root {
  --primary-color: #8b5cf6; /* Tím neon */
  --secondary-color: #06b6d4; /* Cyan */
  --background-dark: #0a0a0a; /* Nền tối */
  --text-color: #ffffff; /* Màu chữ chính */
}
```

### 4. Chạy website

**Cách 1: Live Server (Khuyến nghị)**

- Cài đặt Live Server extension cho VS Code
- Right-click vào `index.html` → "Open with Live Server"

**Cách 2: Local Server**

```bash
# Với Python 3
python -m http.server 8000

# Với Node.js
npx http-server

# Sau đó mở: http://localhost:8000
```

**Cách 3: Mở trực tiếp**

- Double-click vào `index.html` (một số tính năng có thể không hoạt động)

## 🎮 Tính năng nâng cao

### 1. Keyboard Navigation

- **ESC**: Quay về trang Home
- **Tab**: Navigate qua các elements

### 2. Performance Optimization

- Lazy loading cho images
- Debounced scroll events
- Optimized animations
- Service Worker ready

### 3. SEO & Accessibility

- Semantic HTML structure
- Alt tags cho images
- ARIA labels
- Meta tags optimization

### 4. Mobile Responsive

- Touch-friendly navigation
- Optimized layouts cho mobile
- Reduced animations trên thiết bị yếu

## 🔧 Tùy chỉnh nâng cao

### Thêm section mới:

1. Tạo section trong HTML
2. Thêm nav link tương ứng
3. Implement navigation logic trong JS
4. Thêm CSS styling

### Thêm portfolio item:

```html
<div class="portfolio-item" data-category="unity mobile">
  <div class="portfolio-image">
    <img src="assets/images/portfolio/new-project.jpg" alt="New Project" />
    <div class="portfolio-overlay">
      <div class="portfolio-info">
        <h4>Project Name</h4>
        <p>Project Type</p>
        <div class="portfolio-links">
          <a href="#" class="portfolio-link"><i class="fas fa-eye"></i></a>
          <a href="#" class="portfolio-link"><i class="fas fa-external-link-alt"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Thêm blog post:

```html
<article class="blog-post">
  <div class="blog-image">
    <img src="assets/images/blog/new-blog.jpg" alt="Blog Post" />
    <div class="blog-date">
      <span class="day">15</span>
      <span class="month">JUN</span>
    </div>
  </div>
  <div class="blog-content">
    <h3>Blog Title</h3>
    <p>Blog description...</p>
    <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
  </div>
</article>
```

## 🐛 Troubleshooting

### Particles không hiển thị:

- Kiểm tra console log có lỗi không
- Đảm bảo particles.js được load đúng
- Kiểm tra file có được serve qua HTTP server không

### Font không load:

- Kiểm tra kết nối internet
- Thử thay thế bằng local fonts

### Ảnh không hiển thị:

- Kiểm tra đường dẫn file ảnh
- Đảm bảo tên file khớp với code
- Kiểm tra case sensitivity (phân biệt hoa/thường)

### Audio không phát:

- Kiểm tra browser có block autoplay không
- Thêm file audio vào thư mục đúng
- User phải có interaction trước khi phát audio

## 🚀 Deployment

### GitHub Pages:

1. Upload code lên GitHub repository
2. Vào Settings → Pages
3. Chọn source branch
4. Website sẽ có địa chỉ: `username.github.io/repository-name`

### Netlify:

1. Drag & drop folder lên netlify.com
2. Hoặc connect với GitHub repository
3. Automatic deployment khi có git push

### Vercel:

1. Import project từ GitHub
2. Auto-deploy with custom domain support

## 📞 Support

Nếu bạn gặp vấn đề hoặc cần hỗ trợ tùy chỉnh:

- Email: your-email@domain.com
- GitHub Issues: Tạo issue trong repository
- Discord: Your Discord Tag

## 📄 License

MIT License - Free to use and modify for personal and commercial projects.

---

**Chúc bạn thành công với website portfolio của mình! 🎮✨**
