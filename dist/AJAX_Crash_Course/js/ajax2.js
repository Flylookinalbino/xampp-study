// Get DOM Elements
const userBtn = document.querySelector('#userBtn');
const usersBtn = document.querySelector('#usersBtn');
const userHTML = document.querySelector('#user');
const usersHTML = document.querySelector('#users'); 

// LoadUser Event Listener
userBtn.addEventListener('click', loadUser);

// LoadUsers Event Listener
usersBtn.addEventListener('click', loadUsers);

// Globaly Initiated Xhr
var xhr = new XMLHttpRequest();

// Click Functions
function loadUser(){
    // Getting the file
    xhr.open('GET', './json/user.json', true);
    
    // Processing File Content
    xhr.onload = function(){
        
        // Checking if HTTP status is OK
        if(this.status == 200){
            
            // Parsing JSON to JSO and saving the object in user
            var user = JSON.parse(this.responseText);

            // Creating a div/output to hold User JSO content
            var output = document.createElement('div');

            // Adding Basic Classes to the div/output
            output.className = 'grid grid-row-3 grid-cols-12 border-t-2 border-b-2 gap-2';

            // Adding Content into that the div/output with user data from JSO
            output.innerHTML += 
                `<div class="row-span-1 col-start-4 col-span-6 grid grid-cols-4 shadow-lg mt-3 border border-gray-400">
                    <span class="col-start-1 col-span-2 border-r ml-3">ID:</span>
                    <span class="col-start-3 col-span-2 mr-3 text-center">${user.id}</span>
                </div>
                <div class="row-span-1 col-start-4 col-span-6 grid grid-cols-4 shadow-lg border border-gray-400">
                    <span class="col-start-1 col-span-2 border-r ml-3">Name:</span>
                    <span class="col-start-3 col-span-2 mr-3 text-center">${user.name}</span>
                </div>
                <div class="row-span-1 col-start-4 col-span-6 grid grid-cols-4 shadow-lg mb-3 border border-gray-400">
                    <span class="col-start-1 col-span-2 border-r ml-3">Email:</span>
                    <span class="col-start-3 col-span-2 mr-3 text-center">${user.email}</span>
                </div>`;
            
            // setting the new element to be displaed after the h1 element: textContent of => User
            userHTML.insertAdjacentElement("afterend", output);
            // For debugging          
            console.log(output);     
        };
    };

    // To send response
    xhr.send();
};

function loadUsers(){
    // Getting the file
    xhr.open('GET','./json/users.json',true);
    // Processing File Content
    xhr.onload = function () {
        // Checking if HTTP status is OK
        if(this.status == 200){
            // Parsing JSON to JSO and saving the object in user
            var users = JSON.parse(this.responseText);
            // Creating a div/output to hold User JSO content
            var output = document.createElement('div');
            // Adding Basic Classes to the div/output
            output.className = 'grid grid-row-3 grid-cols-12 border-t-2 border-b-2 gap-2';
            // RUN a loop to cycle through Users array
            users.forEach((user) => {
                // Adding Content into that the div/output with user data from JSO
                output.innerHTML += 
                `<div class="row-span-1 col-start-4 col-span-6 grid grid-cols-4 shadow-lg mt-3 border border-gray-400">
                    <span class="col-start-1 col-span-2 border-r ml-3">ID:</span>
                    <span class="col-start-3 col-span-2 mr-3 text-center">${user.id}</span>
                </div>
                <div class="row-span-1 col-start-4 col-span-6 grid grid-cols-4 shadow-lg border border-gray-400">
                    <span class="col-start-1 col-span-2 border-r ml-3">Name:</span>
                    <span class="col-start-3 col-span-2 mr-3 text-center">${user.name}</span>
                </div>
                <div class="row-span-1 col-start-4 col-span-6 grid grid-cols-4 shadow-lg mb-3 border border-gray-400">
                    <span class="col-start-1 col-span-2 border-r ml-3">Email:</span>
                    <span class="col-start-3 col-span-2 mr-3 text-center">${user.email}</span>
                </div>`;
            });
            // setting the new element to be displaed after the h1 element: textContent of => User
            usersHTML.insertAdjacentElement('afterend', output);
            // For debugging 
            console.log(users);
        };
    };
    
    // To send response 
    xhr.send();
};
