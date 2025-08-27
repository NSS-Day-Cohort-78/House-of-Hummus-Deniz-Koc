
export const Sales = async () => {
  const sales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")
    .then(res => res.json())

  let salesDivs = sales.map((purchase) => {
    const total = purchase.entree.price + purchase.vegetable.price + purchase.side.price
    return `<li>Receipt #${purchase.id} = $${total.toFixed(2)}</li>`
  })

  salesDivs = salesDivs.join("")

  return salesDivs
}

