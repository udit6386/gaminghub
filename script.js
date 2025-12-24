const searchInput = document.getElementById("searchInput");
const gameCards = document.querySelectorAll(".game-card");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  gameCards.forEach(card => {
    const name = card.getAttribute("data-name");
    card.style.display = name.includes(query) ? "block" : "none";
  });
});
