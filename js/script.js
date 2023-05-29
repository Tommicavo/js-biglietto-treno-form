console.log("js ok");

const readName = document.getElementById("readName");
const readKm = document.getElementById("readKm");
const readAge = document.getElementById("readAge");

const ticketName = document.getElementById("ticketName");
const ticketPlan = document.getElementById("ticketPlan");
const ticketWagon = document.getElementById("ticketWagon");
const ticketPrice = document.getElementById("ticketPrice");
const ticketPriceSaled = document.getElementById("ticketPriceSaled");

const generate = document.getElementById("generate");
const back = document.getElementById("back");

const tariffa = 0.21;
let mySale = 0;
let myPlan = "";
let isSaled = false;


generate.addEventListener("click", function(){
    const myName = readName.value;
    const myKm = parseInt(readKm.value);
    const myAge = readAge.value;

    const myPrice = parseFloat((myKm * tariffa).toFixed(2));
    let myPriceSaled = myPrice;

    console.log(`myName: ${myName}, ${typeof(myName)}`);
    console.log(`myKm: ${myKm}, ${typeof(myKm)}`);
    console.log(`myAge: ${myAge}, ${typeof(myAge)}`);

    if (myAge === "adult"){
        myPlan = "Standard Plan"
    }
    else{
        isSaled = true;

        if (myAge === "young"){
            myPlan = "Young Plan"
            mySale = 0.20;
        }
        else{
            myPlan = "Elderly Plan"
            mySale = 0.40;
        }
    }

    myPriceSaled = (myPriceSaled - (myPriceSaled * mySale)).toFixed(2);
    
    ticketName.innerText = myName;
    ticketPlan.innerText = myPlan;
    ticketPrice.innerText = myPrice;
    if (isSaled){
        ticketPrice.classList.add("text-decoration-line-through");
        ticketPriceSaled.innerText = myPriceSaled;
    }
    
    console.log(`myPriceSaled: ${myPriceSaled}, ${typeof(myPriceSaled)}`);
});
