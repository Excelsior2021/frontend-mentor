const ratings = document.querySelectorAll(".rating")
const submit = document.getElementById("submit")
const card1 = document.getElementById("card-1")
const card2 = document.getElementById("card-2")
const chosen = document.getElementById("chosen")

ratings.forEach(rating =>
  rating.addEventListener("click", () => {
    removeActive()
    rating.classList.add("active")
    chosen.innerHTML = rating.innerHTML
  })
)

function removeActive() {
  ratings.forEach(rating => {
    rating.classList.remove("active")
  })
}

submit.addEventListener("click", event => {
  event.preventDefault()
  if (!chosen.innerHTML) {
    alert("Please select a rating!")
    return
  }
  card1.classList.add("inactive")
  card2.classList.remove("inactive")
})
