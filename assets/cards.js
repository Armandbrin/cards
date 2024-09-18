let data = []
let opposant = document.getElementById("opposant")
let joueur = document.getElementById("joueur")
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

        for (let i = 0; i < 5; i++) {
            let hasard = Math.floor(Math.random() * data.length)
            let cartes_opposant = document.createElement("img")
            cartes_opposant.classList.add("zoom_opponant")
            cartes_opposant.src = data[hasard].image_url
            if (cartes_opposant.src == "https://127.0.0.1:8000/null") {
                let hasard3 = Math.floor(hasard + 3)
                cartes_opposant.src = data[hasard3].image_url
                opposant.appendChild(cartes_opposant)
            } else {
                opposant.appendChild(cartes_opposant)
            }

        }

        for (let i = 0; i < 5; i++) {
            let hasard = Math.floor(Math.random() * data.length)
            let cartes_joueur = document.createElement("img")
            cartes_joueur.classList.add("zoom_joueur")
            cartes_joueur.src = data[hasard].image_url
            if (cartes_joueur.src == "https://127.0.0.1:8000/null") {
                let hasard3 = Math.floor(hasard + 3)
                cartes_joueur.src = data[hasard3].image_url
                joueur.appendChild(cartes_joueur)
            } else {
                joueur.appendChild(cartes_joueur)
            }

        }


    })
    .catch(error => console.log(error))