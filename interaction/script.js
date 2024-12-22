document.addEventListener("DOMContentLoaded", () => {
  const enquireBtn = document.querySelector(".enquire__btn");
  const cancelBtn = document.querySelector(".cancel__btn");
  const dialog = document.querySelector(".dialog");

  enquireBtn.addEventListener("click", () => {
    dialog.classList.add("dialog__display");
  });

  cancelBtn.addEventListener("click", () => {
    dialog.classList.remove("dialog__display");
  });
});
