
function createGrid(dimensions){
const gridContainer = document.querySelector('#grid-container');

for(let i = 0; i < dimensions; i++){
    for(let j = 0; j < dimensions; j++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute("style", "height: 42px; width: 42px; border: 1px solid black;");
        gridContainer.appendChild(square); 

        square.addEventListener('mouseenter', () => {
            square.classList.add('hover');
        });
    }
}
}

createGrid(16);


document.querySelector('#dimensions-button').addEventListener('click', () => {
    let windowSize = prompt("Enter the number of squares per side for the new grid(maximum 100):");
    windowSize = parseInt(windowSize);

    if(windowSize > 0 && windowSize <= 100){
        createGrid(windowSize);
    } else {
        alert("Please enter a valid number between 1 and 100");
    }
});

