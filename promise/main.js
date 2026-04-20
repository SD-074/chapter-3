
console.log(1);



fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((i) => {
    console.log(2);
    
    return i.json()})
  .then((i) => {
    console.log(3);
    
    console.log(i)})
  .catch((e) => console.log(e));


console.log(4);


// const p = new Promise((resolve, reject)=>{


//     let result = false;

//     if (result){
//         resolve("it worked!")
//     } else {
//         reject("it's not working")
//     }
// })


// const promisedBeer = new Promise((resolve, reject) => {
//   // Let's have a random value determining if you get your beer
// //   const isThereBeerAvailable = Math.random() > 0.5 ? true : false;
//   const isThereBeerAvailable = false;
//   if (isThereBeerAvailable) {
//     resolve('Take your beer');
//   } else {
//     reject('Sorry, no beer for you');
//   }
// });

// // Right click on the preview and click reload, the promise should randomly reject or fulfill
// promisedBeer.then((value) => console.log(value));





