import { Component } from "solid-js"
import "./FormHeader.scss"

type formHeaderProps = {
  heading: string
  description: string
}

const FormHeader: Component<formHeaderProps> = props => (
  <div class="form-header">
    <h2 class="form-header__heading">{props.heading}</h2>
    <p class="form-header__description">{props.description}</p>
  </div>
)

export default FormHeader
