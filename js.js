let box = document.createElement('div');
box.style = "display: flex; justify-content: center; align-items: center; flex-direction: column; height:900px; ";
document.body.appendChild(box);

let container = document.createElement('div');
container.setAttribute('id', 'container');
container.style= "display: flex; width: 750px; height: 750px;";
box.appendChild(container);

function createGrid(size){
    for(let i = 0; i < size; i++) {
        let col = document.createElement('div');
        col.style = "display: flex; height: 750px; flex-direction:column;"; 
        col.className = "col";
        col.style.width = 750/size +"px";
    
        for(let j = 0; j < size; j++) {
            let row = document.createElement('div'); 
            row.className = "row"; 
            row.style = " border: 1px solid black";
            row.style.width =  (750/size) + "px";
            row.style.height = (750/size) + "px";
            col.appendChild(row);
            row.addEventListener("mouseover", () => row.style.backgroundColor = generateColor());
    
        }
        container.appendChild(col); 
    
    }
    
}

function generateColor(){
    let r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    return `rgb(${r}, ${g}, ${b})`;
}

let buttonDiv = document.createElement('div'); 
buttonDiv.setAttribute('id', 'buttonDiv'); 
buttonDiv.style = "display: flex; justify-content: center; width: 750px; margin-top: 15px; gap 15px;";
box.appendChild(buttonDiv);


let btn = document.createElement('button'); 
btn.addEventListener("click", () => {
    let size = prompt("Enter grid size (max 100): ");
    container.innerHTML ="";
    createGrid(size);
});
btn.textContent = "Create Grid";
btn.style = "width: 150px; padding: 20px; font-size: 15px; font-family: monospace;";

buttonDiv.appendChild(btn);

let deleteButton = document.createElement('button'); 
deleteButton.textContent = "Erase All"; 
deleteButton.addEventListener("click", () => {
    let boxes = document.querySelectorAll(".row");
    boxes.forEach(box => box.style.backgroundColor = "white");
});

deleteButton.style = "width: 150px; padding 20px; font-size: 15px; font-family: monospace; margin-left: 25px";
buttonDiv.appendChild(deleteButton);

createGrid(16);