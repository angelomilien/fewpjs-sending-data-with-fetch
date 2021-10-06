// Add your code here

function submitData(userName, userEmail) {

    let formData = {
        name: `${userName}`,
        email: `${userEmail}`
    };

    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (object) {
            // document.body.innerHTML = object["id"]
            console.log(object)
        })
        .catch(function (error) {
            document.body.innerHTML = error.message
        })
}