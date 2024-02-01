import { Component, createSignal } from "solid-js"
import { setStepState, stepState } from "../../App"
import "./Navigate.scss"

export const [confirm, setConfirm] = createSignal(false)

const Navigate: Component = () => (
  <div class="navigate">
    {stepState() !== 1 && (
      <button
        class="navigate__button navigate__button--prev"
        onclick={() => setStepState(prevState => prevState - 1)}>
        go back
      </button>
    )}
    {stepState() !== 4 && (
      <button
        class="navigate__button navigate__button--next"
        onclick={() => setStepState(prevState => prevState + 1)}>
        next step
      </button>
    )}
    {stepState() === 4 && (
      <button
        class="navigate__button navigate__button--confirm"
        onclick={() => setConfirm(true)}>
        confirm
      </button>
    )}
  </div>
)

export default Navigate
