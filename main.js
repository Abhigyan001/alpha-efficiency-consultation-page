// FAQ Toggle

const faqs = document.querySelectorAll(".faq");

faqs.forEach((item) => {
  item.addEventListener("click", () => {
    const para = item.nextElementSibling;
    const icon = item.children[1];

    para.classList.toggle("hidden");
    icon.classList.toggle("rotate");
  });
});
