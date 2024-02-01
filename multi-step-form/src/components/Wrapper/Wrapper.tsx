import { Component, Match, Switch } from "solid-js"
import { stepState } from "../../App"
import { confirm } from "../Navigate/Navigate"
import FinishUp from "../FinishUp/FinishUp"
import Navigate from "../Navigate/Navigate"
import PersonalInfo from "../PersonalInfo/PersonalInfo"
import PickAddOns from "../PickAddOns/PickAddOns"
import SelectPlan from "../SelectPlan/SelectPlan"
import Navbar from "../Navbar/Navbar"
import Confirmation from "../Confirmation/Confirmation"
import "./Wrapper.scss"

const Wrapper: Component = () => (
  <div class="wrapper">
    <div class="app__navbar--desktop">
      <Navbar />
    </div>
    <div class="wrapper__main">
      <Switch>
        <Match when={stepState() === 1}>
          <PersonalInfo />
        </Match>
        <Match when={stepState() === 2}>
          <SelectPlan />
        </Match>
        <Match when={stepState() === 3}>
          <PickAddOns />
        </Match>
        <Match when={stepState() === 4 && !confirm()}>
          <FinishUp />
        </Match>
        <Match when={stepState() === 4 && confirm()}>
          <Confirmation />
        </Match>
      </Switch>
      {(!confirm() || stepState() !== 4) && <Navigate />}
    </div>
  </div>
)

export default Wrapper
