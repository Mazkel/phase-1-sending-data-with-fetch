function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
        },
        body : JSON.stringify({
            name : name,
            email : email
            })
        })
        .then (res => res.json())
        .then(data => {
            const p = document.createElement('p');
            p.textContent = `User ID: ${data.id}`;
            document.body.appendChild(p)
            })
            .catch(error => {
                const errorMsg = document.createElement('p')
                errorMsg.textContent = error.message
                document.body.appendChild(errorMsg)
        });
        
    }

