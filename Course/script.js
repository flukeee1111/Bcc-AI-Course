// ========== I18N ==========
const TRANSLATIONS = {
  th: {
    'nav.home':       'หน้าหลัก',
    'nav.courses':    'คอร์สออนไลน์',
    'nav.search':     'ค้นหาคอร์สเรียน...',
    'nav.login':      'เข้าสู่ระบบ',
    'hero.title':     'เรียนรู้ AI เพื่ออนาคต',
    'hero.sub.main':  'คอร์สเรียนออนไลน์คุณภาพสูง พัฒนาทักษะความสามารถของคุณ —',
    'hero.sub.free':  'ฟรีทุกคอร์ส!',
    'hero.cta':       'ดูคอร์สทั้งหมด',
    'lang.label':     'เลือกภาษา',
    'cat.all':        'ทั้งหมด',
    'section.title':  'หลักสูตรคอร์สเรียนออนไลน์',
    'section.sub':    'เรียนฟรี ไม่มีค่าใช้จ่าย พัฒนาตัวเองได้ทุกที่ทุกเวลา',
    'section.viewAll':'ดูทั้งหมด',
    'footer.tagline': 'แพลตฟอร์มเรียนรู้ออนไลน์สำหรับทุกคน',
    'footer.courses': 'คอร์สเรียน',
    'footer.help':    'ช่วยเหลือ',
    'footer.help1':   'ศูนย์ช่วยเหลือ',
    'footer.help2':   'ติดต่อเรา',
    'footer.help3':   'นโยบายความเป็นส่วนตัว',
    'footer.copy':    '© 2026 AI Course Hub. All rights reserved.',
    'card.free':      'ฟรี',
    'card.lessons':   'บทเรียน',
    'card.recommend': 'แนะนำ',
    'modal.priceLbl': 'ราคาคอร์สเรียน',
    'modal.free':     'ฟรี',
    'modal.enroll':   'ลงทะเบียนเรียน',
    'modal.noLink':   'ยังไม่มีลิ้งลงทะเบียนเรียน',
    'modal.lessons':  'บทเรียน',
    'va.title':       'คอร์สเรียนทั้งหมด',
    'va.featured':    'คอร์สแนะนำ',
    'va.others':      'คอร์สอื่นๆ',
    'va.courseUnit':  'คอร์ส',
    'va.subtitle':    (tot, feat, oth) => `ทั้งหมด ${tot} คอร์ส · แนะนำ ${feat} · อื่นๆ ${oth}`,
    'no.results':     'ไม่พบคอร์สที่ค้นหา',
    'user.manage':    'จัดการคอร์ส',
    'user.logout':    'ออกจากระบบ',
  },
  en: {
    'nav.home':       'Home',
    'nav.courses':    'Online Courses',
    'nav.search':     'Search courses...',
    'nav.login':      'Login',
    'hero.title':     'Learn AI for the Future',
    'hero.sub.main':  'High-quality online courses to develop your skills —',
    'hero.sub.free':  'All courses free!',
    'hero.cta':       'Browse All Courses',
    'lang.label':     'Choose language',
    'cat.all':        'All',
    'section.title':  'Online Course Catalog',
    'section.sub':    'Free to learn, anytime, anywhere',
    'section.viewAll':'View All',
    'footer.tagline': 'Online learning platform for everyone',
    'footer.courses': 'Courses',
    'footer.help':    'Help',
    'footer.help1':   'Help Center',
    'footer.help2':   'Contact Us',
    'footer.help3':   'Privacy Policy',
    'footer.copy':    '© 2026 AI Course Hub. All rights reserved.',
    'card.free':      'Free',
    'card.lessons':   'Lessons',
    'card.recommend': 'Recommend',
    'modal.priceLbl': 'Course Price',
    'modal.free':     'Free',
    'modal.enroll':   'Enroll Now',
    'modal.noLink':   'Enrollment link not available',
    'modal.lessons':  'Lessons',
    'va.title':       'All Courses',
    'va.featured':    'Recommended Courses',
    'va.others':      'Other Courses',
    'va.courseUnit':  'courses',
    'va.subtitle':    (tot, feat, oth) => `Total ${tot} courses · Recommended ${feat} · Others ${oth}`,
    'no.results':     'No courses found',
    'user.manage':    'Manage Courses',
    'user.logout':    'Logout',
  }
};

