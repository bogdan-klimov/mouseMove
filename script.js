const createDiv = (x,y) => {
    const div = document.createElement("div")
    document.body.append(div)
    div.style.left = x + "px"
    div.style.top = y + "px"
}
 
lis = 0;

const writenFunc = event => {
    createDiv(event.clientX, event.clientY)
}

window.addEventListener("mousemove", writenFunc)

window.addEventListener("click", () => {
    lis++
    if (lis % 2 == 0) {
        window.addEventListener("mousemove", writenFunc)
    }
    window.removeEventListener("mousemove", writenFunc)
})