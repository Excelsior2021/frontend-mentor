import { Component, For } from "solid-js"
import { setState, state } from "../../store/store"
import FormHeader from "../FormHeader/FormHeader"
import { monthlyRate } from "../SelectPlan/SelectPlan"
import "./PickAddOns.scss"

const PickAddOns: Component = () => {
  return (
    <div class="add-ons">
      <FormHeader
        heading="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      <form class="add-ons__form">
        <For each={state.addOns}>
          {addOn => (
            <div
              class={
                addOn.selected
                  ? "add-ons__option add-ons__option--active"
                  : "add-ons__option"
              }
              onclick={() => {
                setState(
                  "addOns",
                  addOnState => addOnState.id === addOn.id,
                  "selected",
                  selected => !selected
                )
              }}>
              <input
                class="add-ons__input"
                type="checkbox"
                checked={addOn.selected}
              />
              <div class="add-ons__text-container">
                <label for="" class="add-ons__label">
                  {addOn.label}
                </label>
                <p class="add-ons__text">{addOn.description}</p>
              </div>
              <p class="add-ons__rate">
                {monthlyRate()
                  ? `+£${addOn.rate.month}/mo`
                  : `+£${addOn.rate.year}/yr`}
              </p>
            </div>
          )}
        </For>
      </form>
    </div>
  )
}

export default PickAddOns
