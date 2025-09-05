// Navbar section interactiveness

function getCount(id) {
    const elem = document.getElementById(id);
    const innerText = elem.innerText;
    let textToNumber = parseInt(innerText)
    textToNumber += 1;

    elem.innerText = textToNumber
    // console.log("Button clicked")
    return textToNumber;
}


// Function to reduce the count of coin icon
function decreaseCount(id) {
    const elem = document.getElementById(id);
    const innerText = elem.innerText;
    let textToNumber = parseInt(innerText)
    textToNumber -= 20;

    elem.innerText = textToNumber
    // console.log("Button clicked")
    return textToNumber;
}

const iconHeart = document.getElementById("heart-ico");
iconHeart.addEventListener('click', () => {
    getCount("heart-counter");
});
// iconHeart.innerHTML()

// const coinIco = document.getElementById("coin-ico")
// coinIco.addEventListener('click', ()=> {
//     getCount("coin-counter");
// })


// Function to increase counter by clicking on any heart icon
const miniHeart = document.getElementsByClassName("heart");
for(let heart of miniHeart){
    heart.addEventListener('click', ()=>{
        getCount("heart-counter");
    })
};




// call history actions

//  function showTime() {
//                 const now = new Date();
//                 let hours = now.getHours;
//                 const minutes = now.getMinutes().toString().padStart(2, "0");
//                 const seconds = now.getSeconds().toString().padStart(2, "0");

//                 const ampm = hours >= 12 ? "PM" : "AM";
//                 hours = hours % 12 || 12; //converting 0 to 12 for midnight;

//                 const timeString = `${hours}:${minutes}:${ampm}`;
//                 document.getElementById("timebox2").textContent = timeString;
//               }
//               showTime();


//Call button actions

const callBtns = document.getElementsByClassName("call-btn")
const callHistoryContainer = document.getElementById("call-history"); // container div for history


for(const btn of callBtns){
    btn.addEventListener('click',()=>{
        const coinNum = document.getElementById("coin-counter")
        let coinValue = parseInt(coinNum.innerText);
         
        if(coinValue < 20){
           alert("Not Enough to make a call");
           return; 
        }
        
        const card = btn.closest(".card");
        const serviceName = card.querySelector(".service-name").textContent;
        const serviceNumber = card.querySelector(".service-number").textContent;
        // const serviceNameText = serviceName.innerText;
        // const serviceNumberText = serviceNumber.innerText;

        // alert(`Emergency ${serviceNameText} and number : ${serviceNumberText}`);
        alert(`Calling ${serviceName} at number: ${serviceNumber}`);
        decreaseCount("coin-counter");


        // Add to call history
        const historySegment = document.createElement("div");
        historySegment.className = "flex justify-between align-middle items-center mb-4 p-3 shadow-md rounded-md";

        // Service info div
        const serviceDiv = document.createElement("div");
        const pName = document.createElement("p");
        pName.textContent = serviceName;
        const pNumber = document.createElement("p");
        pNumber.textContent = serviceNumber;
        serviceDiv.appendChild(pName);
        serviceDiv.appendChild(pNumber);

        // Time div
        const timeDiv = document.createElement("div");
        timeDiv.className = "history-box";


        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
        timeDiv.textContent = timeString;

        // Append service info + time to history segment
        historySegment.appendChild(serviceDiv);
        historySegment.appendChild(timeDiv);

        // Append to call history container
        callHistoryContainer.appendChild(historySegment);



    })
}


//clear history buttoon function

const clearBtn = document.getElementById("clear-history");

clearBtn.addEventListener("click", () => {
  callHistoryContainer.innerHTML = ""; 
});

// Copy btn- functionality

const copyButtons = document.querySelectorAll(".copy-btn");


// Lopping  through eevery button
copyButtons.forEach(button => {
  button.addEventListener("click", () => {

    getCount("copy-span") // Increasing the count of every copy

    const card = button.closest(".card");

    const textToCopy = card.querySelector(".service-number").textContent;

    // Copy text to clipboard
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert(`Number ${textToCopy} copied to clipboard!`);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  });
});



// Copy button increase function

// const copySpan = document.getElementById("copy-span");


