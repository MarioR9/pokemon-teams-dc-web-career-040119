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
    
    let pokes = []
    let main = document.querySelector("main")
        let trainerDiv = document.createElement("div")
            trainerDiv.className = "card"
            trainerDiv.dataset.id = trainer.id        
            let name = document.createElement("p")
                let button = document.createElement("button")
                    button.dataset.TrainerId = trainer.id  
                    let ul = document.createElement("ul")
            name.innerText = trainer.name
            button.innerText = "catch a pokemon"
            //iteration over pokemons to get name,species and assing pokemon id to each pokemon
           trainer.pokemons.forEach(pokemon =>{
                            li = document.createElement('li') //creating a new li for every pokemon
                            li.innerText = `${pokemon.nickname} (${pokemon.species})` //text for every li --pokemon description
                            ul.appendChild(li)  //attaching to li to ul for trainer
                            liBtn = document.createElement('button') //creating a new button for every li 
                            liBtn.className = 'release'//setting up a class name for every  button
                            li.appendChild(liBtn) //attaching to li
                            liBtn.innerText = "Release"}) //texet for button    
            main.append(trainerDiv)
            trainerDiv.append(name,button,ul)
    }   

    function addNewPokemon(){

        fetch
    }