console.log("js ok");

const readName = document.getElementById("readName");
const readKm = document.getElementById("readKm");
const readAge = document.getElementById("readAge");
const ticketCol = document.getElementById("ticketCol");
const ticketName = document.getElementById("ticketName");
const ticketPlan = document.getElementById("ticketPlan");
const ticketWagon = document.getElementById("ticketWagon");
const ticketCp = document.getElementById("ticketCp");
const ticketPrice = document.getElementById("ticketPrice");
const ticketPriceSaled = document.getElementById("ticketPriceSaled");
const generate = document.getElementById("generate");
const reset = document.getElementById("reset");
const tariffa = 0.21;
let mySale = 0;
let myPlan = "";
let isSaled = false;
let isValid = true;

reset.addEventListener("click", function(){
    readName.value = "";
    readKm.value = "";
    readAge.value = "base"
    ticketCol.classList.remove("d-block");
    ticketCol.classList.add("d-none");
    isValid = true;
});

generate.addEventListener("click", function(){
    const myName = readName.value.trim();
    const myKm = parseInt(readKm.value.trim());
    const myAge = readAge.value;

    if(!myName || isNaN(myKm) || myKm <= 0 || myAge === "base"){
        isValid = false;
        ticketCol.classList.remove("d-block");
        ticketCol.classList.add("d-none");
        alert('One or more fields incorrectly filled!\nPress "Reset" to restart')
    }

    if(isValid){
        const myPrice = parseFloat((myKm * tariffa).toFixed(2));
        let myPriceSaled = myPrice;
    
        console.log(`myName: ${myName}, ${typeof(myName)}`);
        console.log(`myKm: ${myKm}, ${typeof(myKm)}`);
        console.log(`myAge: ${myAge}, ${typeof(myAge)}`);
    
        if (myAge === "adult"){
            isSaled = false;
            myPlan = "Standard Plan";
            mySale = 0;
        }
        else{
            isSaled = true;
    
            if (myAge === "young"){
                myPlan = "Young Plan";
                mySale = 0.20;
            }
            else{
                myPlan = "Elderly Plan";
                mySale = 0.40;
            }
        }
    
        myPriceSaled = (myPriceSaled - (myPriceSaled * mySale)).toFixed(2);
        
        ticketCol.classList.remove("d-none");
        ticketCol.classList.add("d-block");

        ticketName.innerText = myName;
        ticketPlan.innerText = myPlan;
        ticketWagon.innerText = Math.floor(Math.random() * 20) + 1;
        ticketCp.innerText = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
        ticketPrice.innerText = myPrice.toFixed(2);
    
        if (isSaled){
            ticketPrice.classList.add("text-decoration-line-through");
            ticketPriceSaled.innerText = myPriceSaled;
        }
        else{
            ticketPrice.classList.remove("text-decoration-line-through");
            ticketPriceSaled.innerText = "";
        }
        
        console.log(`myPriceSaled: ${myPriceSaled}, ${typeof(myPriceSaled)}`);
    }
});
