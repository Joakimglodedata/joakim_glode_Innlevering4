var aktivk = document.querySelector("#aktivknapp")
var dødk = document.querySelector("#dødknapp")
var linkerl = document.querySelector("#linker")
var overlaym = document.querySelector("#overlay")

/*aktivk.onclick = () => {aktivk.style.display = "none"
dødk.style.display = "block"
linkerl.style.display = "block"
overlaym.style.display = "block"
}

dødk.onclick = () => {dødk.style.display = "none"
aktivk.style.display = "block"
linkerl.style.display = "none"
overlaym.style.display = "none"
}

overlaym.onclick = () => {dødk.style.display = "none"
aktivk.style.display = "block"
linkerl.style.display = "none"
overlaym.style.display = "none"
}*/
aktivk.onclick = burgerfunksjon
dødk.onclick = burgerfunksjon
overlaym.onclick = burgerfunksjon

let keyDown = {'kva som helst': false}

document.addEventListener("keydown", keyboardpress)
function keyboardpress(e) {
  e.preventDefault()
  keyDown[e.key] = true
  if (keyDown["m" || "Esc"]) {
    burgerfunksjon()
  }
}

function burgerfunksjon() {
    var aktivk = document.querySelector("#aktivknapp")
    var dødk = document.querySelector("#dødknapp")
    var linkerl = document.querySelector("#linker")
    var overlaym = document.querySelector("#overlay")

    if (linkerl.style.display === "none" || linkerl.style.display === "" && window.innerWidth < 800) {
        aktivk.style.display = "none"
        dødk.style.display = "block"
        linkerl.style.display = "block"
        overlaym.style.display = "block"
    } else if (window.innerWidth < 800) {
        aktivk.style.display = "block"
        dødk.style.display = "none"
        linkerl.style.display = "none"
        overlaym.style.display = "none"
    } else {linkerl.style.display = "flex"
        aktivk.style.display = "none"
        dødk.style.display = "none"
        overlaym.style.display = "none"
}
}
