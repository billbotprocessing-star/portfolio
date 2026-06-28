const cube = document.getElementById("cube");

const clickOnSide = (side) => {
  const activeSide = cube.dataset.side;
  cube.classList.replace(`show-${activeSide}`, `show-${side}`);
  cube.setAttribute("data-side", side);
};

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const sideToTurn = e.target.dataset.side;
    clickOnSide(sideToTurn);
  });
});

document.querySelectorAll(".visit-app").forEach(link => {
  link.addEventListener("click", (e) => {
    e.stopPropagation();

    const url = link.getAttribute("href");
    if (!url || url === "#") return;

    e.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  });
});
