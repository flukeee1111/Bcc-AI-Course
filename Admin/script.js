// ============================================================
//  ADMIN GUARD — ไม่ใช่ admin ให้กลับหน้า Login
// ============================================================
(function guardAdmin() {
  const ls = localStorage.getItem("conicle_is_admin") === "true"
           && localStorage.getItem("conicle_auth") === "true";
  const ss = sessionStorage.getItem("conicle_is_admin") === "true"
           && sessionStorage.getItem("conicle_auth") === "true";
  if (!ls && !ss) window.location.href = "../Login/index.html";
})();

// ============================================================
//  DEFAULT COURSES — same seed data as Course/script.js
// ============================================================
const DEFAULT_COURSES = [
  {
    id: 1,
    title: "AI For Everyone: เตรียมตัวรับมือกับยุค AI ได้ทันทีโดยไม่ต้องมีพื้นฐาน",
    category: "ai", categoryLabel: "AI & Machine Learning", badgeColor: "",
    instructor: "A.Yael", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Yael",
    students: "12,480", duration: "4 ชั่วโมง", lessons: 18, rating: 4.8,
    description: "เรียนรู้ AI จากศูนย์ ทำความเข้าใจว่า AI คืออะไร ใช้งานอย่างไร และจะส่งผลต่อชีวิตและธุรกิจของคุณได้อย่างไร เหมาะสำหรับทุกคนที่ไม่มีพื้นฐานด้านเทคโนโลยี",
    thumb: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80", featured: true
  },
  {
    id: 2,
    title: "ออกแบบและวางแผนกลยุทธ์องค์กรด้วย AI อย่างมืออาชีพ",
    category: "operations", categoryLabel: "Operations", badgeColor: "blue",
    instructor: "A.Kanthie", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Kanthie",
    students: "8,310", duration: "6 ชั่วโมง", lessons: 24, rating: 4.7,
    description: "เรียนรู้การนำ AI มาช่วยวางแผนกลยุทธ์ธุรกิจ วิเคราะห์ตลาด และออกแบบโมเดลธุรกิจให้มีประสิทธิภาพสูงสุด",
    thumb: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80", featured: false
  },
  {
    id: 3,
    title: "Systematic Planning (PDCA) กับการปรับปรุงงานอย่างต่อเนื่อง",
    category: "operations", categoryLabel: "Operations", badgeColor: "green",
    instructor: "Beyond Training", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Beyond",
    students: "9,640", duration: "3.5 ชั่วโมง", lessons: 14, rating: 4.6,
    description: "เรียนรู้วงจร PDCA (Plan-Do-Check-Act) เพื่อปรับปรุงกระบวนการทำงานอย่างเป็นระบบ พร้อมนำเทคนิค AI มาช่วยวิเคราะห์ข้อมูล",
    thumb: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80", featured: true
  },
  {
    id: 4,
    title: "Complex Problem Solving and Decision Making ด้วย AI",
    category: "leadership", categoryLabel: "Leadership Mindset", badgeColor: "purple",
    instructor: "Beyond Training", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=BeyondT",
    students: "6,720", duration: "5 ชั่วโมง", lessons: 20, rating: 4.9,
    description: "เสริมทักษะการแก้ปัญหาซับซ้อนและการตัดสินใจเชิงกลยุทธ์ด้วยเครื่องมือ AI พร้อม Framework สำหรับผู้นำยุคใหม่",
    thumb: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80", featured: true
  },
  {
    id: 5,
    title: "ChatGPT & Prompt Engineering สำหรับมืออาชีพ",
    category: "ai", categoryLabel: "AI & Machine Learning", badgeColor: "",
    instructor: "A.Pimchanok", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Pim",
    students: "21,300", duration: "5.5 ชั่วโมง", lessons: 28, rating: 4.9,
    description: "เรียนรู้การเขียน Prompt ที่มีประสิทธิภาพสำหรับ ChatGPT, Claude, และ AI ยี่ห้ออื่น ๆ เพื่อเพิ่มผลิตภาพในการทำงาน",
    thumb: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=600&q=80", featured: true
  },
  {
    id: 6,
    title: "Data Analytics เบื้องต้น: วิเคราะห์ข้อมูลด้วย Python & AI",
    category: "data", categoryLabel: "Data Science", badgeColor: "orange",
    instructor: "A.Sirichai", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Sirichai",
    students: "14,890", duration: "8 ชั่วโมง", lessons: 32, rating: 4.7,
    description: "เรียนรู้การวิเคราะห์ข้อมูลด้วย Python, Pandas, และเครื่องมือ AI สมัยใหม่ตั้งแต่ระดับเริ่มต้นจนถึงการสร้าง Dashboard",
    thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", featured: false
  },
  {
    id: 7,
    title: "Generative AI สำหรับนักออกแบบและครีเอทีฟ",
    category: "ai", categoryLabel: "AI & Machine Learning", badgeColor: "purple",
    instructor: "A.Natnicha", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Nat",
    students: "11,050", duration: "4 ชั่วโมง", lessons: 16, rating: 4.8,
    description: "สร้างสรรค์งานดีไซน์ด้วย Midjourney, DALL-E, Stable Diffusion และ AI Tools สำหรับครีเอทีฟยุคใหม่",
    thumb: "https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=600&q=80", featured: false
  },
  {
    id: 8,
    title: "Agile Leadership: นำทีมด้วยความคล่องตัวในยุค AI",
    category: "leadership", categoryLabel: "Leadership Mindset", badgeColor: "blue",
    instructor: "A.Wanchai", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Wanchai",
    students: "7,420", duration: "6 ชั่วโมง", lessons: 22, rating: 4.6,
    description: "พัฒนาทักษะการเป็นผู้นำแบบ Agile เรียนรู้วิธีบริหารทีมในยุคที่ AI เปลี่ยนแปลงรูปแบบการทำงาน",
    thumb: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80", featured: false
  },
  {
    id: 9,
    title: "Microsoft Copilot: เพิ่มประสิทธิภาพการทำงานด้วย AI ใน Office 365",
    category: "productivity", categoryLabel: "Productivity", badgeColor: "green",
    instructor: "A.Kornkamol", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Korn",
    students: "18,600", duration: "3 ชั่วโมง", lessons: 12, rating: 4.8,
    description: "เรียนรู้การใช้ Microsoft Copilot ใน Word, Excel, PowerPoint และ Teams เพื่อเพิ่มประสิทธิภาพการทำงานได้ทันที",
    thumb: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80", featured: false
  },
  {
    id: 10,
    title: "Machine Learning Fundamentals: พื้นฐาน ML สำหรับทุกคน",
    category: "data", categoryLabel: "Data Science", badgeColor: "orange",
    instructor: "A.Thanakorn", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Thana",
    students: "9,880", duration: "10 ชั่วโมง", lessons: 40, rating: 4.7,
    description: "เข้าใจหลักการของ Machine Learning ตั้งแต่ Linear Regression จนถึง Neural Networks พร้อม Workshop ลงมือปฏิบัติจริง",
    thumb: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80", featured: false
  },
  {
    id: 11,
    title: "AI Ethics & Responsible AI: จริยธรรม AI ที่ทุกองค์กรต้องรู้",
    category: "ai", categoryLabel: "AI & Machine Learning", badgeColor: "purple",
    instructor: "A.Pornthip", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Porn",
    students: "5,330", duration: "2.5 ชั่วโมง", lessons: 10, rating: 4.9,
    description: "ทำความเข้าใจจริยธรรมในการใช้ AI ความลำเอียงในโมเดล ความเป็นส่วนตัวของข้อมูล และการนำ AI ใช้อย่างรับผิดชอบ",
    thumb: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&fit=crop&crop=center", featured: false
  },
  {
    id: 12,
    title: "Lean Management ด้วยเครื่องมือ AI: ลดของเสีย เพิ่มคุณค่า",
    category: "operations", categoryLabel: "Operations", badgeColor: "green",
    instructor: "A.Araya", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Araya",
    students: "6,110", duration: "5 ชั่วโมง", lessons: 18, rating: 4.6,
    description: "เรียนรู้หลักการ Lean Management ผสานกับเครื่องมือ AI สมัยใหม่ เพื่อปรับปรุงกระบวนการและลดความสูญเปล่าในองค์กร",
    thumb: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&q=80", featured: false
  }
];

