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
    let main = document.querySelector("main")
        let trainerDiv = document.createElement("div")
            trainerDiv.className = "card"
            trainerDiv.dataset.id = trainer.id        
            let name = document.createElement("p")
            let ul = document.createElement("ul")
                ul.id = trainer.id
                let button = document.createElement("button")
                    button.dataset.TrainerId = trainer.id  
                    button.addEventListener('click',function(){
                   
                    addPokemon(trainer.id)
                    
                })
            name.innerText = trainer.name
            button.innerText = "catch a pokemon"
            //iteration over pokemons to get name,species and assing pokemon id to each pokemon
            trainer.pokemons.forEach(pokemon =>{
                
                li = document.createElement('li') //creating a new li for every pokemon
                li.innerText = `${pokemon.nickname} (${pokemon.species})` //text for every li --pokemon description
                ul.appendChild(li)  //attaching to li to ul for trainer
                liBtn = document.createElement('button') //creating a new button for every li 
                li.id = pokemon.id
                liBtn.addEventListener("click",function(){
                    releasePokemon(pokemon.id)
                })
                liBtn.className = 'release'//setting up a class name for every  button
                li.appendChild(liBtn) //attaching to li
                liBtn.innerText = "Release"
                
                }) //texet for button 
                
            main.append(trainerDiv)
            trainerDiv.append(name,button,ul)
            
    }   
   

   function addPokemon(e){
        let int = parseInt(e)
    
       fetch("http://localhost:3000/pokemons",{ 
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            trainer_id: parseInt(int)
            })
        })
        .then(response=>response.json())
        .then(newPokemon => addPoke(newPokemon) )
       
   }

   function releasePokemon(e){
        let int = parseInt(e)
        // console.log("deleted" +" " + int)
    fetch(`http://localhost:3000/pokemons/${parseInt(int)}`,{method: "DELETE"})
    .then(response=>response.json())
    .then(releasePokemon => {document.getElementById(`${releasePokemon.id}`).remove()})
   
    }
    

    function addPoke(pokemon){
               
        let ul = document.getElementById(`${pokemon.trainer_id}`)    
        //iteration over pokemons to get name,species and assing pokemon id to each pokemon 
                li = document.createElement('li') //creating a new li for every pokemon
                li.innerText = `${pokemon.nickname} (${pokemon.species})` //text for every li --pokemon description
                ul.appendChild(li)  //attaching to li to ul for trainer
                liBtn = document.createElement('button') //creating a new button for every li 
                li.id = pokemon.id
                liBtn.addEventListener("click",function(){
                    releasePokemon(pokemon.id)
                })
                liBtn.className = 'release'//setting up a class name for every  button
                li.appendChild(liBtn) //attaching to li
                liBtn.innerText = "Release"
                
                 //texet for button
    }

    function removePoke(pokemon){ 
        document.getElementById(`${pokemon.id}`).remove()  
        //iteration over pokemons to get name,species and assing pokemon id to each pokemon 
               
    }