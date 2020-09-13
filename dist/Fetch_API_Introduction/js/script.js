// Grab output
var fileOutput = document.querySelector('#fileOutput');

// Grab button
var getFile = document.querySelector('#getFile');
var getJSON = document.querySelector('#getJSON')

// Set Listener
 getFile.addEventListener('click', extractFile);

getJSON.addEventListener('click', extractJSON);
getJSON.addEventListener('dblclick', hideContent);

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
    };
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
    };
    
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

function hideContent(){
   return (fileOutput.nextSibling.nodeName == '#text' || fileOutput.nextElementSibling.style.display == 'none')? true:false;
};