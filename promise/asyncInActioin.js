console.log("before var");

let pokemons;
const body = document.body;
console.log("after var");

// pending
// fullfilled
// rejected
fetch("https://pokeapi.co/api/v2/pokemon")
  .then((d) => d.json())
  .then((i) => {
    i.results.forEach((ele) => {
      let btn = document.createElement("button");
      btn.innerText = ele.name;
      body.appendChild(btn);
    });
  })
  .catch((i) => console.log(i));

console.log("after fetch");

console.log(pokemons);

async function getData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await res.json();
  data.results.forEach((ele) => {
    let btn = document.createElement("button");
    btn.innerText = ele.name;
    body.appendChild(btn);
  });
}
