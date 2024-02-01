import { Component, For, createSignal } from "solid-js"
import FormHeader from "../FormHeader/FormHeader"
import arcade from "../../assets/images/icon-arcade.svg"
import advanced from "../../assets/images/icon-advanced.svg"
import pro from "../../assets/images/icon-pro.svg"
import "./SelectPlan.scss"

const plans = [
  { name: "arcade", rate: { month: 9, year: 90 }, icon: arcade },
  { name: "advanced", rate: { month: 12, year: 120 }, icon: advanced },
  { name: "pro", rate: { month: 15, year: 150 }, icon: pro },
]

export const [monthlyRate, setMonthlyRate] = createSignal(true)
export const [selectedPlan, setSelectedPlan] = createSignal(plans[0])

const SelectPlan: Component = () => {
  return (
    <div class="select-plan">
      <FormHeader
        heading="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <form class="select-plan__form">
        <For each={plans}>
          {plan => (
            <button
              class={
                selectedPlan().name === plan.name
                  ? "select-plan__input select-plan__input--active "
                  : "select-plan__input"
              }
              onclick={e => {
                e.preventDefault()
                setSelectedPlan(plan)
              }}>
              <img src={plan.icon} alt="icon" class="select-plan__icon" />
              <div class="select-plan__input-text">
                <p class="select-plan__name">{plan.name}</p>
                <p class="select-plan__rate">
                  {monthlyRate()
                    ? `£${plan.rate.month}/mo`
                    : `£${plan.rate.year}/yr`}
                </p>
              </div>
            </button>
          )}
        </For>
      </form>
      <div class="toggle">
        <p class="toggle__text toggle__text--month">monthly</p>
        <label class="switch">
          <input
            class="switch__input"
            type="checkbox"
            checked={!monthlyRate()}
            onclick={() => setMonthlyRate(prevState => !prevState)}
          />
          <span class="switch__slider switch__round"></span>
        </label>
        <p class="toggle__text toggle__text--year">yearly</p>
      </div>
    </div>
  )
}

export default SelectPlan
