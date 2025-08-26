export const Sides = async() => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    const items = sides.map((side) => {
        return `
    <div>
        <input type="radio" name="sideDish" value="${side.id}"/>
        <label>${side.title}</label>
     </div>`
    }).join("") 

    const html = `
    <section class="option choices__sides">
        <h2>Side Dishes</h2>
        ${items}
    </section>`
    return html
}

