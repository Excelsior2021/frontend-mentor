import { Component, createEffect, createSignal, For } from "solid-js"
import { setStepState } from "../../App"
import { state } from "../../store/store"
import FormHeader from "../FormHeader/FormHeader"
import { monthlyRate, selectedPlan } from "../SelectPlan/SelectPlan"
import "./FinishUp.scss"

const [totalCost, setTotalCost] = createSignal(0)

const FinishUp: Component = () => {
  createEffect(() => {
    if (monthlyRate()) {
      let total = selectedPlan().rate.month
      for (const addOn of state.addOns) {
        if (addOn.selected) {
          total += addOn.rate.month
        }
      }
      setTotalCost(total)
    } else {
      let total = selectedPlan().rate.year
      for (const addOn of state.addOns) {
        if (addOn.selected) {
          total += addOn.rate.year
        }
      }
      setTotalCost(total)
    }
  })

  return (
    <div class="finish-up">
      <FormHeader
        heading="Finishing up"
        description="Double-check everything looks OK before confirming."
      />
      <div class="finish-up__review">
        <div class="finish-up__review-outer">
          <div class="finish-up__review-inner">
            <p class="finish-up__plan">
              {selectedPlan().name} {monthlyRate() ? "(Monthly)" : "(Yearly)"}
            </p>
            <a class="finish-up__link" href="#" onclick={() => setStepState(2)}>
              change
            </a>
          </div>
          <p class="finish-up__plan-cost">
            {monthlyRate()
              ? `£${selectedPlan().rate.month}/mo`
              : `£${selectedPlan().rate.year}/yr`}
          </p>
        </div>
        <div class="finish-up__review-lower">
          <For each={state.addOns}>
            {addOn => {
              if (addOn.selected) {
                return (
                  <div class="finish-up__review-lower-inner">
                    <p class="finish-up__review-lower-add-on">{addOn.label}</p>
                    <p class="finish-up__review-lower-cost">
                      {monthlyRate()
                        ? `+£${addOn.rate.month}/mo`
                        : `+£${addOn.rate.year}/yr`}
                    </p>
                  </div>
                )
              }
            }}
          </For>
        </div>
      </div>
      <div class="finish-up__total">
        <p class="finish-up__total-label">Total (per month)</p>
        <p class="finish-up__total-cost">
          {monthlyRate() ? `+£${totalCost()}/mo` : `+£${totalCost()}/yr`}
        </p>
      </div>
    </div>
  )
}
export default FinishUp
