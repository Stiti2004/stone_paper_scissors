let boxes = document.querySelectorAll(".box");

let youPoint = document.querySelector("#you-pnt");

let compPoint = document.querySelector("#comp-pnt");

let text = document.querySelector(".text");

let opt = ["rock","paper","scissor"];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        let ranNum = getRandomNumber();
        console.log(ranNum);  //
        console.log(opt[ranNum]); //
        if(box.innerText=="ROCK") {
            if(opt[ranNum]=="rock") {
                console.log("It's a draw!");
                text.innerText = "It's a draw!";
                text.style.color = "black";
            }
            else if(opt[ranNum]=="paper") {
                console.log("You lost :(");
                compPoint.innerText = ++compPoint.innerText;
                text.innerText = "You lost :(";
                text.style.color = "red";
            }
            else {
                console.log("You won :)");
                youPoint.innerText = ++youPoint.innerText;
                text.innerText = "You won :)";
                text.style.color = "green";
            }
        }
        else if(box.innerText=="PAPER") {
            if(opt[ranNum]=="rock") {
                console.log("You won :)");
                youPoint.innerText = ++youPoint.innerText;
                text.innerText = "You won :)";
                text.style.color = "green";
            }
            else if(opt[ranNum]=="paper") {
                console.log("It's a draw!");
                text.innerText = "It's a draw!";
                text.style.color = "black";
            }
            else {
                console.log("You lost :(");
                compPoint.innerText = ++compPoint.innerText;
                text.innerText = "You lost :(";
                text.style.color = "red";
            }
        }
        else {
            if(opt[ranNum]=="rock") {
                console.log("You lost :(");
                compPoint.innerText = ++compPoint.innerText;
                text.innerText = "You lost :(";
                text.style.color = "red";
            }
            else if(opt[ranNum]=="paper") {
                console.log("You won :)");
                youPoint.innerText = ++youPoint.innerText;
                text.innerText = "You won :)";
                text.style.color = "green";
            }
            else {
                console.log("It's a draw!");
                text.innerText = "It's a draw!";
                text.style.color = "black";
            }
        }
    });
});

function getRandomNumber() {
    // Generate a random number between 0 and 1
    const random = Math.random();
    
    // Scale the random number to fit within the range of the array
    const randomNumber = Math.floor(random * 3); // 3 is the length of the array
  
    return randomNumber;
  }
  
