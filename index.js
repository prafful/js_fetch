var todoRef = document.getElementById("todoitem")
console.log(todoRef)


// var processResponse=(response)=>{
//     console.log(response)
//     return response.json()
//  }

function extractDataFromResponse(data){
    console.log(data)
    
    console.log(data.id)
    console.log(data.userId)
    console.log(data.title)
    console.log(data.completed)

    todoRef.innerHTML=`<h1>${data.title}</h1>`
    
    
} 

function catchErrorIfAny(error){
    console.log("error");
        console.log(error)
    
}

function getApiData() {
   fetch("https://jsonplaceholder.typicode.com/todos/4") 
        .then(response=>response.json())
        .then(extractDataFromResponse)
        .catch(catchErrorIfAny)
}

var usersRef = document.getElementById("users")
console.log(usersRef);

var bodyRef = document.getElementById("tablebody")
var output = ""

function getApiUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data)
            data.forEach((user, index)=>{
                    console.log(user)
                    console.log(index)
                    console.log(user.name)
                    console.log(user.company.name)
                    console.log(user.address.geo.lat);
                    // output += `
                    //             <div>
                    //                 <h4>${user.name}</h4>
                    //                 <br>
                    //                 ${user.email}
                    //             </div>
                    //             ` 
                    output += `
                                 <tr>
                                    <td>${user.id}</td>
                                    <td>${user.name}</td>
                                    <td>${user.email}</td>
                                </tr>
                                 `
            })
            console.log(output)
            //usersRef.innerHTML=output  
            bodyRef.innerHTML = output 
            
        })
}