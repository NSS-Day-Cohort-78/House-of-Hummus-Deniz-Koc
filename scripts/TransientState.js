// scripts/TransientState.js
const transientState = {}
export const setEntree    = id => { transientState.entreeId    = parseInt(id) }
export const setVegetable = id => { transientState.vegetableId = parseInt(id) }
export const setSide      = id => { transientState.sideId      = parseInt(id) }

export const purchaseOrder = async () => {
  const order = {
    entreeId: transientState.entreeId,
    vegetableId: transientState.vegetableId,
    sideId: transientState.sideId
  }
  await fetch("http://localhost:8088/purchases", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order)
  })
  document.dispatchEvent(new CustomEvent("stateChanged"))
}
