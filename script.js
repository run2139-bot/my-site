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
