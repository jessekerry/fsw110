function addListItem() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("newItem").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("newItem").value = "";
  }