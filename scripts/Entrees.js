// scripts/Entrees.js
export const Entrees = async () => {
  const response = await fetch("http://localhost:8088/entrees")
  const entrees = await response.json()

  const items = entrees.map(entree => `
    <div>
      <input type="radio" name="entree" value="${entree.id}" />
      <label>${entree.name}</label>
    </div>
  `).join("")

  const html = `
    <section class="options choices__base">
      <h2>Base Dishes</h2>
      ${items}
    </section>
  `
  return html
}

