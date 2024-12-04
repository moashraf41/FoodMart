const backToTopButton = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  window.scrollY > 300
    ? (backToTopButton.style.display = "block")
    : (backToTopButton.style.display = "none");
}),
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }),
  document.querySelectorAll(".read-more").forEach((e) => {
    e.addEventListener("click", function (e) {
      e.preventDefault();
      let t = this.previousElementSibling;
      "none" === t.style.display
        ? ((t.style.display = "inline"), (this.textContent = "Read Less"))
        : ((t.style.display = "none"), (this.textContent = "Read More"));
    });
  }),
  $().scroll;
