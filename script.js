const btn=document.getElementById("roll-button");
const die=document.getElementById("dice");
const l1=document.getElementById("l1");
let historyList=[];

btn.addEventListener("click",()=>{
    die.classList.add("roll-dice");
    setTimeout(()=>{
            die.classList.remove("roll-dice");
    },1000);
    rollIt();
});
function rollIt(){
    const randomNum=Math.floor(Math.random()*6)+1;
    const val=DiceValue(randomNum);
    die.innerHTML=val;
    historyList.push(randomNum);
    updateRoll();
}
function updateRoll(){
    l1.innerHTML="";
    for(let i=0;i<historyList.length;i++){
     const listItem=document.createElement("li");
     listItem.innerHTML=`Roll ${i+1}: <span>${DiceValue(historyList[i])}</span>`;
     l1.appendChild(listItem);
    }
}

function DiceValue(randomNum){
    switch(randomNum){
        case 1: return "&#9856";
        case 2: return "&#9857";
        case 3: return "&#9858";
        case 4: return "&#9859";
        case 5: return "&#9860";
        case 6: return "&#9861";
    default:
      return "";  
    }
}
