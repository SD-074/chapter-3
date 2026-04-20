console.log(1);

function getDataWithFetch (){
console.log(2);

    fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((i) => {
    console.log(3);
    console.log(i);
    
   
    
    
    return i.json()})
  .then((i) => {
    console.log(4);
    
    console.log(i)})
  .catch((e) => console.log(e));
}
console.log(5);


getDataWithFetch()
console.log(6);




// async function getDataWithAsync (){
    


//    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
   
//    console.log(res);
   
// //    const data = await res.json()
// //    console.log(data);

   
   
 
// }




// getDataWithAsync()



