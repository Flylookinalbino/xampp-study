// Grab output
var fileOutput = document.querySelector('#fileOutput');
// var form = document.querySelector('#form');
var sqlFrom = document.querySelector('#sqlForm');

// Grab button
var getFile = document.querySelector('#getFile');
var getJSON = document.querySelector('#getJSON');
var getEXJSON = document.querySelector('#getEXJSON');
var getEXDB = document.querySelector('#getEXDB');
var getEXFetchDB = document.querySelector('#getEXFetchDB');

// Set Listener
getFile.addEventListener('click', extractFile);
getJSON.addEventListener('click', extractJSON);
getEXJSON.addEventListener('click', extractJSONAPI);
getEXDB.addEventListener('click', extractDB);
// form.addEventListener('submit', addJSON);
sqlFrom.addEventListener('submit', postSQL);
getEXFetchDB.addEventListener('click', extractFetchDB);

// extractFile Function
function extractFile() {
    // Basic Fetching data
    // fetch('./sample.txt')
    // .then(function(res){
    //     return res.text();
    // })
    // .then(function(data){
    //     console.log(data);
    // });

    // Cleaner way to Fetch data
    // fetch('./sample.txt')
    //     .then((res) => res.text())
    //     .then((data) => {
    //         textOutput(data);
    //         // Logging status
    //         console.log("Data fetched from txt file....");
    //     })
    //     .catch((err) => console.log(err));
    if(hideContent()){
        fetch('./sample.txt')
        .then((res) => res.text())
        .then((data) => {
            textOutput(data);
            // Logging status
            console.log("Data fetched from txt file....");
        })
        .catch((err) => console.log(err));
    }else{
        fileOutput.nextElementSibling.style.display = 'none';
        fileOutput.innerHTML = 'OutPut';
    }
};

// extractJSON function
function extractJSON() {
    if(hideContent()){
        fetch('./json/users.json')
        .then((res) => res.json())
        .then((data) => {
            jsonOutput(data);
            console.log("Data fetched from json file....");
        })
        .catch((err) => console.log(err));
    }else{
        fileOutput.nextElementSibling.style.display = 'none';
        console.log(fileOutput.nextElementSibling);
        fileOutput.innerHTML = 'OutPut';
    }
};

// extractJSONAPI
function extractJSONAPI(){
    if(hideContent()){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data)=>{
            jsonAPIOutput(data);
            console.log('Data fetched from JSON API....');
        });
    }else{
        fileOutput.nextElementSibling.style.display = 'none';
        console.log(fileOutput.nextElementSibling);
        fileOutput.innerHTML = 'OutPut';
    }
};

// extractMYSQL
function extractDB(){
    if(hideContent()){
        fetch('./php/server.php')
        .then((res) => res.json())
        .then((data) => {
            dbOutput(data);
        })
        .catch((error) => console.log(error));
    }else{
        fileOutput.nextElementSibling.style.display = 'none';
        console.log(fileOutput.nextElementSibling);
        fileOutput.innerHTML = 'OutPut';
    }
   
};

// extractFetchDB
function extractFetchDB() {
    if(hideContent()){
        fetch('./php/get.php')
        .then(res => res.json())
        .then(data => fetch_DBOutput(data))
        .catch(error => console.log(error));
    }else{
        fileOutput.nextElementSibling.style.display = 'none';
        console.log(fileOutput.nextElementSibling);
        fileOutput.innerHTML = 'OutPut';
    }
}

// POST REQUEST
function addJSON(e){
    e.preventDefault();
    // GET Input Values
    let title = document.querySelector('#title').value;
    let body = document.querySelector('#body').value;
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data));

    console.log(title.value);
    console.log(body.value);
};

function postSQL(e) {
    e.preventDefault();
    // var title = document.querySelector('#title').value;
    // var body = document.querySelector('#body').value;
    
    const data = new URLSearchParams();
    for(const p of new FormData(sqlFrom)){
        data.append(p[0], p[1]);
    }
    fetch('./php/post.php',{
        method: 'POST',
        body: data
    })
    .then(res => res.text())
    .then(data => {
        console.log(data);
    }).catch(error => console.log(error));
};

// Output Function
function textOutput(data) {
    // Create Element
    let output = document.createElement('p');
    // Add Class to New Element
    output.className = "m-2 p-5 text-justify";
    // Add File Data
    output.innerHTML = data;
    // Insert Element after Text Output h1
    fileOutput.insertAdjacentElement('afterend', output);
    fileOutput.innerHTML = "TEXT FILE OUTPUT";
};

