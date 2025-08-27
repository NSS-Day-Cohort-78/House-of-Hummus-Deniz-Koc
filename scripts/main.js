import { FoodTruck } from "./FoodTruck.js"
import { setEntree, setVegetable, setSide, purchaseOrder } from "./TransientState.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async() => {
    mainContainer.innerHTML = await FoodTruck()
}

renderAllHTML()

document.addEventListener("stateChanged", renderAllHTML)
document.addEventListener("change", (event) => {
  if (event.target.name === "entree") {
    setEntree(event.target.value)
  }
  if (event.target.name === "vegetable") {
    setVegetable(event.target.value)
  }
  if (event.target.name === "sideDish") {
    setSide(event.target.value)
  }
})


document.addEventListener("click", (event) => {
  if (event.target.id === "purchase") {
    purchaseOrder()
  }
})
