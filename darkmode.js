const DM_KEY = "conicle_darkmode";

function applyDark(on) {
  document.body.classList.toggle("dark", on);
  document.querySelectorAll(".dm-toggle i").forEach(i => {
    i.className = on ? "fa fa-sun" : "fa fa-moon";
  });
}

function initDarkMode() {
  const saved = localStorage.getItem(DM_KEY) === "true";
  applyDark(saved);
  document.querySelectorAll(".dm-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const next = !document.body.classList.contains("dark");
      localStorage.setItem(DM_KEY, next);
      applyDark(next);
    });
  });
}

document.addEventListener("DOMContentLoaded", initDarkMode);
