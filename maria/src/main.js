import a from 'axios'
async function fetchWithAxios() {
const res = await a("https://jsonplaceholder.typicode.com/todos/1")
console.log(res.data);

    
}

fetchWithAxios()