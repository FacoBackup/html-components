import CSS from "./CSS.js";

export default class Form {
    constructor() {
        const TARGET = document.body
        const style = document.createElement("style")
        style.innerText = CSS
        document.head.appendChild(style)

        this.container = document.createElement("form")
        this.container.classList.add("container")
        TARGET.appendChild(this.container)

        this.titleElement = document.createElement("h2")
        this.titleElement.classList.add("header")
        TARGET.before(this.titleElement, this.container)
    }

    render({submitLabel, title, keys}, onSubmit) {
        this.titleElement.innerText = title
        keys.forEach((key, i) => {
            const KEY_ID = i + "-input-form"
            const keyInput = document.createElement(key.areaInput ? "textarea" : "input")
            Object.keys(key.attributes).forEach(k => {
                if (key.attributes[k])
                    keyInput.setAttribute(k, key.attributes[k])
                if(k === "value" && key.areaInput)
                    keyInput.innerText = key.attributes[k]
            })
            keyInput.id = KEY_ID
            keyInput.classList.add("input")
            keyInput.setAttribute("data-key", key.key)
            const label = document.createElement("label")
            label.htmlFor = KEY_ID
            label.innerText = key.label
            label.classList.add("label")

            const localContainer = document.createElement("div")
            localContainer.classList.add("input-container")
            localContainer.appendChild(label)
            localContainer.appendChild(keyInput)


            this.container.appendChild(localContainer)
        })

        const submit = document.createElement("input")
        submit.type = "submit"
        submit.classList.add("submit")
        submit.value = submitLabel
        this.container.addEventListener("submit", (ev) => {
            ev.preventDefault()
            const data = {}
            const inputs = [...this.container.getElementsByTagName("input"), ...this.container.getElementsByTagName("textarea")]

            inputs.forEach(i => {
                if (i.getAttribute("data-key"))
                    data[i.getAttribute("data-key")] = i.value
            })

            if (onSubmit)
                onSubmit(data)
        })
        this.container.appendChild(submit)
    }
}