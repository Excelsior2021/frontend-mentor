import { Component, For } from "solid-js"
import { setStepState, stepState } from "../../App"
import "./Navbar.scss"

const steps = [
  { step: 1, title: "your info" },
  { step: 2, title: "select plan" },
  { step: 3, title: "add-ons" },
  { step: 4, title: "summary" },
]

const Navbar: Component = () => (
  <div class="navbar">
    <nav class="nav">
      <ol class="nav__list">
        <For each={steps}>
          {step => (
            <li class="nav__item" onclick={() => setStepState(step.step)}>
              <div
                class={
                  stepState() === step.step
                    ? "nav__step nav__step--active"
                    : "nav__step"
                }>
                {step.step}
              </div>
              <div class="nav__info">
                <p class="nav__info-step">step {step.step}</p>
                <p class="nav__info-title">{step.title}</p>
              </div>
            </li>
          )}
        </For>
      </ol>
    </nav>
  </div>
)

export default Navbar
