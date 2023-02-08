document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript file is linked");

  const projectBtn = document.getElementById("project-btn");
  const projectSec = document.getElementById("projects");
  const header = document.querySelector("header");

  projectBtn.addEventListener("click", () => {
    console.log("button clicked!");
    window.scrollTo({
      top: projectSec.offsetTop,
      behavior: "smooth",
    });
  });
});