const STORAGE_KEY = "conicle_courses";
const AUTH_KEY    = "conicle_auth";
const LOGIN_PATH  = "../Login/index.html";

// ============================================================
//  AUTH GUARD — กันคนที่ยังไม่ login เข้าหน้านี้
// ============================================================
(function authGuard() {
  const ok = localStorage.getItem(AUTH_KEY) === "true" ||
             sessionStorage.getItem(AUTH_KEY) === "true";
  if (!ok) window.location.replace(LOGIN_PATH);
})();

const CAT_LABELS = {
  ai: "AI & Machine Learning",
  data: "Data Science",
  leadership: "Leadership Mindset",
  operations: "Operations",
  productivity: "Productivity"
};

// ============================================================
//  STATE
// ============================================================
let courses = [];
let deleteTargetId = null;
let currentPage = "dashboard";

// ============================================================
//  STORAGE
// ============================================================
function loadCourses() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try { courses = JSON.parse(raw); return; } catch(e) {}
  }
  courses = JSON.parse(JSON.stringify(DEFAULT_COURSES));
  saveCourses();
}

function saveCourses() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  flashSaved();
}

function nextId() {
  return courses.length ? Math.max(...courses.map(c => c.id)) + 1 : 1;
}

// ============================================================
//  NAVIGATION
// ============================================================
function navigate(page) {
  currentPage = page;
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));

  document.getElementById("page-" + page)?.classList.add("active");
  document.querySelector(`.nav-item[data-page="${page}"]`)?.classList.add("active");

  const titles = { dashboard: "Dashboard", courses: "จัดการคอร์ส", add: "เพิ่มคอร์สใหม่", users: "จัดการผู้ใช้" };
  document.getElementById("topbarTitle").textContent = titles[page] || page;

  if (page === "dashboard") renderDashboard();
  if (page === "courses")   renderTable();
  if (page === "add")       resetForm();
  if (page === "users")     renderUsers();
}

