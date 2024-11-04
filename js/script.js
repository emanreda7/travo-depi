// ___________________ animate on scroll for about section ___________________________

// __________________ up button ______________________________________________________

let upbtn = document.getElementById("up");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    upbtn.style.display = "block";
  } else {
    upbtn.style.display = "none";
  }
};
upbtn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// __________________________swiper for blog section________________________________

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// _______________ for login from home page _________________
let signbtn = document.getElementById("signinnav");
signbtn.onclick = function () {
  window.location.href = "/pages/login.html";
  // signbtn.style.display = "none";
};

// window.onload = function () {
//   document.getElementById("signout").style.display = "none";
// };

// window.onload = function () {
//   const signUpBtn = document.getElementById("signout");
//   const userBtn = document.getElementById("navuser");
//   const loginForm = document.getElementById("signinnav");

//   if (localStorage.getItem("loggedIn") === "true") {
//     localStorage.setItem("loggedIn", "true");
//     signUpBtn.style.display = "none";
//     userBtn.style.display = "block";
//   } else {
//     signUpBtn.style.display = "inline-block";
//     userBtn.style.display = "none";
//   }
// };

if (localStorage.getItem("loggedIn") === "true") {
  localStorage.setItem("loggedIn", "true");
  window.onload = function () {
    document.getElementById("navuser").style.display = "block";
    document.getElementById("signout").style.display = "none";
    document.getElementById("signinnav").style.display = "none";
  };
} else {
  window.onload = function () {
    document.getElementById("navuser").style.display = "none";
    document.getElementById("signout").style.display = "block";
    document.getElementById("signinnav").style.display = "block";
  };
}
