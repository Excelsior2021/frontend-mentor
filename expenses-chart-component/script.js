import data from "./data.js"

const chartEl = document.getElementById("chart")

let maxAmount = 0

for (const day of data) if (day.amount > maxAmount) maxAmount = day.amount

data.forEach(day => {
  const dayDiv = document.createElement("div")
  const barContainer = document.createElement("div")
  const bar = document.createElement("div")
  const dayLabel = document.createElement("p")
  const amountDiv = document.createElement("div")
  const amount = document.createElement("p")
  const barHeightCalc = day.amount / maxAmount
  const barHeight = `${barHeightCalc * 100}%`

  dayDiv.classList.add("chart__day")
  barContainer.classList.add("chart__bar-container")
  bar.classList.add("chart__bar")
  dayLabel.classList.add("chart__label")
  amountDiv.classList.add("chart__amount-div")
  amount.classList.add("chart__amount")

  if (barHeightCalc === 1) bar.classList.add("chart__bar--max")

  amountDiv.appendChild(amount)
  barContainer.appendChild(amountDiv)
  barContainer.appendChild(bar)
  dayDiv.appendChild(barContainer)
  dayDiv.appendChild(dayLabel)
  chartEl.appendChild(dayDiv)

  bar.style.height = barHeight
  amountDiv.style.top = `${(0.68 - barHeightCalc) * 100}%`
  amountDiv.style.display = "none"
  dayLabel.innerText = day.day

  amount.innerText = `$${day.amount}`

  bar.addEventListener("mouseover", () => {
    amountDiv.style.display = "flex"
  })

  bar.addEventListener("mouseout", () => {
    amountDiv.style.display = "none"
  })
})
