document.querySelectorAll(".faq").forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    const answer = faq.querySelector(".answer");
    answer.classList.toggle("open");
  });
});