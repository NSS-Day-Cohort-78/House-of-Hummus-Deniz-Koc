// scripts/Sales.js
export const Sales = () => {
  return fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")
    .then(res => res.json())
    .then(sales => {
      const html = sales.map(sale => {
        const total = sale.entree.price + sale.vegetable.price + sale.side.price
        return `<li>Receipt #${sale.id} = $${total.toFixed(2)}</li>`
      }).join("")
      return `<ul class="orders">${html}</ul>`
    })
}
