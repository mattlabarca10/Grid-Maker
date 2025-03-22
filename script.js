// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let table = document.getElementById("grid");
    if(numRows == 0){
        numCols = 0;
    }
    numRows++;
    let newR = table.insertRow();
    for(let i = 0; i <= numCols; i++){
        let newB = newR.insertCell();
        newB.onclick = function()
        {
            newB.style.backgroundColor=colorSelected
        };

    }
    //console.log("addR() Rows: " + numRows + " Cols: " + numCols);
}

// Add a column
function addC() {
    let table = document.getElementById("grid");
    if(numRows == 0) {
        addR(); 
        return;
    }
    numCols++;
    for(let i = 0; i < numRows; i++){
        let newB = document.createElement("td");
        newB.onclick = function() {
            newB.style.backgroundColor=colorSelected
        };
        table.rows[i].appendChild(newB);
    }
    //console.log("addC() Rows: " + numRows + " Cols: " + numCols);
}

// Remove a row
function removeR() {
    if(numRows == 0){
        return;
    }
    let table = document.getElementById("grid");
    table.deleteRow(-1); 
    numRows--;
    if(numRows == 0){
        numCols = 0;
    }
    console.log("removeR() Rows: " + numRows + " Cols: " + numCols);
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}