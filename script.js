function fetchPokemon(pokeID) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeID}/`;

  fetch(url)
    .then((data) => {
      //   console.log(data);
      return data.json();
    })
    .then((objData) => {
      const pokemon = document.getElementById("pokemonInfo");
      pokemon.innerHTML = `
      
        <div class="column">
        <div
        class="card"
        style="width: 18rem"
       
      >
        <img src="${
          objData.sprites.front_default
        }" class="card-img-top" alt="..." style="width: 200px; margin-left: 20px;
        " />
        <div class="card-body">
          <h3 class="card-title">${objData.name.toUpperCase()}</h3>
          <h5 class="card-text">Height: ${objData.height} m</h5>
          <h5>Weight: ${objData.weight / 10} kg</h5>
  
        </div>
      </div>
        </div>
        `;
    })
    .catch((error) => {
      console.log(error);
    });
}
let x = Math.random() * 100 + 1;
//console.log(Math.floor(x));
fetchPokemon(Math.floor(x));
