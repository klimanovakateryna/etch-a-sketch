
function createGrid(dimensions){
const gridContainer = document.querySelector('#grid-container');
gridContainer.innerHTML = "";

const squareSize = 672 /dimensions; 
for(let i = 0; i < dimensions; i++){
    for(let j = 0; j < dimensions; j++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute("style", `height: ${squareSize} px; width: ${squareSize}px; border: 1px solid black;`);
        gridContainer.appendChild(square); 

        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = randomiseColors();
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

function randomiseColors(){
    const r = 255;
    const g = Math.floor(Math.random() * 156 + 80);
    const b = Math.floor(Math.random() * 156 +150);
    return `rgb(${r}, ${g}, ${b})`;
}
