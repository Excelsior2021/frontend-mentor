const body = document.getElementById("body")
const menu = document.getElementById("menu")
const closeMenu = document.getElementById("close-menu")
const modal = document.getElementById("modal")
const modalLinks = document.getElementsByClassName("modal__link")

const closeModal = () => {
  modal.classList.remove("modal--show")
  body.style.overflowY = "auto"
}

menu.addEventListener("click", () => {
  modal.classList.add("modal--show")
  body.style.overflowY = "hidden"
})

closeMenu.addEventListener("click", () => closeModal())

for (const link of modalLinks) {
  link.addEventListener("click", () => closeModal())
}
