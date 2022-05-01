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
        const li = document.createElement("li");

        li.innerHTML =
            `
              <h2 class="agent-info" "agent-title">${agents[i].displayName}</h2>
              <img id="agent-image" src="${agents[i].displayIcon}" > </img>
              <
            `;


        li.onclick = (event) => window.location.href = `./skins.html?id=${i}`;

        listaAgents.appendChild(li);
    }
}

function voltarPagina() {
    window.history.back();
}


fetchAgent();