let currentLang = localStorage.getItem('siteLanguage') || 'th';
function t(key) {
  const val = TRANSLATIONS[currentLang][key];
  return (typeof val === 'string') ? val : key;
}

// ========== DATA ==========
const STORAGE_KEY = "conicle_courses";

const DEFAULT_COURSES = [
  {
    id: 1,
    title: "Prompt Engineering for ChatGPT",
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    badgeColor: "blue",
    instructor: "Great Learning",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Yael",
    students: "12,480",
    duration: "3 ชั่วโมง",
    lessons: 13,
    rating: 4.8,
    description: "หลักสูตรการสร้างคำสั่งสำหรับ AI ออนไลน์ฟรีนี้จะช่วยให้คุณพัฒนาทักษะเชิงปฏิบัติในการใช้ Generative AI และ Prompt Engineering ที่ได้รับการอัปเกรดด้วยคำสั่งที่ปรับปรุงจาก GPT-5 เพื่อสร้างเนื้อหาที่แม่นยำ เหมาะสม และคล้ายกับมนุษย์มากขึ้น โดยการเรียนรู้วิธีโต้ตอบกับโมเดล AI อย่างมีประสิทธิภาพ คุณจะเพิ่มความสามารถในการสร้างข้อความคุณภาพสูง ปรับปรุงผลผลิต และนำเทคนิคเหล่านี้ไปประยุกต์ใช้ในสาขาอาชีพต่างๆ  คุณจะได้เรียนรู้หลักการสำคัญเบื้องหลัง Generative AI และ Large Language Models รวมถึงวิธีสร้างคำสั่งที่แม่นยำเพื่อชี้นำผลลัพธ์ของ AI หลักสูตรยังสอนกลยุทธ์ขั้นสูงในการปรับปรุงการตอบสนองของโมเดลและหลีกเลี่ยงข้อผิดพลาดทั่วไป ช่วยให้คุณสามารถปรับแต่งผลลัพธ์ได้อย่างเหมาะสม นอกจากนี้คุณยังจะได้สำรวจว่าการสร้างคำสั่งสามารถช่วยเสริมแอปพลิเคชันที่ขับเคลื่อนด้วย AI ในด้านต่างๆ เช่น การสร้างเนื้อหา การเขียนโค้ด และการสนับสนุนลูกค้า ทำให้คุณสามารถใช้เครื่องมือ AI ในสถานการณ์จริงได้",
    thumb: "https://blog.ttt-website.com/wp-content/uploads/2023/08/ChatGPT-1536x864.jpg",
    enrollUrl: "https://www.mygreatlearning.com/academy/learn-for-free/courses/prompt-engineering-for-chatgpt",
    featured: true
  },
  {
    id: 2,
    title: "Introduction to Microsoft 365 Copilot",
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    badgeColor: "blue",
    instructor: "Great Learning",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Kanthie",
    students: "8,310",
    duration: "2.25 ชั่วโมง",
    lessons: 10,
    rating: 4.7,
    description: "นี่คือคอร์ส Microsoft 365 Copilot ฟรีที่จะช่วยให้คุณคุ้นเคยกับผู้ช่วย AI ภายในแอปพลิเคชัน Microsoft Office คุณจะเริ่มต้นด้วยคุณสมบัติ การพัฒนา และบทบาทในการเพิ่มประสิทธิภาพการทำงานของมัน คอร์สนี้ครอบคลุมสถาปัตยกรรม ส่วนประกอบหลัก และข้อพิจารณาด้านความเป็นส่วนตัวและการปฏิบัติตามกฎระเบียบของ Copilot พร้อมตัวอย่างสาธิตเชิงปฏิบัติ คุณจะได้เรียนรู้วิธีใช้ Copilot ใน Word, Excel, PowerPoint, Outlook และ Teams และคุณจะมีทักษะเชิงปฏิบัติในการทำงานอย่างมีประสิทธิภาพและสร้างผลผลิตในงานประเภทต่าง ๆ และในอุตสาหกรรมต่าง ๆ",
    thumb: "https://news.uoregon.edu/sites/default/files/2024-12/copilot-logo-3d_as823304134_eduseonly_1920x1080.jpeg",
    featured: false
  },
  {
    id: 3,
    title: "Machine Learning in Production",
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    badgeColor: "blue",
    instructor: "DeepLearning.AI",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Beyond",
    students: "9,640",
    duration: "11 ชั่วโมง",
    lessons: 41,
    rating: 4.6,
    description: "ในหลักสูตร Machine Learning in Production นี้ คุณจะสร้างความเข้าใจเกี่ยวกับการออกแบบระบบ ML สำหรับการผลิตแบบครบวงจร: การกำหนดขอบเขตโครงการ ความต้องการข้อมูล กลยุทธ์การสร้างโมเดล และรูปแบบและเทคโนโลยีในการปรับใช้ คุณจะได้เรียนรู้กลยุทธ์ในการแก้ไขปัญหาที่พบได้บ่อยในระบบการผลิต เช่น การสร้างค่าพื้นฐานของโมเดล การแก้ไขปัญหาการเปลี่ยนแปลงของแนวคิด และการวิเคราะห์ข้อผิดพลาด คุณจะได้ติดตามกรอบการพัฒนา การปรับใช้ และการปรับปรุงอย่างต่อเนื่องของแอปพลิเคชัน ML ที่นำไปใช้ในระบบจริงความเข้าใจในแนวคิดของ machine learning และ deep learning เป็นสิ่งจำเป็น แต่ถ้าคุณต้องการสร้างอาชีพ AI ที่มีประสิทธิภาพ คุณจำเป็นต้องมีประสบการณ์ในการเตรียมโครงการของคุณสำหรับการปรับใช้ด้วย การวิศวกรรม machine learning สำหรับการผลิตผสานรวมแนวคิดพื้นฐานของ machine learning กับทักษะและแนวทางปฏิบัติที่ดีที่สุดของการพัฒนาซอฟต์แวร์สมัยใหม่ที่จำเป็นในการปรับใช้และบำรุงรักษาระบบ ML ในสภาพแวดล้อมจริงได้สำเร็จ",
    thumb: "https://www.trentonsystems.com/hs-fs/hubfs/Machine_Learning%20.jpeg?width=4041&name=Machine_Learning%20.jpeg",
    featured: true
  },
  {
    id: 4,
    title: "TensorFlow Developer Professional Certificate",
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    badgeColor: "blue",
    instructor: "DeepLearning.AI",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=BeyondT",
    students: "6,720",
    duration: "83 ชั่วโมง",
    lessons: 4,
    rating: 4.9,
    description: "แนวทางปฏิบัติที่ดีที่สุดสำหรับ TensorFlow ซึ่งเป็นกรอบการทำงานการเรียนรู้ของเครื่องแบบเปิดที่ได้รับความนิยม เพื่อฝึกเครือข่ายประสาทเทียมสำหรับแอปพลิเคชันการมองด้วยคอมพิวเตอร์ จัดการกับข้อมูลภาพในโลกแห่งความจริงและสำรวจกลยุทธ์เพื่อป้องกันการฟิตเกินรวมถึงการเพิ่มข้อมูลและการลดการหน่วง สร้างระบบประมวลผลภาษาธรรมชาติด้วย TensorFlow ประยุกต์ใช้ RNN, GRU และ LSTM ขณะทำการฝึกด้วยคลังข้อมูลข้อความ",
    thumb: "https://thaiconfig.com/wp-content/uploads/2023/03/TensorFlow-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3.png",
    featured: true
  },
  {
    id: 5,
    title: "LangChain for LLM Application Development",
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    badgeColor: "blue",
    instructor: "DeepLearning.AI",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Pim",
    students: "21,300",
    duration: "1.38 ชั่วโมง",
    lessons: 8,
    rating: 4.9,
    description: "ใน LangChain สำหรับการพัฒนาการประยุกต์ใช้ LLM คุณจะได้รับทักษะสำคัญในการขยายกรณีการใช้งานและความสามารถของโมเดลภาษาในการพัฒนาการประยุกต์ใช้โดยใช้เฟรมเวิร์ก LangChain  ",
    thumb: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=600&q=80",
    featured: false
  },
  {
    id: 6,
    title: "Understanding Data Engineering",
    category: "data",
    categoryLabel: "Data Science",
    badgeColor: "orange",
    instructor: "datacamp",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Sirichai",
    students: "14,890",
    duration: "2 ชั่วโมง",
    lessons: 11,
    rating: 4.7,
    description: "สิ่งที่คุณจะได้เรียนรู้ กำหนดความหมายของวิศวกรรมข้อมูลและรับรู้บทบาทของมันในการสร้างท่อข้อมูลสำหรับการวิเคราะห์และการเรียนรู้ของเครื่อง ระบุส่วนประกอบสำคัญของเวิร์กโฟลว์ข้อมูล รวมถึงการนำเข้า การจัดเก็บ การแปลง และการให้บริการ แยกความแตกต่างระหว่างวิธีการประมวลผลข้อมูลแบบเป็นชุดและแบบสตรีมมิง และประเมินว่าแต่ละวิธีเหมาะสมเมื่อใด รับรู้ความรับผิดชอบของบทบาทวิศวกรข้อมูลเมื่อเทียบกับบทบาทวิทยาศาสตร์ข้อมูลและการวิเคราะห์ ประเมินเครื่องมือและเทคโนโลยีวิศวกรรมข้อมูลทั่วไปที่ใช้ในระบบนิเวศข้อมูลสมัยใหม่",
    thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    featured: false
  },
  {
    id: 7,
    title: "Generative AI สำหรับนักออกแบบและครีเอทีฟ",
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    badgeColor: "purple",
    instructor: "A.Natnicha",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Nat",
    students: "11,050",
    duration: "4 ชั่วโมง",
    lessons: 16,
    rating: 4.8,
    description: "สร้างสรรค์งานดีไซน์ด้วย Midjourney, DALL-E, Stable Diffusion และ AI Tools สำหรับครีเอทีฟยุคใหม่",
    thumb: "https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=600&q=80",
    featured: false
  },
  {
    id: 8,
    title: "Agile Leadership: นำทีมด้วยความคล่องตัวในยุค AI",
    category: "leadership",
    categoryLabel: "Leadership Mindset",
    badgeColor: "blue",
    instructor: "A.Wanchai",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Wanchai",
    students: "7,420",
    duration: "6 ชั่วโมง",
    lessons: 22,
    rating: 4.6,
    description: "พัฒนาทักษะการเป็นผู้นำแบบ Agile เรียนรู้วิธีบริหารทีมในยุคที่ AI เปลี่ยนแปลงรูปแบบการทำงาน",
    thumb: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
    featured: false
  },
  {
    id: 9,
    title: "Microsoft Copilot: เพิ่มประสิทธิภาพการทำงานด้วย AI ใน Office 365",
    category: "productivity",
    categoryLabel: "Productivity",
    badgeColor: "green",
    instructor: "A.Kornkamol",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Korn",
    students: "18,600",
    duration: "3 ชั่วโมง",
    lessons: 12,
    rating: 4.8,
    description: "เรียนรู้การใช้ Microsoft Copilot ใน Word, Excel, PowerPoint และ Teams เพื่อเพิ่มประสิทธิภาพการทำงานได้ทันที",
    thumb: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    featured: false
  },
  {
    id: 10,
    title: "Machine Learning Fundamentals: พื้นฐาน ML สำหรับทุกคน",
    category: "data",
    categoryLabel: "Data Science",
    badgeColor: "orange",
    instructor: "A.Thanakorn",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Thana",
    students: "9,880",
    duration: "10 ชั่วโมง",
    lessons: 40,
    rating: 4.7,
    description: "เข้าใจหลักการของ Machine Learning ตั้งแต่ Linear Regression จนถึง Neural Networks พร้อม Workshop ลงมือปฏิบัติจริง",
    thumb: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
    featured: false
  },
  {
    id: 11,
    title: "AI Ethics & Responsible AI: จริยธรรม AI ที่ทุกองค์กรต้องรู้",
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    badgeColor: "purple",
    instructor: "A.Pornthip",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Porn",
    students: "5,330",
    duration: "2.5 ชั่วโมง",
    lessons: 10,
    rating: 4.9,
    description: "ทำความเข้าใจจริยธรรมในการใช้ AI ความลำเอียงในโมเดล ความเป็นส่วนตัวของข้อมูล และการนำ AI ใช้อย่างรับผิดชอบ",
    thumb: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&fit=crop&crop=center",
    featured: false
  },
  {
    id: 12,
    title: "Lean Management ด้วยเครื่องมือ AI: ลดของเสีย เพิ่มคุณค่า",
    category: "operations",
    categoryLabel: "Operations",
    badgeColor: "green",
    instructor: "A.Araya",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Araya",
    students: "6,110",
    duration: "5 ชั่วโมง",
    lessons: 18,
    rating: 4.6,
    description: "เรียนรู้หลักการ Lean Management ผสานกับเครื่องมือ AI สมัยใหม่ เพื่อปรับปรุงกระบวนการและลดความสูญเปล่าในองค์กร",
    thumb: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&q=80",
    featured: false
  }
];

