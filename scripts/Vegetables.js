// scripts/Vegetables.js
export const Veggies = async () => {
  const response = await fetch("http://localhost:8088/vegetables")
  const vegetables = await response.json()

  const items = vegetables.map(vegetable => `
    <div>
      <input type="radio" name="vegetable" value="${vegetable.id}" />
      <label>${vegetable.type}</label>
    </div>
  `).join("")

  const html = `
    <section class="options choices__veggies">
      <h2>Vegetables</h2>
      ${items}
    </section>
  `
  return html
}
