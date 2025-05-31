let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset")
let win = document.querySelector("#win")
let newbtn = document.querySelector("#new")

let turn0 = true; // player0 else PlayerX win 


const resetGame=()=>{
   win.innerText = "Play Game"
   turn0 = true;
   enableBoxes();

}
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0 == true){
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X"
            turn0 = true;
        }
        box.disabled = true; // can't double click on single button 
        
        checkWinner();
    })

});


const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner=(winner)=>{
    win.innerText = "Player"+winner+" Wins"
    disableBoxes()
}

const checkWinner=()=>{
   for(pattern of winPattern){

     let pos1Val = boxes[pattern[0]].innerText;
     let pos2Val = boxes[pattern[1]].innerText;
     let pos3Val = boxes[pattern[2]].innerText;
   
     if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
        }
     }
    }
}

newbtn.addEventListener("click",resetGame)
