const btn = document.querySelector("#btn")
const res = document.querySelector(".res")

function garcom() {
    let ramdom = Math.floor(Math.random() * 1026)
    let api = fetch(`https://pokeapi.co/api/v2/pokemon/${ramdom}`)
    .then((res) => res.json())
    .then((data) => {
     gerarPokemon(data)
    })
}

function gerarPokemon(data) {
    let nome = data.name
    let id = data.id
    let tipo = data.types[0].type.name
    let img = data.sprites.other.dream_world.front_default

   
   
    res.innerHTML = `<div class="card">
        <img src="${img}" alt="">
        <div class="container">
            <div class="title">
                <h1>${nome}</h1>
                <p>nº ${id}</p>
            </div>
            <p id="Poison">${tipo}</p>
        </div>
    </div>`
}

btn.addEventListener("click" ,  garcom)