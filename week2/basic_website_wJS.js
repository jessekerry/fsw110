var h1 = document.createElement("h1")
document.body.append(h1)
h1.textContent = "I love coding"

var p = document.createElement("P")
document.body.append(p)
p.textContent = "Unicorns are amazing"

var ol = document.createElement("ol")
document.body.append(ol)

var li = document.createElement("li")
li.textContent ="first list item"

var li2 = document.createElement("li")
li2.textContent = "second list item"

var li3 = document.createElement("li")
li3.textContent="third list item"
ol.append(li, li2, li3)

var footer = document.createElement("footer")
document.body.append(footer)
footer.textContent = "the footer goes at the bottom"
