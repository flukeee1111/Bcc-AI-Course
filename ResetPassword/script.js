const USERS_KEY = "conicle_users";
const RESET_KEY = "conicle_reset_token";

const form           = document.getElementById("resetForm");
const otpEl          = document.getElementById("otp");
const newPwEl        = document.getElementById("newPassword");
const confirmPwEl    = document.getElementById("confirmPassword");
const submitBtn      = document.getElementById("submitBtn");
const btnText        = document.getElementById("btnText");
const btnLoader      = document.getElementById("btnLoader");
const alertError     = document.getElementById("alertError");
const alertErrorMsg  = document.getElementById("alertErrorMsg");
const alertSuccess   = document.getElementById("alertSuccess");
const alertSuccessMsg= document.getElementById("alertSuccessMsg");
const strengthFill   = document.getElementById("strengthFill");
const strengthLabel  = document.getElementById("strengthLabel");

// ตรวจสอบว่ามี token อยู่ไหม
const resetToken = JSON.parse(localStorage.getItem(RESET_KEY) || "null");
if (!resetToken) {
  showAlertError("ไม่พบคำขอรีเซตรหัสผ่าน กรุณาขอรหัส OTP ใหม่");
  document.getElementById("resetForm").style.opacity = "0.4";
  document.getElementById("resetForm").style.pointerEvents = "none";
}

// Toggle password visibility
document.getElementById("togglePw1").addEventListener("click", () => {
  const hide = newPwEl.type === "password";
  newPwEl.type = hide ? "text" : "password";
  document.getElementById("togglePwIcon1").className = hide ? "fa fa-eye-slash" : "fa fa-eye";
});
document.getElementById("togglePw2").addEventListener("click", () => {
  const hide = confirmPwEl.type === "password";
  confirmPwEl.type = hide ? "text" : "password";
  document.getElementById("togglePwIcon2").className = hide ? "fa fa-eye-slash" : "fa fa-eye";
});

// Password strength meter
newPwEl.addEventListener("input", () => {
  const val = newPwEl.value;
  let score = 0;
  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;

  const levels = [
    { pct: "0%",   color: "",        label: "" },
    { pct: "25%",  color: "#ef5350", label: "อ่อนมาก" },
    { pct: "50%",  color: "#ff9800", label: "อ่อน" },
    { pct: "75%",  color: "#fdd835", label: "ปานกลาง" },
    { pct: "100%", color: "#43a047", label: "แข็งแกร่ง" },
  ];
  const lv = val.length === 0 ? levels[0] : (levels[score] || levels[1]);
  strengthFill.style.width = lv.pct;
  strengthFill.style.background = lv.color;
  strengthLabel.textContent = lv.label;
  strengthLabel.style.color = lv.color;
});

// Clear errors on input
[otpEl, newPwEl, confirmPwEl].forEach(el => {
  el.addEventListener("input", () => { el.classList.remove("error"); hideAlerts(); });
});

// Filter OTP to digits only
otpEl.addEventListener("input", () => {
  otpEl.value = otpEl.value.replace(/\D/g, "").slice(0, 6);
});

// ============================================================
//  FORM SUBMIT
// ============================================================
form.addEventListener("submit", e => {
  e.preventDefault();
  hideAlerts();

  const otp       = otpEl.value.trim();
  const newPw     = newPwEl.value;
  const confirmPw = confirmPwEl.value;

  if (!otp || otp.length !== 6) return showError(otpEl, "กรุณากรอกรหัส OTP 6 หลัก");
  if (!newPw)     return showError(newPwEl, "กรุณากรอกรหัสผ่านใหม่");
  if (newPw.length < 6) return showError(newPwEl, "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร");
  if (!confirmPw) return showError(confirmPwEl, "กรุณายืนยันรหัสผ่านใหม่");
  if (newPw !== confirmPw) return showError(confirmPwEl, "รหัสผ่านไม่ตรงกัน");

  // ตรวจสอบ token
  const token = JSON.parse(localStorage.getItem(RESET_KEY) || "null");
  if (!token) return showAlertError("ไม่พบคำขอรีเซต กรุณาขอรหัส OTP ใหม่");

  if (Date.now() > token.expiry) {
    localStorage.removeItem(RESET_KEY);
    return showAlertError("รหัส OTP หมดอายุแล้ว กรุณาขอรหัสใหม่อีกครั้ง");
  }

  if (otp !== token.otp) {
    otpEl.classList.add("error");
    return showAlertError("รหัส OTP ไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง");
  }

  setLoading(true);

  setTimeout(() => {
    // อัปเดตรหัสผ่านใน localStorage
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    const idx = users.findIndex(u => u.email.toLowerCase() === token.email.toLowerCase());

    if (idx === -1) {
      setLoading(false);
      return showAlertError("ไม่พบข้อมูลผู้ใช้ กรุณาติดต่อผู้ดูแลระบบ");
    }

    users[idx].password = newPw;
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    // ลบ token หลังใช้งาน
    localStorage.removeItem(RESET_KEY);

    setLoading(false);
    form.reset();
    strengthFill.style.width = "0";
    strengthLabel.textContent = "";

    alertSuccess.style.display = "flex";
    alertSuccessMsg.textContent = "เปลี่ยนรหัสผ่านสำเร็จ! กำลังพาไปหน้าเข้าสู่ระบบ...";

    setTimeout(() => {
      window.location.href = "../Login/index.html";
    }, 2000);
  }, 700);
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
}
