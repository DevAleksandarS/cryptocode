document.querySelectorAll(".cta").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("bg-blur").classList.remove("none");
    document.getElementById("message").classList.remove("none");
  });
});

document.querySelector(".close-msg").addEventListener("click", () => {
  document.getElementById("bg-blur").classList.add("none");
  document.getElementById("message").classList.add("none");
});
