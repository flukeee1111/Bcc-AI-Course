// ============================================================
//  I18N
// ============================================================
const LOGIN_TRANSLATIONS = {
  th: {
    'left.sub':    'สมัครสมาชิกและเข้าสู่ระบบ<br/>เพื่อเข้าถึงคอร์สเรียนออนไลน์ทั้งหมด',
    'feat1':       'คอร์สทั้งหมดฟรี',
    'feat2':       'ไม่มีค่าใช้จ่ายแอบแฝง',
    'feat3':       'จัดหมวดหมู่ให้อย่างชัดเจน',
    'feat4':       'รวบรวมคอร์สจากหลายแหล่งที่มา',
    'heading':     'เข้าสู่ระบบ',
    'label.user':  'ชื่อผู้ใช้',
    'ph.user':     'กรอกชื่อผู้ใช้',
    'label.pw':    'รหัสผ่าน',
    'ph.pw':       'กรอกรหัสผ่าน',
    'remember':    'จดจำการเข้าสู่ระบบ',
    'forgot':      'ลืมรหัสผ่าน?',
    'btn.login':   'เข้าสู่ระบบ',
    'btn.loading': 'กำลังตรวจสอบ...',
    'no.account':  'ยังไม่มีบัญชี?',
    'register':    'สมัครสมาชิก',
    'err.noUser':  'กรุณากรอกชื่อผู้ใช้',
    'err.noPw':    'กรุณากรอกรหัสผ่าน',
    'err.wrong':   'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
    'success':     '<i class="fa fa-check"></i> เข้าสู่ระบบสำเร็จ!',
  },
  en: {
    'left.sub':    'Sign up and log in<br/>to access all online courses',
    'feat1':       'All courses free',
    'feat2':       'No hidden fees',
    'feat3':       'Clearly categorized',
    'feat4':       'Curated from multiple sources',
    'heading':     'Login',
    'label.user':  'Username',
    'ph.user':     'Enter your username',
    'label.pw':    'Password',
    'ph.pw':       'Enter your password',
    'remember':    'Remember me',
    'forgot':      'Forgot password?',
    'btn.login':   'Login',
    'btn.loading': 'Verifying...',
    'no.account':  "Don't have an account?",
    'register':    'Sign up',
    'err.noUser':  'Please enter your username',
    'err.noPw':    'Please enter your password',
    'err.wrong':   'Invalid username or password. Please try again.',
    'success':     '<i class="fa fa-check"></i> Login successful!',
  }
};

let currentLang = localStorage.getItem('siteLanguage') || 'th';
function lt(key) {
  return LOGIN_TRANSLATIONS[currentLang][key] ?? key;
}

function applyLangLogin() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = LOGIN_TRANSLATIONS[currentLang][el.dataset.i18n];
    if (typeof val === 'string') el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = LOGIN_TRANSLATIONS[currentLang][el.dataset.i18nHtml];
    if (val) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = LOGIN_TRANSLATIONS[currentLang][el.dataset.i18nPlaceholder];
    if (val) el.placeholder = val;
  });
  const langFlag = document.getElementById('langFlag');
  const langCode = document.getElementById('langCode');
  if (langFlag) langFlag.textContent = currentLang === 'th' ? '🇹🇭' : '🇬🇧';
  if (langCode) langCode.textContent = currentLang === 'th' ? 'TH' : 'EN';
  document.querySelectorAll('.lang-option').forEach(o => {
    o.classList.toggle('active', o.dataset.lang === currentLang);
  });
}

function setLangLogin(lang) {
  currentLang = lang;
  localStorage.setItem('siteLanguage', lang);
  applyLangLogin();
  document.getElementById('langSelector')?.classList.remove('open');
}

(function initLangSelector() {
  const sel = document.getElementById('langSelector');
  const cur = document.getElementById('langCurrent');
  if (!sel || !cur) return;
  cur.addEventListener('click', e => { e.stopPropagation(); sel.classList.toggle('open'); });
  document.addEventListener('click', () => sel.classList.remove('open'));
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); setLangLogin(btn.dataset.lang); });
  });
  applyLangLogin();
})();

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
    showAlert(lt("err.noUser"));
    usernameEl.focus();
    return;
  }
  if (!password) {
    passwordEl.classList.add("error");
    showAlert(lt("err.noPw"));
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

      btnText.innerHTML = lt('success');
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
      showAlert(lt("err.wrong"));
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