function jsonOutput(data) {
    // Create Element
    let output = document.createElement('div');
    // Add Class to New Element
    output.className = "";
    // Add File Data
    data.forEach((user) => {
        output.innerHTML +=
        `<div class="grid grid-cols-12 bg-white">
            <h1 class="col-start-4 col-span-3 border rounded p-1">ID:</h1>
            <span class="col-span-3 border rounded p-1">${user.id}</span>
        </div>
        <div class="grid grid-cols-12 bg-white">
            <h1 class="col-start-4 col-span-3 border rounded p-1">Name:</h1>
            <span class="col-span-3 border rounded p-1">${user.name}</span>
        </div>
        <div class="grid grid-cols-12 bg-white">
            <h1 class="col-start-4 col-span-3 border rounded shadow-xl p-1">Email:</h1>
            <span class="col-span-3 border rounded shadow-xl p-1">${user.email}</span>
        </div>
        <br>`;
    });
    
    // Insert Element after Text Output h1
    fileOutput.insertAdjacentElement('afterend', output);
    fileOutput.innerHTML = "JSON FILE OUTPUT";
};

function jsonAPIOutput(data) {
    // Create Element
    let output = document.createElement('div');
    // Add Class to New Element
    output.className = "";
    // Add File Data
    data.forEach((user) => {
        output.innerHTML +=
        `<div class="grid grid-cols-12 bg-white">
            <h1 class="col-start-4 col-span-3 border rounded-tl-lg p-1 font-mono">Post ID:</h1>
            <span class="col-span-3 border rounded-tr-lg p-1">${user.id}</span>
        </div>
        <div class="grid grid-cols-12 bg-white">
            <h1 class="col-start-4 col-span-3 border p-1 font-mono">Title:</h1>
            <span class="col-span-3 border p-1">${user.title}</span>
        </div>
        <div class="grid grid-cols-12 bg-white">
            <h1 class="col-start-4 col-span-3 border rounded-bl-lg shadow-xl p-1 font-mono">Body:</h1>
            <span class="col-span-3 border rounded-br-lg shadow-xl p-1">${user.body}</span>
        </div>
        <br><br>`;
    });
     // Insert Element after Text Output h1
     fileOutput.insertAdjacentElement('afterend', output);
     fileOutput.innerHTML = "JSON FILE OUTPUT";
};

function dbOutput(data){
    // Create Element
    let output = document.createElement('div');
    // Add Class to New Element
    output.className = "";
    // Add File Data
    data.forEach((post) => {
        output.innerHTML +=
        `<div class="grid grid-cols-12 bg-white">
            <h1 class="col-start-4 col-span-3 border rounded-tl-lg p-1 font-mono">Post ID:</h1>
            <span class="col-span-3 border rounded-tr-lg p-1">${post.id}</span>
        </div>
        <div class="grid grid-cols-12 bg-white">
            <h1 class="col-start-4 col-span-3 border p-1 font-mono">User ID:</h1>
            <span class="col-span-3 border p-1">${post.user_id}</span>
        </div>
        <div class="grid grid-cols-12 bg-white">
            <h1 class="col-start-4 col-span-3 border p-1 font-mono">Title:</h1>
            <span class="col-span-3 border p-1">${post.title}</span>
        </div>
        <div class="grid grid-cols-12 bg-white">
            <h1 class="col-start-4 col-span-3 border p-1 font-mono">Body:</h1>
            <span class="col-span-3 border p-1">${post.body}</span>
        </div>
        <div class="grid grid-cols-12 bg-white">
            <h1 class="col-start-4 col-span-3 border rounded-bl-lg shadow-xl p-1 font-mono">Publish Date & Time:</h1>
            <span class="col-span-3 border rounded-br-lg shadow-xl p-1">${post.publish_date}</span>
        </div>
        <br><br>`;
    });
    
    // Insert Element after Text Output h1
    fileOutput.insertAdjacentElement('afterend', output);
    fileOutput.innerHTML = "JSON FILE OUTPUT";
};

function fetch_DBOutput(data){
    // Create Element
    let output = document.createElement('div');
    // Add Class to New Element
    output.className = "";
    // Add File Data
    data.forEach((post) => {
        output.innerHTML +=
        `<div class="grid grid-cols-12 bg-white">
            <h1 class="col-start-4 col-span-3 border rounded-tl-lg p-1 font-mono">Post ID:</h1>
            <span class="col-span-3 border rounded-tr-lg p-1">${post.id}</span>
        </div>
        <div class="grid grid-cols-12 bg-white">
            <h1 class="col-start-4 col-span-3 border p-1 font-mono">Titile:</h1>
            <span class="col-span-3 border p-1">${post.title}</span>
        </div>
        <div class="grid grid-cols-12 bg-white">
            <h1 class="col-start-4 col-span-3 border rounded-bl-lg shadow-xl p-1 font-mono">Body:</h1>
            <span class="col-span-3 border rounded-br-lg shadow-xl p-1">${post.body}</span>
        </div>
        <br><br>`;
    });
    
    // Insert Element after Text Output h1
    fileOutput.insertAdjacentElement('afterend', output);
    fileOutput.innerHTML = "JSON FILE OUTPUT";
};

function hideContent(){
   return (fileOutput.nextSibling.nodeName == '#text' || fileOutput.nextElementSibling.style.display == 'none')? true:false;
}