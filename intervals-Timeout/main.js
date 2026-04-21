const greetingElement = document.getElementById("greetingElement")
// greetingElement.style.display = "none"

// setTimeout(()=>{
//     console.log("hi");
// greetingElement.style.display = "block"


    
// }, 3000)

// setTimeout(()=>{
//     console.log("hi");
// greetingElement.style.display = "none"


    
// }, 9000)


const annoying = setInterval(() => {

    greetingElement.classList.toggle("invisible")
}, 3000)



setTimeout(() => clearInterval(annoying), 10000)



// timeout:
// hide greeting element after 3s

// show greeting element after 2s

// show greeting element after 3s for 6s


