// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// };

// // method: "POST" is missing from the object below
// let configObj = {
//     method: "POST"
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// };
  
// fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(object) {
//         console.log(object);
//     })
//     .catch(function(error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
// }); 

function submitData(username, email) {
    let url = "http://localhost:3000/users"
    let object = {
        name: username,
        email: email
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify(object)
    };

    return fetch(url, configObj)
        .then(res => res.json())
        .then(function(object) {
            console.log(object.id)
            document.body.innerHTML = object.id
        })
        .catch(function(error) {
            alert("Unauthorized Access");
            document.body.innerHTML = error.message
        })
}
