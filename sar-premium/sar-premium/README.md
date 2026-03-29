# YouTube Premium Subscriptions — Landing Page

**[🇸🇦 النسخة العربية (Arabic)](#-المميزات-ووظائف-الموقع-بالعربية)** | **[🇺🇸 English Version](#-english-features-and-functionality)**

A high-converting, performance-optimized, and fully responsive landing page interface built to serve as a mediator between marketing campaigns and direct Shopify checkout links. The project aims for a highly cinematic SaaS aesthetic while adhering to strict performance and SEO requirements.

---

## 🇺🇸 English Features and Functionality

### 🚀 Technology Stack
- **HTML5:** Semantic architecture featuring advanced SEO meta tags & injected JSON-LD Object Product schemas.
- **CSS3 (Vanilla):** Zero external frameworks used (No Tailwind, No Bootstrap). Engineered using robust CSS Variables, CSS Grid (Bento Box styling), Glassmorphism (backdrop-filter) UI, CSS-driven Infinite Auto-scrolling Marquees, and mathematically aligned Dark/Light mode theme switching.
- **Vanilla JavaScript:** Zero external libraries. Features `localStorage` theme state persistence, dynamic category-based pricing filters (Personal/Family), Intersection Observer scroll-reveals, and a live numeric countdown timer clock.

### ✨ Core Functionality Breakdown
1. **Dynamic Theme Engine:** Integrated Dark & Light modes controlled by a toggle button in the navigation bar. The theme utilizes unified CSS variables (e.g., `var(--bg-surface-elevated)`) mapped across every single layout element for a seamless UI transition. Preference is saved locally in the browser memory.
2. **Shopify Funnel Routing:** The website intentionally avoids a native cart or payment gateway. Instead, every "Subscribe Now" (اشترك الآن) button maps to a dedicated external Shopify product URL configured via HTML `data-link` attributes and routed through JavaScript.
3. **Smart Pricing Filter:** The pricing section utilizes a script-driven `data-filter` logic that instantly swaps out and animates 8 distinct subscription plans between "Personal" and "Family" views without reloading the DOM.
4. **Cinematic Hero Block:** Built with an advanced CSS `::before` pseudo-element providing a `backdrop-filter: blur(8px)` masking over a background image (`hero.png`). It also embeds layered "social proof" customer avatars (`+500 مشترك`).
5. **Real-time Countdown Timer:** A psychological marketing trigger built with JavaScript `setInterval()` to automatically deduct time by the second (Hours-Minutes-Seconds) below the Hero block.
6. **Bento Grid Features:** An elegant, scalable CSS Grid module highlighting the premium features (Ad-Free, YouTube Music integration, etc.) utilizing hover-scaled nested images and primary-colored glowing drop-shadows.
7. **Infinite Marquee Testimony Slider:** Completely CSS-driven, layout-independent scrolling marquee. The reviews slide endlessly right-to-left utilizing `@keyframes scroll-left` matching RTL parameters.
8. **Next-Generation SEO Optimization:**
   - **Open Graph / Twitter Cards:** Designed specifically for link sharing over WhatsApp/Twitter/Facebook to display pre-defined thumbnails and rich card layout descriptions.
   - **JSON-LD Schema Integration:** Uses Google's standard structural data tagging the page precisely as a "Product" with an explicit `AggregateRating` component (4.9 Stars, 5000+ Reviews).
9. **Hover-Reactive Contact Block:** The page footer employs sticky WhatsApp support widgets alongside interactive grayscale-toggle Mada, Apple Pay, and Visa secure payment logos to maximize conversion trust.

---

## 🇸🇦 المميزات ووظائف الموقع (بالعربية)

صفحة هبوط احترافية ومحسّنة للأداء تهدف إلى تحويل الزوار من الحملات الإعلانية وتوجيههم مباشرةً إلى روابط سلة الدفع الخاصة بمتجر "شوبيفاي" (Shopify). 

### 🚀 التقنيات المستخدمة
- **HTML5:** بناء برمجي نظيف ومهيأ بقوة لمحركات البحث (SEO) مع إضافة أكواد `JSON-LD Schema` الخاصة بالمنتجات وتقييمات العملاء.
- **CSS3 (Vanilla):** بدون استخدام أي إطارات عمل خارجية. يعتمد التصميم بالكامل على متغيرات CSS، وتخطيط الشبكة (CSS Grid / Bento)، مع تأثيرات الزجاج (Glassmorphism)، وحركة التمرير التلقائي اللانهائي لآراء العملاء.
- **JavaScript (Vanilla):** لتنفيذ وظائف التفاعل مثل تغيير الـ Themes ، وتصفية الباقات ديناميكيًا (شخصي / عائلي)، وإضافة تأثيرات الظهور عند التمرير، وعداد الوقت التنازلي.

### ✨ شرح أهم الوظائف
1. **نظام الوضع الداكن والفاتح (Dark/Light Theme):** يتوفر زر للتبديل بين الوضع الداكن (الافتراضي) والفاتح. تعمل الجافاسكريبت على حفظ اختيار المستخدم في `localStorage` وتتغير كافة الألوان والخلفيات تلقائياً بفضل ربط الألوان بمتغيرات CSS الشاملة.
2. **الربط بنظام شوبيفاي (Shopify Routing):** هذه الصفحة لا تحتوي على بوابات دفع مبرمجة داخلياً؛ عوضاً عن ذلك، كل باقة تمتلك زر "اشترك الآن" مبرمج لتحويل الزائر بشكل مباشر لصفحة الدفع في متجر شوبيفاي باستخدام الـ `data-link`.
3. **التصفية السريعة للأسعار (Pricing Filter):** نظام عرض الباقات بضغطة زر يتيح للمستخدم التبديل السلس بين باقات يوتيوب "الشخصية" و "العائلية" مخفياً الباقات غير المرتبطة بالتبويب.
4. **تأثيرات الواجهة الافتتاحية (Hero Section):** تتميز الواجهة بتأثير ضبابي احترافي (Blur) يغطي الصورة الخلفية لتسهيل قراءة النص، بالإضافة لدمج صور أيقونات المشتركين (+500 مشترك) لتعزيز موثوقية الشراء.
5. **عداد تنازلي حي (Live Countdown Timer):** جزء تسويقي أسفل الواجهة يحتوي على عداد ساعات ودقائق وثوانٍ يعمل تلقائيًا عبر دوال الجافاسكريبت لحث العميل على سرعة الاستفادة من العرض.
6. **مزايا التصميم الشبكي (Bento Grid Layout):** تم تنسيق المزايا الفريدة لاشتراك البريميوم في صناديق تصميم حديثة (Bento-style)، تحتوي الصناديق على صور موسيقية تتفاعل مع مرور الفأرة وحواف مضيئة.
7. **شريط تجارب العملاء التلقائي (Marquee Slider):** يعمل بالكامل باستخدام `CSS keyframes` دون الاعتماد على مكتبات JS. يعرض الشريط تقييمات العملاء متحركة بشكل تلقائي من اليمين لليسار.
8. **تحسين متقدم لمحركات البحث (Advanced SEO):**
   - **(Open Graph / Twitter Cards):** الأكواد اللازمة لظهور الموقع بشكل جذاب ومصغر في تغريدات إكس ورسائل الواتساب والفيسبوك.
   - **(JSON-LD):** يخبر محركات البحث (مثل جوجل) بوضوح أن هذه الصفحة تعرض "منتج" ذو تقييم ممتاز، مما يعزز الظهور في المراتب الأولى.
9. **قسم التواصل والموثوقية:** يشمل زر واتساب العائم السريع، وقسم تواصل يظهر صور بوابات الدفع (مدى، أبل باي، فيزا) بتأثير يتفاعل مع الـ Hover.

---

### كيفية التشغيل (Local Development)
To view and run the project locally, simply start up a local static server inside this directory:
```bash
python3 -m http.server 8080
# Or using Node.js:
# npx serve .
```
Then navigate your browser to `http://localhost:8080`
