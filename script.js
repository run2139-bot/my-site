// 푸터의 연도를 현재 연도로 채웁니다.
document.getElementById("year").textContent = new Date().getFullYear();

// 카드를 클릭하면 강조 표시를 켜고 끕니다.
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => card.classList.toggle("active"));
});