function navigateToEdit(id) {
  currentPage = "add";
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  document.getElementById("page-add")?.classList.add("active");
  document.querySelector(`.nav-item[data-page="add"]`)?.classList.add("active");
  document.getElementById("topbarTitle").textContent = "แก้ไขคอร์ส";
  openEditForm(id);
}

// ============================================================
//  DASHBOARD
// ============================================================
function renderDashboard() {
  document.getElementById("statTotal").textContent = courses.length;
  document.getElementById("statAI").textContent = courses.filter(c => c.category === "ai").length;
  document.getElementById("statFeatured").textContent = courses.filter(c => c.featured).length;
  document.getElementById("statCats").textContent = new Set(courses.map(c => c.category)).size;

  const tbody = document.querySelector("#dashTable tbody");
  const recent = courses.slice(0, 6);
  tbody.innerHTML = recent.map(c => `
    <tr class="${c.hidden ? 'row-hidden' : ''}">
      <td><div style="display:flex;align-items:center;gap:10px">
        <img class="td-thumb" src="${c.thumb}" alt="" style="${c.hidden ? 'opacity:.4' : ''}" />
        <div class="td-title">${c.title}<small>${c.instructor}</small>
          ${c.hidden ? '<span class="hidden-tag">ซ่อนอยู่</span>' : ''}
        </div>
      </div></td>
      <td><span class="cat-chip ${c.category}">${c.categoryLabel}</span></td>
      <td>${c.instructor}</td>
      <td style="text-align:center"><input type="checkbox" class="toggle-featured" ${c.featured ? "checked" : ""} data-id="${c.id}" /></td>
      <td style="text-align:center">
        <button class="btn-icon toggle-vis" data-id="${c.id}" title="${c.hidden ? 'แสดง' : 'ซ่อน'}">
          <i class="fa ${c.hidden ? 'fa-eye' : 'fa-eye-slash'}"></i>
        </button>
      </td>
      <td>
        <button class="btn-icon edit" data-id="${c.id}" title="แก้ไข"><i class="fa fa-pen"></i></button>
        <button class="btn-icon del" data-id="${c.id}" title="ลบ" style="margin-left:4px"><i class="fa fa-trash"></i></button>
      </td>
    </tr>`).join("");

  bindTableActions(tbody);
}

// ============================================================
//  COURSES TABLE
// ============================================================
let tableSearch = "";
let tableCat = "all";

