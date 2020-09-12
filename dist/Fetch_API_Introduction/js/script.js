// Grab output
var fileOutput = document.querySelector('#fileOutput');

// Grab button
var getFile = document.querySelector('#getFile');

// Set Listener
getFile.addEventListener('click', extractFile);

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
    
    fetch('./sample.txt')
    .then((res) => res.text())
    .then((data) => {
        // Create Element
        var output = document.createElement('p');
        output.className = "m-2 p-5 text-justify";
        output.innerHTML = data;
        fileOutput.insertAdjacentElement('afterend', output)
        console.log(output);
    });

    console.log(123);
};
