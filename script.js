document.querySelector("#aktivknapp").onclick = function() {var x = document.querySelector("#linker")
    if (x.style.display === "block") {
        x.style.display = "none"
      } else {
        x.style.display = "block"
      }
      var y = document.querySelector("#dødknapp")
      if (y.style.display === "block") {
          y.style.display = "none"
        } else {
          y.style.display = "block"
    } }