// 푸터의 연도를 현재 연도로 채웁니다.
document.getElementById("year").textContent = new Date().getFullYear();

// 카드를 클릭하면 강조 표시를 켜고 끕니다. (한 번에 하나만 강조)
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const wasActive = card.classList.contains("active");
    cards.forEach((c) => c.classList.remove("active"));
    if (!wasActive) card.classList.add("active");
  });
});

// 다크모드 토글: 선택을 localStorage에 저장하고, 없으면 시스템 설정을 따릅니다.
const root = document.documentElement;
const toggle = document.createElement("button");
toggle.className = "theme-toggle";
toggle.type = "button";
document.body.appendChild(toggle);

function applyTheme(theme) {
  root.dataset.theme = theme;
  toggle.textContent = theme === "dark" ? "☀️" : "🌙";
  toggle.setAttribute(
    "aria-label",
    theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"
  );
}

let saved = null;
try {
  saved = localStorage.getItem("theme");
} catch (e) {}
applyTheme(
  saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
);

toggle.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
});
