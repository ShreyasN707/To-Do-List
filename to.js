// add = document.getElementById("add");
// add.addEventListener('click', () => {
//     console.log("updating list...")
//     tit = document.getElementById("title").value;
//     desc = document.getElementById("description").value;
//     if (localStorage.getItem('itemsJson')==null){
//         itemJSONarray=[];
//         itemJSONarray.push([tit, desc]);
//         localStorage.setItem('itemsJson', JSON.stringify(itemJSONarray));
//     }
//     else {
//         itemJSONarraystr = localStorage.getItem('itemJson');
//         itemJSONarray = JSON.parse(itemJSONarraystr);
//         itemJSONarray.push([tit, desc]);
//         localStorage.setItem('itemsJson', JSON.stringify(itemJSONarray));
//     }
// })
let add = document.getElementById("add");

// Declare itemJSONarray in the global scope so it's accessible by both update() and delet()
let itemJSONarray = [];

function getandupdate() {
    console.log("updating list...");

    // Get title and description values
    let tit = document.getElementById("title").value;
    let desc = document.getElementById("description").value;

    // Check if 'itemsJson' is in localStorage
    if (localStorage.getItem('itemsJson') === null) {
        // Initialize an empty array if not found
        itemJSONarray = [];
    } else {
        // If 'itemsJson' exists, get it and parse it
        let itemJSONarraystr = localStorage.getItem('itemsJson');
        itemJSONarray = JSON.parse(itemJSONarraystr);
    }

    // Add the new item to the array
    itemJSONarray.push([tit, desc]);

    // Update localStorage with the new array
    localStorage.setItem('itemsJson', JSON.stringify(itemJSONarray));

    update();
}

function update() {
    // Adding rows to the table
    let tb = document.getElementById("table");
    let str = "";

    // If 'itemsJson' is in localStorage, parse it and assign it to itemJSONarray
    if (localStorage.getItem('itemsJson') !== null) {
        itemJSONarray = JSON.parse(localStorage.getItem('itemsJson'));
    }

    // Loop through the array and create table rows
    itemJSONarray.forEach((element, index) => {
        str += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class="btn btn-primary" onclick="delet(${index})">delete</button></td>
            </tr>`;
    });

    // Set the innerHTML of the table
    tb.innerHTML = str;
}

function delet(itemindex) {
    console.log("delete", itemindex);

    // Retrieve the updated array from localStorage
    let itemJSONarraystr = localStorage.getItem('itemsJson');
    itemJSONarray = JSON.parse(itemJSONarraystr);

    // Delete the item from the array
    itemJSONarray.splice(itemindex, 1);

    // Update localStorage with the new array
    localStorage.setItem('itemsJson', JSON.stringify(itemJSONarray));

    // Update the table display
    update();
}

add.addEventListener('click', getandupdate);

// Initialize the table on page load
update();

function end(){
    console.log("clear");
    localStorage.clear(); // Clears the localStorage
    update(); // Call update function (presumably to refresh the todo list)
    console.log(localStorage);    
    location.reload();
}
let contact = document.getElementById('contact');
contact.addEventListener('click', tell); // Notice the function reference here
function tell() {
    alert("Phone-no:8618167030 \nYou will be redirected to instagram url");
}
function search(){
    alert("To be added in feature");
}