function renderTable() {
  const list = courses.filter(c => {
    const matchCat = tableCat === "all" || c.category === tableCat;
    const q = tableSearch.toLowerCase();
    const matchQ = !q || c.title.toLowerCase().includes(q) || c.instructor.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  const tbody = document.getElementById("coursesBody");
  const empty = document.getElementById("tableEmpty");

  if (!list.length) {
    tbody.innerHTML = "";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  tbody.innerHTML = list.map((c, i) => `
    <tr class="${c.hidden ? 'row-hidden' : ''}" draggable="true" data-id="${c.id}">
      <td><span class="drag-handle" title="ลากเพื่อจัดเรียง"><i class="fa fa-grip-vertical"></i></span></td>
      <td style="color:#bbb;font-size:12px">${i + 1}</td>
      <td><img class="td-thumb" src="${c.thumb}" alt="" style="${c.hidden ? 'opacity:.4' : ''}" /></td>
      <td>
        <div class="td-title">${c.title}
          <small>${c.duration} · ${c.lessons} บทเรียน</small>
        </div>
        ${c.hidden ? '<span class="hidden-tag">ซ่อนอยู่</span>' : ''}
      </td>
      <td><span class="cat-chip ${c.category}">${c.categoryLabel}</span></td>
      <td>${c.instructor}</td>
      <td style="text-align:center">
        <input type="checkbox" class="toggle-featured" ${c.featured ? "checked" : ""} data-id="${c.id}" />
      </td>
      <td style="text-align:center">
        <button class="btn-icon toggle-vis" data-id="${c.id}" title="${c.hidden ? 'แสดง' : 'ซ่อน'}">
          <i class="fa ${c.hidden ? 'fa-eye' : 'fa-eye-slash'}"></i>
        </button>
      </td>
      <td>
        <button class="btn-icon edit" data-id="${c.id}" title="แก้ไข"><i class="fa fa-pen"></i></button>
        <button class="btn-icon del"  data-id="${c.id}" title="ลบ" style="margin-left:4px"><i class="fa fa-trash"></i></button>
      </td>
    </tr>`).join("");

  bindTableActions(tbody);
  bindDragSort(tbody, list);
}

// ============================================================
//  DRAG & DROP SORT
// ============================================================
function bindDragSort(tbody, filteredList) {
  let dragId = null;

  tbody.querySelectorAll("tr[draggable]").forEach(row => {
    row.addEventListener("dragstart", e => {
      dragId = Number(row.dataset.id);
      row.classList.add("dragging");
      e.dataTransfer.effectAllowed = "move";
    });

    row.addEventListener("dragend", () => {
      row.classList.remove("dragging");
      tbody.querySelectorAll("tr").forEach(r => r.classList.remove("drag-over"));
    });

    row.addEventListener("dragover", e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      tbody.querySelectorAll("tr").forEach(r => r.classList.remove("drag-over"));
      row.classList.add("drag-over");
    });

    row.addEventListener("drop", e => {
      e.preventDefault();
      const dropId = Number(row.dataset.id);
      if (dragId === null || dragId === dropId) return;

      // หา index ใน courses array (ตาม filteredList order)
      const dragCourseIdx  = courses.findIndex(c => c.id === dragId);
      const dropCourseIdx  = courses.findIndex(c => c.id === dropId);
      if (dragCourseIdx === -1 || dropCourseIdx === -1) return;

      // สลับตำแหน่งใน courses array
      const [removed] = courses.splice(dragCourseIdx, 1);
      courses.splice(dropCourseIdx, 0, removed);

      saveCourses();
      showToast("จัดเรียงคอร์สเรียบร้อยแล้ว", "success");
      renderTable();
    });
  });
}

function bindTableActions(tbody) {
  tbody.querySelectorAll(".btn-icon.edit").forEach(btn =>
    btn.addEventListener("click", () => navigateToEdit(Number(btn.dataset.id)))
  );
  tbody.querySelectorAll(".btn-icon.del").forEach(btn =>
    btn.addEventListener("click", () => openDeleteConfirm(Number(btn.dataset.id)))
  );
  tbody.querySelectorAll(".toggle-featured").forEach(cb =>
    cb.addEventListener("change", () => {
      const c = courses.find(x => x.id === Number(cb.dataset.id));
      if (c) { c.featured = cb.checked; saveCourses(); showToast("อัปเดต Featured เรียบร้อย", "success"); }
    })
  );
  tbody.querySelectorAll(".toggle-vis").forEach(btn =>
    btn.addEventListener("click", () => {
      const c = courses.find(x => x.id === Number(btn.dataset.id));
      if (!c) return;
      c.hidden = !c.hidden;
      saveCourses();
      showToast(c.hidden ? `ซ่อน "${c.title}" แล้ว` : `แสดง "${c.title}" แล้ว`, "success");
      renderTable();
    })
  );
}

// ============================================================
//  FORM (ADD / EDIT)
// ============================================================
function resetForm() {
  document.getElementById("editId").value = "";
  document.getElementById("courseForm").reset();
  document.getElementById("addPageTitle").textContent = "เพิ่มคอร์สใหม่";
  document.getElementById("addPageSub").textContent = "กรอกข้อมูลคอร์สเรียนด้านล่าง";
  document.getElementById("formSubmit").innerHTML = '<i class="fa fa-save"></i> บันทึกคอร์ส';
  updatePreview();
  updateThumbPreview("");
}

function openEditForm(id) {
  const c = courses.find(x => x.id === id);
  if (!c) return;
  document.getElementById("editId").value = c.id;
  document.getElementById("f_title").value = c.title;
  document.getElementById("f_category").value = c.category;
  document.getElementById("f_badgeColor").value = c.badgeColor || "";
  document.getElementById("f_description").value = c.description;
  document.getElementById("f_instructor").value = c.instructor;
  document.getElementById("f_avatar").value = c.avatar || "";
  document.getElementById("f_duration").value = c.duration;
  document.getElementById("f_lessons").value = c.lessons;
  document.getElementById("f_thumb").value = c.thumb;
  document.getElementById("f_enrollUrl").value = c.enrollUrl || "";
  document.getElementById("f_difficulty").value = c.difficulty || "beginner";
  document.getElementById("f_featured").checked = c.featured;

  document.getElementById("addPageTitle").textContent = "แก้ไขคอร์ส";
  document.getElementById("addPageSub").textContent = c.title;
  document.getElementById("formSubmit").innerHTML = '<i class="fa fa-check"></i> บันทึกการแก้ไข';

  updatePreview();
  updateThumbPreview(c.thumb);
}

document.getElementById("courseForm").addEventListener("submit", e => {
  e.preventDefault();

  const editId = document.getElementById("editId").value;
  const cat = document.getElementById("f_category").value;
  const instructorRaw = document.getElementById("f_instructor").value.trim();
  const avatarRaw = document.getElementById("f_avatar").value.trim();

  const data = {
    title:        document.getElementById("f_title").value.trim(),
    category:     cat,
    categoryLabel: CAT_LABELS[cat] || cat,
    badgeColor:   document.getElementById("f_badgeColor").value,
    description:  document.getElementById("f_description").value.trim(),
    instructor:   instructorRaw,
    avatar:       avatarRaw || `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(instructorRaw)}`,
    duration:     document.getElementById("f_duration").value.trim() || "–",
    lessons:      Number(document.getElementById("f_lessons").value) || 0,
    thumb:        document.getElementById("f_thumb").value.trim(),
    enrollUrl:    document.getElementById("f_enrollUrl").value.trim(),
    difficulty:   document.getElementById("f_difficulty").value,
    featured:     document.getElementById("f_featured").checked,
  };

  if (editId) {
    const idx = courses.findIndex(c => c.id === Number(editId));
    if (idx !== -1) { courses[idx] = { ...courses[idx], ...data }; }
    showToast("แก้ไขคอร์สเรียบร้อยแล้ว", "success");
  } else {
    courses.push({ id: nextId(), ...data });
    showToast("เพิ่มคอร์สใหม่เรียบร้อยแล้ว", "success");
  }

  saveCourses();
  navigate("courses");
});

document.getElementById("formCancel").addEventListener("click", () => {
  navigate("courses");
});

// ============================================================
//  LIVE PREVIEW
// ============================================================
function updatePreview() {
  const title    = document.getElementById("f_title").value || "ชื่อคอร์สเรียน";
  const cat      = document.getElementById("f_category").value;
  const badge    = document.getElementById("f_badgeColor").value;
  const inst     = document.getElementById("f_instructor").value || "ชื่อผู้สอน";
  const avatarVal= document.getElementById("f_avatar").value.trim();
  const thumb    = document.getElementById("f_thumb").value.trim();
  const duration = document.getElementById("f_duration").value.trim();
  const lessons  = document.getElementById("f_lessons").value;
  const diff     = document.getElementById("f_difficulty").value;
  const catLabel = CAT_LABELS[cat] || cat;

  const DIFF_LABEL = { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" };
  const DIFF_CLASS = { beginner: "beginner", intermediate: "intermediate", advanced: "advanced" };

  document.getElementById("cp-title").textContent = title;
  document.getElementById("cp-cat").textContent   = catLabel;

  const cpBadge = document.getElementById("cp-badge");
  cpBadge.textContent  = catLabel;
  cpBadge.className    = `card-badge${badge ? " " + badge : ""}`;

  const cpDiff = document.getElementById("cp-diff");
  if (diff) {
    cpDiff.textContent  = DIFF_LABEL[diff] || diff;
    cpDiff.className    = `diff-badge ${DIFF_CLASS[diff] || ""}`;
    cpDiff.style.display = "";
  } else {
    cpDiff.style.display = "none";
  }

  document.getElementById("cp-instructor").textContent = inst;
  const avatarSrc = avatarVal || `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(inst)}`;
  document.getElementById("cp-avatar").src = avatarSrc;

  const durEl = document.getElementById("cp-duration");
  const lesEl = document.getElementById("cp-lessons");
  if (duration) { durEl.innerHTML = `<i class="fa fa-clock"></i> ${duration}`; durEl.style.display = ""; }
  else { durEl.style.display = "none"; }
  if (lessons)  { lesEl.innerHTML = `<i class="fa fa-book-open"></i> ${lessons} บทเรียน`; lesEl.style.display = ""; }
  else { lesEl.style.display = "none"; }

  const img = document.getElementById("cp-img");
  const ph  = document.getElementById("cp-thumb-placeholder");
  if (thumb) { img.src = thumb; img.style.display = "block"; if (ph) ph.style.display = "none"; }
  else       { img.style.display = "none"; if (ph) ph.style.display = "flex"; }
}

function updateThumbPreview(url) {
  const img = document.getElementById("thumbPreview");
  const ph  = document.getElementById("thumbPlaceholder");
  if (url) {
    img.src = url;
    img.style.display = "block";
    ph.style.display  = "none";
  } else {
    img.style.display = "none";
    ph.style.display  = "flex";
  }
}

// Watch form inputs for live preview
["f_title","f_category","f_badgeColor","f_instructor","f_avatar","f_thumb","f_duration","f_lessons","f_difficulty"]
  .forEach(id => document.getElementById(id)?.addEventListener("input", updatePreview));
["f_category","f_badgeColor","f_difficulty"]
  .forEach(id => document.getElementById(id)?.addEventListener("change", updatePreview));

document.getElementById("f_thumb").addEventListener("input", e => {
  updateThumbPreview(e.target.value.trim());
});

// ============================================================
//  DELETE
// ============================================================
function openDeleteConfirm(id) {
  const c = courses.find(x => x.id === id);
  if (!c) return;
  deleteTargetId = id;
  document.getElementById("deleteCourseName").textContent = c.title;
  document.getElementById("deleteOverlay").classList.add("open");
}

document.getElementById("deleteCancelBtn").addEventListener("click", () => {
  document.getElementById("deleteOverlay").classList.remove("open");
  deleteTargetId = null;
});

document.getElementById("deleteConfirmBtn").addEventListener("click", () => {
  if (deleteTargetId === null) return;
  courses = courses.filter(c => c.id !== deleteTargetId);
  saveCourses();
  document.getElementById("deleteOverlay").classList.remove("open");
  deleteTargetId = null;
  showToast("ลบคอร์สเรียบร้อยแล้ว", "warning");
  if (currentPage === "courses")   renderTable();
  if (currentPage === "dashboard") renderDashboard();
});

// ============================================================
//  SIDEBAR NAVIGATION EVENTS
// ============================================================
document.querySelectorAll(".nav-item[data-page]").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    navigate(el.dataset.page);
    document.getElementById("sidebar").classList.remove("open");
  });
});

