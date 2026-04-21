// const form = document.getElementById("form")
// form.addEventListener("submit", submitHandler)

// function submitHandler (e){
//     e.preventDefault()

//     alert(e.target.userInput.value);

// }

// localStorage.

// const container = document.getElementById("todoContainer")
// const form = document.getElementById("form")
// form.addEventListener("submit", submitHandler)

// function submitHandler (e){
//     e.preventDefault()

//   const btn = document.createElement("button")
//   btn.innerText = e.target.userInput.value
//   container.appendChild(btn)

// }

let todos = localStorage.getItem("todos")
if(todos){
    todos = JSON.parse(todos)
    

} else {
    todos = []
}
console.log(todos);


const container = document.getElementById("todoContainer");
const form = document.getElementById("form");
form.addEventListener("submit", submitHandler);

function submitHandler(e) {
  e.preventDefault();
  const v = e.target.userInput.value;

  todos.push(v)
  console.log(todos);

  localStorage.setItem("todos", JSON.stringify(todos))
  e.target.userInput.value = ""

renderLStodos()
  
}


// function renderTodos (arr){
//     container.innerHTML = ""
//     arr.forEach(ele => {
//           const div = document.createElement("div")
//   div.innerText = ele
//   container.appendChild(div)

//     })
// } 



function renderLStodos (){
    const lsData = localStorage.getItem("todos")
const processed = JSON.parse(lsData)


    container.innerHTML = ""
    processed.forEach(ele => {
          const div = document.createElement("div")
  div.innerText = ele
  container.appendChild(div)

    })
} 


renderLStodos()



console.log(localStorage.length)
console.log(localStorage.key(1));
localStorage.clear()