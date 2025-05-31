// Animation simple au scroll (futur ajout)
window.addEventListener("scroll", () => {
  document.body.style.backgroundColor =
    window.scrollY > 300 ? "#0a0a0a" : "#111";
});
