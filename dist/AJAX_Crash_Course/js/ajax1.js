// Getting HTML Element
let fileButton = document.querySelector('#fileEvent');

// Create Event Listener
fileButton.addEventListener('click', loadText);

function loadText(){
    // console.log(fileButton);
    // Create XHR Object
    var xhr = new XMLHttpRequest();
    //console.log(`READYSTATE: ${xhr.readyState}`);

    // Open - type, url/file, async
    xhr.open("GET", "sample.txt", true);
    //console.log(`READYSTATE: ${xhr.readyState}`);

    // Optional - used for loaders
    xhr.onprogress = function () {
        console.log(`READYSTATE: ${xhr.readyState}`);
    };

    // Onload Used Nowadays
    
    xhr.onload = function(){
        if(this.status == 200){
            // Create Element
            const fileToHTML = document.createElement('p');
            // Add Classes
            fileToHTML.className = "m-1 p-5 rounded shadow-2xl border border-gray-700 text-justify text-lg";
            // Add text file content
            fileToHTML.innerHTML = this.responseText;
            
            document.querySelector('div').insertAdjacentElement("afterend", fileToHTML);
            console.log(fileToHTML);
        }else if(this.status == 404){
            // Create Element
            const fileToHTML = document.createElement('p');
            // Add Classes
            fileToHTML.className = "m-1 p-5 rounded shadow-2xl border border-gray-700 text-justify text-lg";
            
            fileToHTML.innerHTML = 'TEXT FILE NOT FOUND';
            
            document.querySelector('div').insertAdjacentElement("afterend", fileToHTML);
        }
    }
    
    xhr.onerror = function () { 
        console.log('Request Error....');
    };

    // onreadystatechange
    /*
    xhr.onreadystatechange = function(){
        //console.log(`READYSTATE: ${xhr.readyState}`);
        if(this.readyState == 4 && this.status == 200){
            //console.log(`READYSTATE: ${xhr.readyState}`);
            console.log(this.responseText);
        }
    };
    */
    
    // Sends requests
    xhr.send();

    // console.log(xhr);
}
