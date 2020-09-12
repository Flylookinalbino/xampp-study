// Get button
var gitUsersBtn = document.querySelector('#gitUsersBtn');
var gitUsersHTML = document.querySelector('#gitUsers')

// Event Listener
gitUsersBtn.addEventListener('click', loadUsers);

function loadUsers(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.github.com/users',true);
    xhr.onload = function(){
        if(this.status == 200){
            var users = JSON.parse(this.responseText);
            // Creating a div/output to hold User JSO content
            var output = document.createElement('div');
            // Adding Basic Classes to the div/output
            output.className = 'grid grid-row-3 grid-cols-12 border-t-2 border-b-2 gap-4';
            // RUN a loop to cycle through Users array
            users.forEach((user) => {
                // Adding Content into that the div/output with user data from JSO
                output.innerHTML += 
                `<div class="row-span-3 col-start-4 col-span-2 grid grid-cols-1 shadow-xl mt-3 border-4 border-white">
                    <img src="${user.avatar_url}" class="justify-self-center h-40">
                </div>
                <div class="place-content-center row-span-1 col-span-4 grid grid-cols-4 shadow-xl border border-gray-400 bg-white mt-3 ">
                    <span class="col-start-1 col-span-2 border-r ml-3">ID:</span>
                    <span class="col-start-3 col-span-2 mr-3 text-center">${user.id}</span>
                </div>
                <div class="place-content-center items-end row-span-2 col-span-4 grid grid-cols-4 shadow-xl border border-gray-400 bg-white">
                    <span class="col-start-1 col-span-2 border-r ml-3">Login:</span>
                    <span class="col-start-3 col-span-2 mr-3 text-center">${user.login}</span>
                </div>`;
            });
            // setting the new element to be displaed after the h1 element: textContent of => User
            gitUsersHTML.insertAdjacentElement('afterend', output);
            // For debugging 
            console.log(users);
        };
    };
    xhr.send();
};