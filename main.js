// Nav menu
const hamburger = document.querySelector("#hamburger-menu");
const navMenu = document.querySelector(".nav-menu-links");
const navLink = document.querySelectorAll(".nav-link");
const closeIcon = document.querySelector("#close-menu");

hamburger.addEventListener("click", mobileMenu);
closeIcon.addEventListener("click", closeMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.add("hidden");
  navMenu.classList.toggle("active");
  closeIcon.classList.remove("hidden");
}

function closeMenu() {
  hamburger.classList.remove("hidden");
  closeIcon.classList.add("hidden");
  navMenu.classList.remove("active");
}

// Coutdown timer
const countTime = new Date(2023, 7, 22, 0, 0, 0).getTime();
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

let countDown = setInterval(function () {
  const dateTimeNow = new Date().getTime();
  let difference = countTime - dateTimeNow;

  days.innerHTML = Math.floor(difference / (1000 * 60 * 60 * 24));
  hours.innerHTML = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes.innerHTML = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  seconds.innerHTML = Math.floor((difference % (1000 * 60)) / 1000);

  if (difference < 0) {
    clearInterval(countDown);
  }
}, 1000);

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
