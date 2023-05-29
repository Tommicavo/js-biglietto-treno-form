console.log("js ok");

const passenger = document.getElementById("passenger");
const kilometers = document.getElementById("kilometers");
const age = document.getElementById("age");
const button = document.getElementById("generate");

button.addEventListener("click", function(){
    const myPassenger = passenger.value;
    const myKilometers = kilometers.value;
    const myAge = age.value;

    console.log(myPassenger);
    console.log(myKilometers);
    console.log(myAge);
});
