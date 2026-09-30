/* ================= PRELOADER ================= */

window.addEventListener("load", function () {

  const loader = document.getElementById("loader");

  setTimeout(function () {

    loader.classList.add("hide");

  }, 1600);

});


/* ================= MOBILE MENU ================= */

const menuButton =
  document.getElementById("menuButton");

const navigation =
  document.getElementById("navigation");


menuButton.addEventListener("click", function () {

  navigation.classList.toggle("open");

});


/* CLOSE MENU AFTER CLICK */

const navLinks =
  document.querySelectorAll(".navigation a");


navLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    navigation.classList.remove("open");

  });

});


/* ================= HEADER SCROLL ================= */

const header =
  document.getElementById("header");


window.addEventListener("scroll", function () {

  if (window.scrollY > 60) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

});


/* ================= FAQ ================= */

const faqItems =
  document.querySelectorAll(".faq-item");


faqItems.forEach(function (item) {

  const question =
    item.querySelector(".faq-question");

  const answer =
    item.querySelector(".faq-answer");


  question.addEventListener("click", function () {

    const alreadyOpen =
      item.classList.contains("open");


    faqItems.forEach(function (otherItem) {

      otherItem.classList.remove("open");

      otherItem
        .querySelector(".faq-answer")
        .style.maxHeight = null;

    });


    if (!alreadyOpen) {

      item.classList.add("open");

      answer.style.maxHeight =
        answer.scrollHeight + "px";

    }

  });

});


/* ================= DEMO BUTTON ================= */

function showDemo() {

  const toast =
    document.getElementById("toast");


  toast.classList.add("show");


  setTimeout(function () {

    toast.classList.remove("show");

  }, 3500);

}


/* ================= REVEAL ANIMATION ================= */

const revealElements =
  document.querySelectorAll(
    ".about-grid, .about-image, .program-item, .stat-card, .trainer-card, .gallery-item, .testimonial, .faq-item, .cta-content"
  );


const revealObserver =
  new IntersectionObserver(

    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          entry.target.classList.add("revealed");

        }

      });

    },

    {
      threshold: 0.12
    }

  );


revealElements.forEach(function (element) {

  element.classList.add("reveal");

  revealObserver.observe(element);

});
