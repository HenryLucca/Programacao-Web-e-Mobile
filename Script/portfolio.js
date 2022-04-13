// //https://api.github.com/users/henrylucca
const url = "https://api.github.com/users/HenryLucca/repos";
let repos = [];

const listaRepos = document.getElementById("repos");

function gerarListaRepos() {
    listaRepos.innerHTML = "";
    for (let i = 0; i < repos.length; ++i) {
        // listaFetch.innerHTML += `<li>${i}</li>`;
        const li = document.createElement("li");
        li.classList.add("repos-item");
        console.log(repos[i].language);
        if (repos[i].description == null) {
            repos[i].description = "Sem descrição";
        }
        if (repos[i].language == null) {
            repos[i].language = "Sem linguagem definida";
        }

        li.innerHTML =
            `
            <h2>${repos[i].name}</h2>
            <p>${repos[i].description}</p>
            <p>${repos[i].language}</p>
            <p>⭐ ${repos[i].stargazers_count}</p>
          `;
        li.onclick = (event) => {
            window.open(repos[i].html_url);
        }
        listaRepos.appendChild(li);
    }
}

// const fetchRepos = async () => {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
//     repos = data;
//     gerarListaRepos();
//   } catch (error) {
//     console.log("error", error);
//   }
// };

const fetchRepos = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      repos = data;
      console.log(repos);
      gerarListaRepos();
    });
};

fetchRepos();