function loadCourses() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try { return JSON.parse(raw); } catch(e) {}
  }
  return JSON.parse(JSON.stringify(DEFAULT_COURSES));
}

let courses = loadCourses();

window.addEventListener("storage", e => {
  if (e.key === STORAGE_KEY) { courses = loadCourses(); refresh(); }
});

// ========== RENDER CARD ==========
function renderCard(course) {
  const badgeClass = course.badgeColor ? `card-badge ${course.badgeColor}` : "card-badge";
  return `
    <div class="course-card" data-id="${course.id}">
      <div class="card-thumb">
        <img src="${course.thumb}" alt="${course.title}" loading="lazy" />
        <div class="card-badges">
          <span class="${badgeClass}">${course.categoryLabel}</span>
          ${course.difficulty ? `<span class="diff-badge ${course.difficulty}">${{beginner:'Beginner',intermediate:'Intermediate',advanced:'Advanced'}[course.difficulty]||''}</span>` : ''}
        </div>
        <div class="play-btn"><i class="fa fa-play-circle"></i></div>
        ${course.featured ? `<div class="featured-star"><i class="fa fa-star"></i> ${t('card.recommend')}</div>` : ''}
      </div>
      <div class="card-body">
        <div class="card-category">${course.categoryLabel}</div>
        <h3 class="card-title">${course.title}</h3>
        <div class="card-meta">
          <img class="card-avatar" src="${course.avatar}" alt="${course.instructor}" />
          <span class="card-instructor">${course.instructor}</span>
        </div>
        <div class="card-footer">
          <span class="card-price">${t('card.free')}</span>
          <span class="card-meta-info"><i class="fa fa-clock"></i> ${course.duration}</span>
          <span class="card-meta-info"><i class="fa fa-book-open"></i> ${course.lessons} ${t('card.lessons')}</span>
        </div>
      </div>
    </div>`;
}

