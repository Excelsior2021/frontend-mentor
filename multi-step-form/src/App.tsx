import { Component, createSignal } from "solid-js"
import Navbar from "./components/Navbar/Navbar"
import Wrapper from "./components/Wrapper/Wrapper"
import "./App.scss"

export const [stepState, setStepState] = createSignal(1)

const App: Component = () => (
  <div class="app">
    <div class="app__navbar--mobile">
      <Navbar />
    </div>
    <main class="main">
      <Wrapper />
    </main>
  </div>
)

export default App
