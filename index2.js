const fs = require('fs');
const fetch = require ('node-fetch');

let url = fetch('http://jsonplaceholder.typicode.com/posts')
.then(response => response.text())
.then(data => {
    fs.mkdir('result', err => {
        if (err){
            console.log("Error, directory exists.")
        }
    })
    fs.writeFile('result/post.text',data, err => {
        console.log("Data written successfully.")
    })
})
