import { createStore } from "solid-js/store"

export const [state, setState] = createStore({
  addOns: [
    {
      id: 1,
      label: "Online service",
      description: "Access to multiplayer games",
      rate: {
        month: 1,
        year: 10,
      },
      selected: false,
    },
    {
      id: 2,
      label: "Larger storage",
      description: "Extra 1TB of cloud save",
      rate: {
        month: 2,
        year: 20,
      },
      selected: false,
    },
    {
      id: 3,
      label: "Customizable profile",
      description: "Custom theme on your profile",
      rate: {
        month: 2,
        year: 20,
      },
      selected: false,
    },
  ],
  userInfo: {
    name: "",
    email: "",
    phone: "",
  },
})
