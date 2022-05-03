const urlAgent = "https://valorant-api.com/v1/agents";
let agents = [];

const fetchAgent = () => {
    fetch(urlAgent)
        .then((res) =>
            res.json())
        .then((data) => {
            agents = data.data;
            console.log(agents);
            removeDuplicate();
        }
        );
};

const removeDuplicate = () => {
    agents.map(agent => {
        if (agent.isPlayableCharacter == false) {
            agents.splice(agents.indexOf(agent), 1);
        }
    });
    gerarListaAgentes();
}


const gerarListaAgentes = () => {

    const listaAgents = document.getElementById("listaAgents");

    console.log(agents);
    listaAgents.innerHTML = "";
   
    
    for (let i = 0; i < agents.length; ++i) {
        // listaFetch.innerHTML += `<li>${i}</li>`;
        let nome = "agente";
        let classe = nome+i;
  
        const li = document.createElement("li");
        li.classList.add("style-box");
        li.classList.add(classe);
   
        li.innerHTML =
            ` 
              <h2 class="agent-info" id="agent-title">${agents[i].displayName}</h2>
              <img id="agent-image" src="${agents[i].displayIcon}" > </img>
              <div class="abilities">                                                     
                    <img  class="abilities1" src="${agents[i].abilities[0].displayIcon}" > </img>
                    <img  class="abilities1" src="${agents[i].abilities[1].displayIcon}" > </img>   
                    <img  class="abilities1" src="${agents[i].abilities[2].displayIcon}" > </img>   
                    <img  class="abilities1" src="${agents[i].abilities[3].displayIcon}" > </img>    
              </div>
              <p class="agent-info" id="agent-info">${agents[i].description}</p>
              <img  class="abilities1" src="${agents[i].role.displayIcon}" > </img> 
              <p class="agent-info" >${agents[i].role.displayName}</p>
            `;

        listaAgents.appendChild(li);
    }
}

function voltarPagina() {
    window.history.back();
}


fetchAgent();