// ========== POPULATE GRIDS ==========
function populateGrid(containerId, list) {
  const container = document.getElementById(containerId);
  if (!list.length) {
    container.innerHTML = `<div class="no-results"><i class="fa fa-search"></i>${t('no.results')}</div>`;
    return;
  }
  container.innerHTML = list.map(renderCard).join("");
  container.querySelectorAll(".course-card").forEach(card => {
    card.addEventListener("click", () => openModal(Number(card.dataset.id)));
  });
}

// ========== FILTER ==========
let activeCategory = "all";
let searchQuery = "";

function filtered() {
  return courses.filter(c => {
    if (c.hidden) return false;
    const matchCat = activeCategory === "all" || c.category === activeCategory;
    const matchSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        c.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        c.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });
}

function refresh() {
  populateGrid("coursesGrid", filtered());
}

// ========== MODAL ==========
function openModal(id) {
  const c = courses.find(x => x.id === id);
  if (!c) return;
  document.getElementById("modalBody").innerHTML = `
    <img class="modal-thumb" src="${c.thumb}" alt="${c.title}" />
    <div class="modal-info">
      <div class="modal-category-row">
        <span class="modal-category">${c.categoryLabel}</span>
        ${c.difficulty ? `<span class="diff-badge ${c.difficulty}">${{beginner:'🟢 Beginner',intermediate:'🟡 Intermediate',advanced:'🔴 Advanced'}[c.difficulty]||''}</span>` : ''}
      </div>
      <h2 class="modal-title">${c.title}</h2>
      <p class="modal-desc">${c.description}</p>
      <div class="modal-meta-row">
        <span><i class="fa fa-user-tie"></i> ${c.instructor}</span>
        <span><i class="fa fa-clock"></i> ${c.duration}</span>
        <span><i class="fa fa-book-open"></i> ${c.lessons} ${t('modal.lessons')}</span>
      </div>
      <div class="modal-price-row">
        <div>
          <div style="font-size:12px;color:#999;margin-bottom:4px;">${t('modal.priceLbl')}</div>
          <div class="modal-price">${t('modal.free')}</div>
        </div>
        ${c.enrollUrl
          ? `<a class="btn-enroll" href="${c.enrollUrl}" target="_blank" rel="noopener">
               <i class="fa fa-graduation-cap"></i> ${t('modal.enroll')}
             </a>`
          : `<button class="btn-enroll" disabled style="opacity:.5;cursor:not-allowed">
               <i class="fa fa-graduation-cap"></i> ${t('modal.noLink')}
             </button>`
        }
      </div>
    </div>`;
  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

// ========== EVENTS ==========
document.getElementById("catTabs").addEventListener("click", e => {
  const btn = e.target.closest(".cat-btn");
  if (!btn) return;
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeCategory = btn.dataset.cat;
  refresh();
});

document.getElementById("searchInput").addEventListener("input", e => {
  searchQuery = e.target.value;
  refresh();
});

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", e => {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
});

