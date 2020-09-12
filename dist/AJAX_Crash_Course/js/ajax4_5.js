// Get Button
var phpSQLBtn = document.querySelector('#phpSQLBtn');

// GET Form
var getForm = document.querySelector('#getForm');

// POST Form
var postForm = document.querySelector('#postForm')

// Output Location
var outputHTML = document.querySelector('#output');


// Button click Listener
phpSQLBtn.addEventListener('click', getSQLUsersPHP);

// Get Submit Button
getForm.addEventListener('submit', getName);

// Post Submit Button
postForm.addEventListener('submit', postName);

// xhr Global
var xhr = new XMLHttpRequest();

// Get Form Function
function getName(e) {
    e.preventDefault();
    var name = document.querySelector('#name1');
    xhr.open('GET', `./php/process.php?name=${name.value}`, true);
    xhr.onload = function () {
        console.log(this.responseText);
        clearInput();
    };
    xhr.send();
};

// Post Form Function
function postName(e) {
    e.preventDefault();
    var name = document.querySelector('#name2');
    var param = `name=${name.value}`;
    xhr.open('POST', `./php/process.php`, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        console.log(this.responseText);
        clearInput();
    };
    xhr.send(param);
};

// Get SQL Content
function getSQLUsersPHP() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './php/users.php', true);
    xhr.onload = function () {
        var users = JSON.parse(this.responseText);
        var output = document.createElement('div');
        // Adding Basic Classes to the div/output
        output.className = 'grid grid-row-2 grid-cols-12 border-t-2 border-b-2 gap-4';
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
                </div>`;
        });
        // setting the new element to be displaed after the h1 element: textContent of => User
        outputHTML.insertAdjacentElement('afterend', output);
        // For debugging 
        console.log(users);
    };
    xhr.send();
};

function clearInput() {
    document.querySelector('#name1').value = '';
}