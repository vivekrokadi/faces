document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu");
  const closeBtn = document.querySelector(".close");
  const sidebar = document.querySelector(".sidebar");
  const navLinks = document.querySelectorAll(".sidebar a");

  menuBtn.addEventListener("click", function () {
    sidebar.style.left = "0";
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", function () {
    sidebar.style.left = "-100%";
    document.body.style.overflow = "";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      sidebar.style.left = "-100%";
    });
  });
});

