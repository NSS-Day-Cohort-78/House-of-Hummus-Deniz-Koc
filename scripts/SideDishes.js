// scripts/SideDishes.js
export const Sides = async () => {
  const response = await fetch("http://localhost:8088/sides")
  const sides = await response.json()

  const items = sides.map(side => `
    <div>
      <input type="radio" name="sideDish" value="${side.id}" />
      <label>${side.title}</label>
    </div>
  `).join("")

  const html = `
    <section class="options choices__sides">
      <h2>Side Dishes</h2>
      ${items}
    </section>
  `
  return html
}
