// Consumir API de armas

const urlArmas = "https://valorant-api.com/v1/weapons";
let armas = [];

const imagem = document.getElementById("weapon");
const listaArma = document.getElementById("listaArma");


function gerarListaArmas() {

  console.log(armas);
  listaArma.innerHTML = "";

  for (let i = 0; i < armas.length; ++i) {
      // listaFetch.innerHTML += `<li>${i}</li>`;
      const qtdSkins = armas[i].skins.length;
      console.log(qtdSkins);
      const li = document.createElement("li");

      li.classList.add("armas-item");

      li.innerHTML =
          `
          <h2 class="weapon-info" "weapon-title">${armas[i].displayName}</h2>
          <img id="weapon-image" src="${armas[i].displayIcon}" > </img>
          <p class="weapon-info" id="weapon-cost"> Custo : ${armas[i].shopData.cost}</p>
          <p class="weapon-info" id="qtd-skins" >Quantidade de skins : ${qtdSkins}</p>
          <p class="weapon-info" id="weapon-category"> Categoria : ${armas[i].shopData.category}</p>
          <p class="weapon-info" id="weapon-magazine"> Tamanho do pente : ${armas[i].weaponStats.magazineSize}</p>
        `;

      // li.onclick = (event) => {
      //     window.open(armas[i].html_url);
      // }
      listaArma.appendChild(li);
  }
}

// const exibirInformaçãoDeArma = () =>{
//     console.log(armas);

//     imagem.src = armas[2].displayIcon;
// }

const fetchArmas = () => {
    fetch(urlArmas)
      .then((res) => 
      res.json())
      .then((data) => {
        armas = data.data;
        console.log(armas);
        gerarListaArmas();
      }
     );
};



function voltarPagina(){
    window.history.back();
}

fetchArmas();