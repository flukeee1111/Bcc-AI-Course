const USERS_KEY = "conicle_users";

const form           = document.getElementById("registerForm");
const emailEl        = document.getElementById("email");
const usernameEl     = document.getElementById("username");
const passwordEl     = document.getElementById("password");
const confirmEl      = document.getElementById("confirmPassword");
const submitBtn      = document.getElementById("submitBtn");
const btnText        = document.getElementById("btnText");
const btnLoader      = document.getElementById("btnLoader");
const alertBox       = document.getElementById("alert");
const alertMsg       = document.getElementById("alertMsg");
const alertSuccess   = document.getElementById("alertSuccess");
const alertSuccessMsg= document.getElementById("alertSuccessMsg");
const strengthFill   = document.getElementById("strengthFill");
const strengthLabel  = document.getElementById("strengthLabel");

// Toggle password visibility
document.getElementById("togglePw").addEventListener("click", () => {
  const hide = passwordEl.type === "password";
  passwordEl.type = hide ? "text" : "password";
  document.getElementById("togglePwIcon").className = hide ? "fa fa-eye-slash" : "fa fa-eye";
});
document.getElementById("togglePw2").addEventListener("click", () => {
  const hide = confirmEl.type === "password";
  confirmEl.type = hide ? "text" : "password";
  document.getElementById("togglePwIcon2").className = hide ? "fa fa-eye-slash" : "fa fa-eye";
});

// Password strength
passwordEl.addEventListener("input", () => {
  const val = passwordEl.value;
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
  const lv = val.length === 0 ? levels[0] : levels[score] || levels[1];
  strengthFill.style.width = lv.pct;
  strengthFill.style.background = lv.color;
  strengthLabel.textContent = lv.label;
  strengthLabel.style.color = lv.color;
});

// Clear error on input
[emailEl, usernameEl, passwordEl, confirmEl].forEach(el => {
  el.addEventListener("input", () => { el.classList.remove("error"); hideAlert(); });
});

// Submit
form.addEventListener("submit", e => {
  e.preventDefault();

  const email    = emailEl.value.trim();
  const username = usernameEl.value.trim();
  const password = passwordEl.value;
  const confirm  = confirmEl.value;

  // Validate
  if (!email) return showError(emailEl, "กรุณากรอกอีเมล");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showError(emailEl, "รูปแบบอีเมลไม่ถูกต้อง");
  if (!username) return showError(usernameEl, "กรุณากรอกชื่อผู้ใช้");
  if (username.length < 3) return showError(usernameEl, "ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร");
  if (!password) return showError(passwordEl, "กรุณากรอกรหัสผ่าน");
  if (password.length < 6) return showError(passwordEl, "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร");
  if (!confirm) return showError(confirmEl, "กรุณายืนยันรหัสผ่าน");
  if (password !== confirm) return showError(confirmEl, "รหัสผ่านไม่ตรงกัน");

  // Check duplicate username/email
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  if (users.find(u => u.username === username)) return showError(usernameEl, "ชื่อผู้ใช้นี้ถูกใช้งานแล้ว");
  if (users.find(u => u.email === email)) return showError(emailEl, "อีเมลนี้ถูกใช้งานแล้ว");

  setLoading(true);

  setTimeout(() => {
    users.push({ email, username, password, createdAt: new Date().toISOString() });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    setLoading(false);
    form.reset();
    strengthFill.style.width = "0";
    strengthLabel.textContent = "";

    alertSuccess.style.display = "flex";
    alertSuccessMsg.textContent = "สมัครสมาชิกสำเร็จ! กำลังพาไปหน้าเข้าสู่ระบบ...";

    setTimeout(() => { window.location.href = "../Login/index.html"; }, 1800);
  }, 800);
});

function showError(el, msg) {
  el.classList.add("error");
  alertMsg.textContent = msg;
  alertBox.style.display = "flex";
  alertBox.style.animation = "none";
  alertBox.offsetHeight;
  alertBox.style.animation = "";
  el.focus();
}

function hideAlert() {
  alertBox.style.display = "none";
  alertSuccess.style.display = "none";
}

function setLoading(on) {
  submitBtn.disabled = on;
  btnText.style.display   = on ? "none" : "flex";
  btnLoader.style.display = on ? "flex" : "none";
}
