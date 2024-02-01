import { Component } from "solid-js"
import thankYouIcon from "../../assets/images/icon-thank-you.svg"
import "./Confirmation.scss"

const Confirmation: Component = () => (
  <div class="confirmation">
    <img src={thankYouIcon} alt="thank you icon" class="confirmation__icon" />
    <p class="confirmation__heading">Thank you!</p>
    <p class="confirmation__text">
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremgaming.com.
    </p>
  </div>
)

export default Confirmation
