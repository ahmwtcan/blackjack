let countEl = document.getElementById("count-element");
let saveEL = document.getElementById("save-el");

// console.log(countEl);

let count = 0;
function increment(){

count +=1;
countEl.innerText = count;

// console.log(count)
}

function save(){

    saveEL.innerText = saveEL.innerText + " - " + count;
    countEl.innerText = 0;
    count = 0; 
}