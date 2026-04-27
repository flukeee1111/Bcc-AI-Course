# BCC AI Course

ระบบเว็บไซต์หลักสูตรการเรียนรู้ด้าน AI สำหรับสถาบัน BCC พัฒนาด้วย HTML, CSS และ JavaScript ล้วน (Vanilla Web Stack) รองรับระบบสมาชิก ล็อกอิน สมัครสมาชิก และการจัดการข้อมูลผู้ใช้งาน

---

## 📁 โครงสร้างโปรเจกต์

```
Bcc-AI-Course/
├── index.html              # หน้าหลัก (Landing Page / Home)
├── darkmode.js             # ระบบสลับธีม Dark / Light Mode
│
├── Login/                  # หน้าเข้าสู่ระบบ
├── Register/               # หน้าสมัครสมาชิก
├── ForgotPassword/         # หน้าลืมรหัสผ่าน
├── ResetPassword/          # หน้ารีเซ็ตรหัสผ่าน
├── Course/                 # หน้าคอร์สเรียน
└── Admin/                  # ระบบหลังบ้านสำหรับผู้ดูแล
```

---

## ✨ ฟีเจอร์หลัก

- **🏠 หน้าแรก** — แสดงข้อมูลหลักสูตรและรายละเอียดของ BCC AI Course
- **🔐 ระบบยืนยันตัวตน** — สมัครสมาชิก / เข้าสู่ระบบ / ลืมรหัสผ่าน / รีเซ็ตรหัสผ่าน
- **📚 หน้าคอร์ส** — แสดงรายการหลักสูตรและเนื้อหาการเรียน
- **🛠️ ระบบ Admin** — จัดการผู้ใช้และคอร์สสำหรับผู้ดูแลระบบ
- **🌙 Dark / Light Mode** — รองรับการสลับธีมผ่าน `darkmode.js`

---

## 🛠️ เทคโนโลยีที่ใช้

| เทคโนโลยี | สัดส่วน | การใช้งาน |
|-----------|---------|-----------|
| CSS | 54.2% | การจัดหน้า สไตล์ และ Responsive Design |
| HTML | 30.0% | โครงสร้างหน้าเว็บ |
| JavaScript | 15.8% | ฟังก์ชัน Dark Mode และ Interactivity |

> ไม่พึ่งพา Framework ภายนอก — ใช้ Vanilla HTML/CSS/JS ทั้งหมด

---

## 🚀 การติดตั้งและใช้งาน

### วิธีที่ 1: เปิดโดยตรง
```bash
# Clone โปรเจกต์
git clone https://github.com/flukeee1111/Bcc-AI-Course.git

# เปิดไฟล์
cd Bcc-AI-Course
open index.html   # macOS
# หรือ
start index.html  # Windows
```

### วิธีที่ 2: ใช้ Live Server (แนะนำ)
1. ติดตั้ง Extension **Live Server** ใน VS Code
2. คลิกขวาที่ `index.html` → **Open with Live Server**
3. เว็บไซต์จะเปิดที่ `http://127.0.0.1:5500`

---

## 📄 หน้าต่างๆ ในระบบ

| หน้า | Path | คำอธิบาย |
|------|------|----------|
| หน้าแรก | `/index.html` | Landing page หลักของเว็บไซต์ |
| เข้าสู่ระบบ | `/Login/` | ฟอร์มล็อกอินสำหรับผู้ใช้ |
| สมัครสมาชิก | `/Register/` | ฟอร์มลงทะเบียนสมาชิกใหม่ |
| ลืมรหัสผ่าน | `/ForgotPassword/` | ขอรีเซ็ตรหัสผ่านผ่านอีเมล |
| รีเซ็ตรหัสผ่าน | `/ResetPassword/` | ตั้งรหัสผ่านใหม่ |
| คอร์สเรียน | `/Course/` | รายการและเนื้อหาหลักสูตร |
| Admin Panel | `/Admin/` | จัดการระบบหลังบ้าน |

---

## 🌙 Dark Mode

โปรเจกต์นี้รองรับ Dark / Light Mode โดย `darkmode.js` จะทำการ:
- จัดการ toggle class บน `<body>`
- บันทึกการตั้งค่าธีมไว้ใน `localStorage`
- โหลดธีมที่เลือกไว้อัตโนมัติเมื่อเปิดหน้าใหม่

---

## 👤 ผู้พัฒนา

**flukeee1111**  
🔗 [github.com/flukeee1111](https://github.com/flukeee1111)

---

## 📜 License

โปรเจกต์นี้เป็น Public Repository บน GitHub  
สามารถดูข้อมูลเพิ่มเติมได้ที่ [github.com/flukeee1111/Bcc-AI-Course](https://github.com/flukeee1111/Bcc-AI-Course)