document.querySelector(".btn-hero").addEventListener("click", () => {
  document.querySelector(".featured-section").scrollIntoView({ behavior: "smooth" });
});

// ========== USER AUTH AREA ==========
let _userAreaController = null;
function renderUserArea() {
  if (_userAreaController) _userAreaController.abort();
  _userAreaController = new AbortController();
  const { signal } = _userAreaController;

  const ls = localStorage.getItem("conicle_auth") === "true";
  const ss = sessionStorage.getItem("conicle_auth") === "true";
  const area = document.getElementById("userArea");

  if (!ls && !ss) {
    area.innerHTML = `<button class="btn-login" onclick="window.location.href='../Login/index.html'">${t('nav.login')}</button>`;
    return;
  }

  const username = localStorage.getItem("conicle_admin_user") || sessionStorage.getItem("conicle_admin_user") || "";
  const isAdmin  = (localStorage.getItem("conicle_is_admin") || sessionStorage.getItem("conicle_is_admin")) === "true";

  area.innerHTML = `
    <div class="user-menu" id="userMenu">
      <button class="user-chip" id="userChip">
        <div class="user-avatar">${username.charAt(0).toUpperCase()}</div>
        <span>${username}</span>
        <i class="fa fa-chevron-down" style="font-size:10px;opacity:.6"></i>
      </button>
      <div class="user-dropdown" id="userDropdown">
        ${isAdmin ? `<a href="../Admin/index.html"><i class="fa fa-shield-halved"></i> ${t('user.manage')}</a>` : ""}
        <a href="#" id="logoutBtn"><i class="fa fa-right-from-bracket"></i> ${t('user.logout')}</a>
      </div>
    </div>`;

  document.getElementById("userChip").addEventListener("click", () => {
    document.getElementById("userDropdown").classList.toggle("show");
  }, { signal });
  document.addEventListener("click", e => {
    const menu = document.getElementById("userMenu");
    if (menu && !menu.contains(e.target))
      document.getElementById("userDropdown")?.classList.remove("show");
  }, { signal });
  document.getElementById("logoutBtn").addEventListener("click", e => {
    e.preventDefault();
    ["conicle_auth","conicle_admin_user","conicle_is_admin"].forEach(k => {
      localStorage.removeItem(k); sessionStorage.removeItem(k);
    });
    window.location.href = "../Login/index.html";
  }, { signal });
}

