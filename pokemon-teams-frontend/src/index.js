const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", function(){
    fetchTrainersData()
})

function fetchTrainersData(){
fetch('http://localhost:3000/trainers')
.then(response => response.json())
.then(trainersData => trainersData.forEach(addTrainerToDom))    
}

//main will create more divs as need it

function addTrainerToDom(trainer){
    console.log
    let main = document.querySelector("main")
        let trainerDiv = document.createElement("div")
            trainerDiv.className = "card"
            trainerDiv.dataset.id = trainer.id        
            let name = document.createElement("p")
                let button = document.createElement("button")
                    button.dataset.TrainerId = trainer.id  
                    let ul = document.createElement("ul")
                        let li = document.createElement('li')
                            let liBtn = document.createElement('button')
                                liBtn.className = 'release'
                                
                        
                            

            name.innerText = trainer.name
            button.innerText = "catch a pokemon"
            //iteration over pokemons to get name,species and assing pokemon id to each pokemon
           trainer.pokemons.forEach(pokemon =>
                            li.innerText = `${pokemon.nickname} (${pokemon.species})`,
                            ul.appendChild(li),  
                            liBtn.innerText = "Release")
                                
                                
            main.append(trainerDiv)
            trainerDiv.append(name,button,ul)
            
            li.appendChild(liBtn)



    }   