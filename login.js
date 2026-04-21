'use strict';

// ===== Particles =====
(function spawnParticles() {
  const container = document.getElementById('particles');
  const colors = ['#00f5ff', '#bf5fff', '#ff2d78'];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left       = Math.random() * 100 + 'vw';
    p.style.bottom     = '-10px';
    p.style.width      = (Math.random() * 2 + 1) + 'px';
    p.style.height     = p.style.width;
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDuration  = (Math.random() * 12 + 8) + 's';
    p.style.animationDelay     = (Math.random() * 12) + 's';
    p.style.opacity    = Math.random() * 0.6 + 0.2;
    container.appendChild(p);
  }
})();

// ===== Elements =====
const form      = document.getElementById('loginForm');
const emailEl   = document.getElementById('email');
const passEl    = document.getElementById('password');
const toggleBtn = document.getElementById('togglePw');
const eyeShow   = document.getElementById('eyeShow');
const eyeHide   = document.getElementById('eyeHide');
const submitBtn = document.getElementById('submitBtn');
const btnText   = document.getElementById('btnText');
const btnLoader = document.getElementById('btnLoader');
const btnArrow  = document.getElementById('btnArrow');
const toastEl   = document.getElementById('toast');

// ===== Toggle password =====
toggleBtn.addEventListener('click', () => {
  const show = passEl.type === 'password';
  passEl.type = show ? 'text' : 'password';
  eyeShow.classList.toggle('hidden', show);
  eyeHide.classList.toggle('hidden', !show);
});

// ===== Validation =====
const validate = {
  email:    v => !v.trim()                           ? 'Email is required.'
               : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Invalid email address.'
               : '',
  password: v => !v              ? 'Password is required.'
               : v.length < 6   ? 'At least 6 characters.'
               : '',
};

function setError(input, errId, msg) {
  const el = document.getElementById(errId);
  if (msg) { input.classList.add('invalid'); el.textContent = msg; }
  else      { input.classList.remove('invalid'); el.textContent = ''; }
  return !!msg;
}

emailEl.addEventListener('blur', () =>
  setError(emailEl, 'emailErr', validate.email(emailEl.value)));
passEl.addEventListener('blur', () =>
  setError(passEl, 'passwordErr', validate.password(passEl.value)));

[emailEl, passEl].forEach(el => el.addEventListener('input', () => {
  el.classList.remove('invalid');
  document.getElementById(el.id === 'email' ? 'emailErr' : 'passwordErr').textContent = '';
}));

// ===== Toast =====
let toastTimer;
function toast(msg, type = '', ms = 3000) {
  clearTimeout(toastTimer);
  toastEl.textContent = msg;
  toastEl.className = `toast show ${type}`;
  toastTimer = setTimeout(() => { toastEl.className = 'toast hidden'; }, ms);
}

// ===== Loading state =====
function setLoading(on) {
  submitBtn.disabled = on;
  btnText.classList.toggle('hidden', on);
  btnLoader.classList.toggle('hidden', !on);
  btnArrow.classList.toggle('hidden', on);
}

// ===== Mock API =====
function mockLogin(email, pass) {
  return new Promise((resolve, reject) =>
    setTimeout(() => (email && pass ? resolve() : reject()), 1500));
}

// ===== Submit =====
form.addEventListener('submit', async e => {
  e.preventDefault();
  const e1 = setError(emailEl, 'emailErr', validate.email(emailEl.value));
  const e2 = setError(passEl,  'passwordErr', validate.password(passEl.value));
  if (e1 || e2) return;

  setLoading(true);
  try {
    await mockLogin(emailEl.value.trim(), passEl.value);
    toast('Access granted — welcome back!', 'success');
    setTimeout(() => { window.location.href = 'dashboard.html'; }, 1800);
  } catch {
    toast('Invalid credentials. Try again.', 'error');
    setLoading(false);
  }
});

// ===== Helpers =====
function socialLogin(p)    { toast(`Connecting to ${p}…`); }
function forgotPassword(e) { e.preventDefault(); toast('Reset link sent to your email.'); }
function goToRegister(e)   { e.preventDefault(); toast('Redirecting to sign up…'); }
