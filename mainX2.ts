const matsedill = JSON.parse(matsedillJSON);

const rettirEl = document.querySelector("#rettir");
const hnappar = document.querySelector(".hnappar");

let valinnFlokkur = "Allt";

function renderMatsedill(){

    rettirEl.innerHTML = "";

    let synilegt = [...matsedill];

    if(valinnFlokkur !== "Allt"){
        synilegt = synilegt.filter((r) => r.flokkur === valinnFlokkur);
    }



    for(const rettur of synilegt) {
        const li = document.createElement("li");
        li.className = "rettur";
        li.innerHTML =`<div>
        <h3>${rettur.nafn} ${rettur.vegan ? "VEGAN" : ""}</h3>
        <p>${rettur.lysing}</p>
        </div>`;
        rettirEl.appendChild(li);
    }
};

hnappar.addEventListener("click", (e) => {
    const hnappur = e.target.closest("button");

    if(!hnappur) return;

    valinnFlokkur = hnappur.dataset.flokkur;

    renderMatsedill();
})



renderMatsedill();

async function fyrstaFetch() {

   const response = await fetch("https://dummyjson.com/recipes/1");
   const uppskrift = await response.json();

   console.log(uppskrift);
   console.log(uppskrift.name);

}
fyrstaFetch();