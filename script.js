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

function burgerfunksjon() {if (linkerl.style.display = "block") {aktivk.style.display = "none"
dødk.style.display = "block"
linkerl.style.display = "block"
overlaym.style.display = "block"} else {dødk.style.display = "none"
aktivk.style.display = "block"
linkerl.style.display = "none"
overlaym.style.display = "none"}
}