// Consumir API de armas

const urlArmas = "https://valorant-api.com/v1/weapons";
let armas = [];

var selectedWeapon;

const gerarListaArmas = () => {

  const imagem = document.getElementById("weapon");
  const listaArma = document.getElementById("listaArma");
  
  console.log(armas);
  listaArma.innerHTML = "";

  for (let i = 0; i < armas.length; ++i) {
      // listaFetch.innerHTML += `<li>${i}</li>`;
      let arma = "arma";
      let classe = arma+i;
    
      const qtdSkins = armas[i].skins.length;
      console.log(qtdSkins);
      const li = document.createElement("li");
      li.classList.add("weapon-card");
      li.classList.add(classe);
     

    
      // Faca
      if(i == armas.length-1){
        li.innerHTML =
          `
          <h2 class="arma-info" id="arma-name">${armas[i].displayName}</h2>
          <img id="arma-image" src="${armas[i].displayIcon}" > </img>
          <p class="weapon-info" id="qtd-skins" >Quantidade de skins : ${qtdSkins}</p>
        `;
        
      }
      // Caso Geral 
      else {
        li.innerHTML =
            `
        
            <h2 class="weapon-info" id="weapon-title">${armas[i].displayName}</h2>
            <img id="weapon-image" src="${armas[i].displayIcon}" > </img>
            
           
            <p class="weapon-info" id="weapon-cost"> Custo : ${armas[i].shopData.cost}</p>
            <p class="weapon-info" id="qtd-skins" >Quantidade de skins : ${qtdSkins}</p>
            <p class="weapon-info" id="weapon-category"> Categoria : ${armas[i].shopData.category}</p>
            <p class="weapon-info" id="weapon-magazine"> Tamanho do pente : ${armas[i].weaponStats.magazineSize}</p>
          
          `;
      }


      li.onclick = (event) => window.location.href = `./skins.html?id=${i}`;

      listaArma.appendChild(li);
  }
}

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

