var h1 = document.createElement("h1")
document.body.append(h1)
h1.textContent = "welcom to my JS site"

var p = document.createElement("p")
document.body.append(p)
p.textContent = "All of this was created by javaScript"

var ol = document.createElement("ol")
document.body.append(ol)

var li = document.createElement("li")
li.textContent = "Item 1"

var li = document.createElement("li")
li2.textContent = "Item2"

var li3 = document.createElementNS("li")
li3.textContent = "Item 3"
ol.append(li, li2, li3)