import CSS from "./CSS.js";

const EMPTY = '<div class="empty">Nada encontrado</div>'
export default class List {
    constructor(title) {
        const TARGET = document.body
        const style = document.createElement("style")
        style.innerText = CSS
        document.head.appendChild(style)

        this.container = document.createElement("div")
        this.container.classList.add("container")
        this.container.innerHTML = EMPTY
        TARGET.appendChild(this.container)

        const titleElement = document.createElement("h2")
        titleElement.innerText = title
        titleElement.classList.add("header")
        TARGET.before(titleElement, this.container)
    }

    render(data, keys, onRowClick) {
        this.container.innerHTML = ""
        if (data.length === 0)
            this.container.innerHTML = EMPTY
        for (let i = 0; i < data.length; i++) {
            const element = document.createElement("div")
            element.classList.add("row")
            element.id = "list-row-" + i
            if (onRowClick)
                element.addEventListener("click", (event) => {
                    onRowClick(event, data[i], i, data, keys)
                })
            keys.forEach(k => {
                const keyElement = document.createElement("div")
                keyElement.classList.add("key")
                keyElement.innerHTML = `
                    <div style="font-size: .85rem;">
                        ${data[i][k.key]}
                    </div>
                    <div style="font-size: .7rem; font-weight: 550">
                        ${k.label}
                    </div>
                `
                element.appendChild(keyElement)
            })

            this.container.appendChild(element)
        }
    }
}