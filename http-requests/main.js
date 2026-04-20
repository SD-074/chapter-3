// with postman:
const body = document.body;

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

  async function showUsers() {



    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    console.log(users);
    

    users.forEach(element => {
        const UserDiv = document.createElement('div')
        UserDiv.innerText = element.name
        body.appendChild(UserDiv)
        
    });

    
  }