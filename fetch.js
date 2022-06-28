// Selecting page elements.
// This script is linked to the index.html file. You will need to open this when checking your code.


// 1. Create a fetch GET method: create a function called getData using the following url (https://reqres.in/api/users?page=2)


const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const getData = () => {
    fetch("https://reqres.in/api/users?page=2")
        .then(
            response => {
                // console log response, its a Response Object
                if (response.ok) {
                    // takes response's body and makes it into js object, returns promise
                    return response.json();
                } else {
                    // if reaches server but response back is not ok
                    throw new Error("Request failed!");
                }
            },
            // network error if fetch rejects: can't reach server at all (e.g url incorrect)
            networkError => {
                console.log(networkError.message);
            }
        )
        .then(jsonResponse => {
            console.log(jsonResponse);
            return jsonResponse;
        });
};

// Buttons eventListeners
getBtn.addEventListener("click", getData);


// 2. Create a fetch SET method: create a function called sendData using the following url (https://reqres.in/api/users?page=2)

const sendData = () => {
    fetch("https://reqres.in/api/register", {
        method: "POST",
        // lets server know the body is the form of json
        headers: {
            "Content-type": "application/json",
        },
        // data we send to the server. will be different depending on the data.
        body: JSON.stringify({ email: "eve.holt@reqres.in", password: "pistol" }),
    })
        .then(
            response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Request failed!");
            },
            networkError => {
                console.log(networkError.message);
            }
        )
        .then(jsonResponse => {
            console.log(jsonResponse);
            return jsonResponse;
        });
};


postBtn.addEventListener("click", sendData);

