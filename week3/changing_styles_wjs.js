function farquad (){
    for ( i = 0; i < 5; i++){
        const h1 = document.createElement("h1")
        h1.className = "border"
        h1.textContent = "Fairy Tale Ending"
        h1.style.fontSize ="20px"
        h1.style.fontWeight = "lighter"
        h1.style.fontFamily = "sans-serif"
        h1.style.color = "cornflowerblue"
        document.body.append(h1)
    }
}
farquad()