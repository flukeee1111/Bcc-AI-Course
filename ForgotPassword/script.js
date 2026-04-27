// ============================================================
//  EMAILJS CONFIG — ตั้งค่าตรงนี้
//  1. สมัคร https://www.emailjs.com (ฟรี)
//  2. สร้าง Email Service (Gmail / Outlook ฯลฯ)
//  3. สร้าง Email Template — ใช้ variables เหล่านี้ใน template:
//       {{to_name}}   = ชื่อผู้ใช้
//       {{otp_code}}  = รหัส OTP 6 หลัก
//       {{reply_to}}  = อีเมลผู้รับ
//  4. คัดลอก Public Key, Service ID, Template ID มาใส่ด้านล่าง
// ============================================================
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // เช่น "abc123XYZ"
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // เช่น "service_xxxxxx"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // เช่น "template_xxxxxx"

const USERS_KEY  = "conicle_users";
const RESET_KEY  = "conicle_reset_token";
const OTP_TTL_MS = 15 * 60 * 1000; // 15 นาที

// ============================================================
//  ELEMENTS
// ============================================================
const form         = document.getElementById("forgotForm");
const emailEl      = document.getElementById("email");
const submitBtn    = document.getElementById("submitBtn");
const btnText      = document.getElementById("btnText");
const btnLoader    = document.getElementById("btnLoader");
const alertError   = document.getElementById("alertError");
const alertErrorMsg= document.getElementById("alertErrorMsg");
const alertSuccess = document.getElementById("alertSuccess");
const alertSuccessMsg = document.getElementById("alertSuccessMsg");

// init EmailJS
emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

// ============================================================
//  FORM SUBMIT
// ============================================================
form.addEventListener("submit", async e => {
  e.preventDefault();
  hideAlerts();

  const email = emailEl.value.trim().toLowerCase();

  if (!email) {
    return showError(emailEl, "กรุณากรอกอีเมล");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return showError(emailEl, "รูปแบบอีเมลไม่ถูกต้อง");
  }

  // ค้นหาผู้ใช้จาก localStorage
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  const user  = users.find(u => u.email.toLowerCase() === email);

  if (!user) {
    return showError(emailEl, "ไม่พบอีเมลนี้ในระบบ กรุณาตรวจสอบอีเมลอีกครั้ง");
  }

  setLoading(true);

  // สร้าง OTP 6 หลัก
  const otp = String(Math.floor(100000 + Math.random() * 900000));

  // บันทึก token ลง localStorage
  const resetToken = {
    email:  user.email,
    otp,
    expiry: Date.now() + OTP_TTL_MS
  };
  localStorage.setItem(RESET_KEY, JSON.stringify(resetToken));

  // ส่งอีเมลผ่าน EmailJS
  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_name:  user.username,
      otp_code: otp,
      reply_to: user.email
    });

    setLoading(false);
    form.reset();
    alertSuccess.style.display = "flex";
    alertSuccessMsg.textContent =
      `ส่งรหัส OTP ไปยัง ${maskEmail(user.email)} แล้ว! กรุณาตรวจสอบกล่องจดหมาย (หมดอายุใน 15 นาที)`;

    // ไปหน้า ResetPassword หลัง 3 วินาที
    setTimeout(() => {
      window.location.href = "../ResetPassword/index.html";
    }, 3000);

  } catch (err) {
    setLoading(false);
    // fallback: ถ้า EmailJS ยังไม่ได้ตั้งค่า → แสดง OTP บนหน้าจอเพื่อทดสอบ
    if (EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
      alertSuccess.style.display = "flex";
      alertSuccessMsg.textContent =
        `[โหมดทดสอบ] รหัส OTP ของคุณคือ: ${otp} (EmailJS ยังไม่ได้ตั้งค่า)`;
      setTimeout(() => {
        window.location.href = "../ResetPassword/index.html";
      }, 4000);
    } else {
      showAlertError("ส่งอีเมลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
      console.error("EmailJS error:", err);
    }
  }
});

// ============================================================
//  HELPERS
// ============================================================
function setLoading(on) {
  submitBtn.disabled = on;
  btnText.style.display   = on ? "none" : "flex";
  btnLoader.style.display = on ? "flex" : "none";
}

function showError(el, msg) {
  el.classList.add("error");
  showAlertError(msg);
  el.focus();
}

function showAlertError(msg) {
  alertErrorMsg.textContent = msg;
  alertError.style.display = "flex";
  alertError.style.animation = "none";
  alertError.offsetHeight;
  alertError.style.animation = "";
}

function hideAlerts() {
  alertError.style.display   = "none";
  alertSuccess.style.display = "none";
  emailEl.classList.remove("error");
}

// ซ่อนบางส่วนของอีเมลเพื่อความปลอดภัย  เช่น te***@gmail.com
function maskEmail(email) {
  const [local, domain] = email.split("@");
  const visible = local.slice(0, 2);
  return `${visible}${"*".repeat(Math.max(1, local.length - 2))}@${domain}`;
}

emailEl.addEventListener("input", () => {
  emailEl.classList.remove("error");
  hideAlerts();
});