// Dashboard card "ดูทั้งหมด" button
document.addEventListener("click", e => {
  const btn = e.target.closest(".btn-sm[data-page]");
  if (btn) navigate(btn.dataset.page);
});

// "เพิ่มคอร์ส" button in toolbar
document.getElementById("addCourseBtn").addEventListener("click", () => navigate("add"));

// Mobile menu toggle
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});

// Table filter / search
document.getElementById("tableSearch").addEventListener("input", e => {
  tableSearch = e.target.value;
  renderTable();
});
document.getElementById("filterCat").addEventListener("change", e => {
  tableCat = e.target.value;
  renderTable();
});

// ============================================================
//  TOAST
// ============================================================
let toastTimer;
function showToast(msg, type = "") {
  const t = document.getElementById("toast");
  t.className = "toast" + (type ? " " + type : "");
  t.innerHTML = `<i class="fa fa-${type === "success" ? "check-circle" : type === "warning" ? "triangle-exclamation" : "circle-info"}"></i> ${msg}`;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 3000);
}

function flashSaved() {
  const b = document.getElementById("savedBadge");
  b.classList.add("show");
  setTimeout(() => b.classList.remove("show"), 2500);
}

// ============================================================
//  LOGOUT
// ============================================================
document.getElementById("logoutBtn").addEventListener("click", e => {
  e.preventDefault();
  localStorage.removeItem(AUTH_KEY);
  sessionStorage.removeItem(AUTH_KEY);
  localStorage.removeItem("conicle_admin_user");
  sessionStorage.removeItem("conicle_admin_user");
  window.location.href = LOGIN_PATH;
});

