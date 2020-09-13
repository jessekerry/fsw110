var h1 = document.createElement("h1")
h1.textContent = "Hello World"
document.body.append(h1)
 
function tenTimes (){
    for (var i = 0; i < 10; i++){
        var h1 = document.createElement("h1")
        h1.textContent = "Hello World"
        h1.style.color = "hotPink"
        document.body.append(h1)
        console.log("Hello World")
    }
}

tenTimes()


const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]

function list (){
    for (i = 0; i < names.length; i++){
        console.log(names[i])
        var donkey =  document.createElement("p")
        donkey.textContent = names[i]
        document.body.append(donkey)
    }
}

list()





