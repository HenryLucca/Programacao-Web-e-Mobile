const urlArmas = "https://valorant-api.com/v1/weapons";
var armas = [];

function fetchArmas() {
    fetch(urlArmas)
        .then((res) =>
            res.json())
        .then((data) => {
            armas = data.data;
            console.log(armas[12]);
            mostrarSkins();
        }
        );
};

fetchArmas();

function mostrarSkins() {

    console.log(window.location.search);

    const id = window.location.search.split("=")[1];
    console.log(id);
    console.log(armas[id]);
    const arma = armas[id];

    const listaSkin = document.getElementById("listaSkin");
    
    listaSkin.innerHTML = "";

    for (let i = 0; i < arma.skins.length; ++i) {
       
        const li = document.createElement("li");
        li.classList.add("weapon-card");
        arma.skins[i].displayIcon == null ? arma.skins[i].displayIcon = "../assets/defaultIcon.png" : arma.skins[i].displayIcon;
      
        

        if (arma.skins[i].displayName.includes("Standard")) {
            li.innerHTML =
                `
                <h2 class="skin-info" id="skin-name">${arma.skins[i].displayName}</h2>
                <img id="skin-image" src="${arma.displayIcon}" > </img>
              `;
        } else {
            li.innerHTML =
                `
                <h2 class="skin-info" id="skin-name">${arma.skins[i].displayName}</h2>
                <img id="skin-image" src="${arma.skins[i].displayIcon}" > </img>
              `;

        }
       
        listaSkin.appendChild(li);
    }
}

function renderSkin(skin){

}

function voltarPagina() {
    console.log("Voltar");
    window.history.back();
}