// ============================================================
//  INIT
// ============================================================
loadCourses();
navigate("dashboard");

// แสดงชื่อ admin ใน topbar
const adminUser = localStorage.getItem("conicle_admin_user") ||
                  sessionStorage.getItem("conicle_admin_user") || "Admin";
const nameEl = document.getElementById("adminName");
if (nameEl) nameEl.textContent = adminUser;

// ============================================================
//  USERS PAGE
// ============================================================
const USERS_KEY = "conicle_users";

function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function renderUsers() {
  const users = getUsers();
  const tbody = document.getElementById("usersBody");
  const empty = document.getElementById("usersEmpty");

  if (!users.length) {
    tbody.innerHTML = "";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  tbody.innerHTML = users.map((u, i) => {
    const date = u.createdAt ? new Date(u.createdAt).toLocaleDateString("th-TH") : "–";
    return `
    <tr>
      <td style="color:#bbb;font-size:12px">${i + 1}</td>
      <td>
        <div style="display:flex;align-items:center;gap:10px">
          <div class="user-initial">${u.username.charAt(0).toUpperCase()}</div>
          <strong>${u.username}</strong>
        </div>
      </td>
      <td style="color:#888">${u.email}</td>
      <td style="color:#888;font-size:13px">${date}</td>
      <td style="text-align:center">
        <span class="role-badge ${u.isAdmin ? 'admin' : 'user'}">
          ${u.isAdmin ? '<i class="fa fa-shield-halved"></i> Admin' : '<i class="fa fa-user"></i> User'}
        </span>
      </td>
      <td style="text-align:center">
        <button class="btn-role-toggle btn-sm ${u.isAdmin ? 'demote' : 'promote'}" data-idx="${i}">
          ${u.isAdmin ? '<i class="fa fa-user-minus"></i> ถอด Admin' : '<i class="fa fa-user-shield"></i> ตั้งเป็น Admin'}
        </button>
        <button class="btn-icon del del-user" data-idx="${i}" title="ลบผู้ใช้" style="margin-left:6px"><i class="fa fa-trash"></i></button>
      </td>
    </tr>`;
  }).join("");

  tbody.querySelectorAll(".btn-role-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const users = getUsers();
      const idx = Number(btn.dataset.idx);
      users[idx].isAdmin = !users[idx].isAdmin;
      saveUsers(users);
      showToast(users[idx].isAdmin ? `ตั้ง ${users[idx].username} เป็น Admin แล้ว` : `ถอด Admin ของ ${users[idx].username} แล้ว`, "success");
      renderUsers();
    });
  });

  tbody.querySelectorAll(".del-user").forEach(btn => {
    btn.addEventListener("click", () => {
      const users = getUsers();
      const idx = Number(btn.dataset.idx);
      const name = users[idx].username;
      if (!confirm(`ลบผู้ใช้ "${name}" ออกจากระบบ?`)) return;
      users.splice(idx, 1);
      saveUsers(users);
      showToast(`ลบผู้ใช้ ${name} แล้ว`, "success");
      renderUsers();
    });
  });
}
