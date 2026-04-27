// ============================================================
//  CREDENTIALS
//  เปลี่ยน username / password ได้ที่นี่
// ============================================================
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin1234"
};

const AUTH_KEY   = "conicle_auth";
const ADMIN_PATH = "../Admin/index.html";

// ============================================================
//  ถ้า login ค้างอยู่แล้ว ข้ามไป Admin เลย
// ============================================================
(function checkAlreadyLoggedIn() {
  const stored = localStorage.getItem(AUTH_KEY) || sessionStorage.getItem(AUTH_KEY);
  if (stored === "true") {
    window.location.href = ADMIN_PATH;
  }
})();

// ============================================================
//  ELEMENTS
// ============================================================
const form       = document.getElementById("loginForm");
const usernameEl = document.getElementById("username");
const passwordEl = document.getElementById("password");
const rememberEl = document.getElementById("rememberMe");
const submitBtn  = document.getElementById("submitBtn");
const btnText    = document.getElementById("btnText");
const btnLoader  = document.getElementById("btnLoader");
const alertBox   = document.getElementById("alert");
const alertMsg   = document.getElementById("alertMsg");
const togglePw   = document.getElementById("togglePw");
const toggleIcon = document.getElementById("togglePwIcon");

// ============================================================
//  TOGGLE PASSWORD VISIBILITY
// ============================================================
togglePw.addEventListener("click", () => {
  const isHidden = passwordEl.type === "password";
  passwordEl.type = isHidden ? "text" : "password";
  toggleIcon.className = isHidden ? "fa fa-eye-slash" : "fa fa-eye";
});

// ============================================================
//  CLEAR ERROR ON INPUT
// ============================================================
[usernameEl, passwordEl].forEach(el => {
  el.addEventListener("input", () => {
    el.classList.remove("error");
    hideAlert();
  });
});

// ============================================================
//  LOGIN SUBMIT
// ============================================================
form.addEventListener("submit", e => {
  e.preventDefault();

  const username = usernameEl.value.trim();
  const password = passwordEl.value;

  // Validate empty
  if (!username) {
    usernameEl.classList.add("error");
    showAlert("กรุณากรอกชื่อผู้ใช้");
    usernameEl.focus();
    return;
  }
  if (!password) {
    passwordEl.classList.add("error");
    showAlert("กรุณากรอกรหัสผ่าน");
    passwordEl.focus();
    return;
  }

  // Show loader
  setLoading(true);

  // Simulate small delay (feels more realistic)
  setTimeout(() => {
    const registeredUsers = JSON.parse(localStorage.getItem("conicle_users") || "[]");
    const matchedUser = registeredUsers.find(u => u.username === username && u.password === password);
    const isAdmin = (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password)
                 || (matchedUser && matchedUser.isAdmin === true);

    if (isAdmin || matchedUser) {
      // SUCCESS
      const storage = rememberEl.checked ? localStorage : sessionStorage;
      storage.setItem(AUTH_KEY, "true");
      storage.setItem("conicle_admin_user", username);
      storage.setItem("conicle_is_admin", isAdmin ? "true" : "false");

      btnText.innerHTML = '<i class="fa fa-check"></i> เข้าสู่ระบบสำเร็จ!';
      btnText.style.display = "flex";
      btnLoader.style.display = "none";
      submitBtn.style.background = "linear-gradient(135deg, #2e7d32, #1b5e20)";

      setTimeout(() => {
        window.location.href = "../Course/index.html";
      }, 700);

    } else {
      // FAIL
      setLoading(false);
      usernameEl.classList.add("error");
      passwordEl.classList.add("error");
      passwordEl.value = "";
      showAlert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง");
      usernameEl.focus();
    }
  }, 800);
});

// ============================================================
//  HELPERS
// ============================================================
function setLoading(on) {
  submitBtn.disabled = on;
  btnText.style.display   = on ? "none" : "flex";
  btnLoader.style.display = on ? "flex" : "none";
}

function showAlert(msg) {
  alertMsg.textContent = msg;
  alertBox.style.display = "flex";
  // Re-trigger shake animation
  alertBox.style.animation = "none";
  alertBox.offsetHeight; // reflow
  alertBox.style.animation = "";
}

function hideAlert() {
  alertBox.style.display = "none";
}

// ============================================================
//  Enter key on username → focus password
// ============================================================
usernameEl.addEventListener("keydown", e => {
  if (e.key === "Enter") { e.preventDefault(); passwordEl.focus(); }
});
