let data = []
let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3")
let card4 = document.getElementById("card4")
let card5 = document.getElementById("card5")
let card6 = document.getElementById("card6")
let card7 = document.getElementById("card7")
let card8 = document.getElementById("card8")
let card9 = document.getElementById("card9")
let card10 = document.getElementById("card10")
fetch("./card.json", {
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(reponse => reponse.json())
    .then(rep => {
        for (let i = 0; i < rep.length; i++) {
            data.push({
                name: rep[i].name,
                pitch: rep[i].pitch,
                cost: rep[i].cost,
                power: rep[i].power,
                defense: rep[i].defense,
                health: rep[i].health,
                image_url: rep[i].printings[0].image_url,
            })
        }
        let test = Math.floor(Math.random() * data.length)
        card1.src = data[test].image_url
        test = Math.floor(Math.random() * data.length)
        card2.src = data[test].image_url
        test = Math.floor(Math.random() * data.length)
        card3.src = data[test].image_url
        test = Math.floor(Math.random() * data.length)
        card4.src = data[test].image_url
        test = Math.floor(Math.random() * data.length)
        card5.src = data[test].image_url
        test = Math.floor(Math.random() * data.length)
        card6.src = data[test].image_url
        test = Math.floor(Math.random() * data.length)
        card7.src = data[test].image_url
        test = Math.floor(Math.random() * data.length)
        card8.src = data[test].image_url
        test = Math.floor(Math.random() * data.length)
        card9.src = data[test].image_url
        test = Math.floor(Math.random() * data.length)
        card10.src = data[test].image_url
    })