// ========== VIEW ALL ==========
function openViewAll() {
  const visible  = courses.filter(c => !c.hidden);
  const featured = visible.filter(c => c.featured);
  const others   = visible.filter(c => !c.featured);

  document.getElementById('vaSubtitle').textContent =
    TRANSLATIONS[currentLang]['va.subtitle'](visible.length, featured.length, others.length);

  const vaBody = document.getElementById('vaBody');
  vaBody.innerHTML = `
    ${featured.length ? `
      <div class="va-section">
        <div class="va-section-header">
          <div class="va-section-icon featured"><i class="fa fa-star"></i></div>
          <span class="va-section-label">${t('va.featured')}</span>
          <span class="va-section-count featured">${featured.length} ${t('va.courseUnit')}</span>
        </div>
        <div class="va-grid" id="vaFeaturedGrid"></div>
      </div>` : ''}
    ${others.length ? `
      <div class="va-section">
        <div class="va-section-header">
          <div class="va-section-icon others"><i class="fa fa-book-open"></i></div>
          <span class="va-section-label">${t('va.others')}</span>
          <span class="va-section-count others">${others.length} ${t('va.courseUnit')}</span>
        </div>
        <div class="va-grid" id="vaOthersGrid"></div>
      </div>` : ''}
  `;

  [{ id: 'vaFeaturedGrid', list: featured }, { id: 'vaOthersGrid', list: others }]
    .forEach(({ id, list }) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.innerHTML = list.map(renderCard).join('');
      el.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', () => { closeViewAll(); openModal(Number(card.dataset.id)); });
      });
    });

  document.getElementById('vaOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeViewAll() {
  document.getElementById('vaOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('vaClose').addEventListener('click', closeViewAll);
document.getElementById('vaOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('vaOverlay')) closeViewAll();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeViewAll(); closeModal(); }
});
document.querySelectorAll('.view-all').forEach(btn => {
  btn.addEventListener('click', e => { e.preventDefault(); openViewAll(); });
});

// ========== APPLY LANG ==========
function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = TRANSLATIONS[currentLang][el.dataset.i18n];
    if (typeof val === 'string') el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = TRANSLATIONS[currentLang][el.dataset.i18nPlaceholder];
    if (val) el.placeholder = val;
  });
  const langFlag = document.getElementById('langFlag');
  const langName = document.getElementById('langName');
  if (langFlag) langFlag.textContent = currentLang === 'th' ? '🇹🇭' : '🇬🇧';
  if (langName) langName.textContent = currentLang === 'th' ? 'ภาษาไทย' : 'English';
  document.querySelectorAll('.lang-option').forEach(o => {
    o.classList.toggle('active', o.dataset.lang === currentLang);
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('siteLanguage', lang);
  applyLang();
  refresh();
  renderUserArea();
  if (document.getElementById('vaOverlay').classList.contains('open')) openViewAll();
  document.getElementById('langSelector')?.classList.remove('open');
}

// ========== LANG SELECTOR ==========
(function initLangSelector() {
  const sel = document.getElementById('langSelector');
  const cur = document.getElementById('langCurrent');
  if (!sel || !cur) return;
  cur.addEventListener('click', e => { e.stopPropagation(); sel.classList.toggle('open'); });
  document.addEventListener('click', () => sel.classList.remove('open'));
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); setLang(btn.dataset.lang); });
  });
})();

// ========== INIT ==========
applyLang();
renderUserArea();
refresh();
