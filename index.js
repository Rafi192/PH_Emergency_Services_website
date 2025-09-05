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

// function setInnerText(id){

// }

const iconHeart = document.getElementById("heart-ico");
iconHeart.addEventListener('click', () => {
    getCount("heart-counter");
});
// iconHeart.innerHTML()

const coinIco = document.getElementById("coin-ico")
coinIco.addEventListener('click', ()=> {
    getCount("coin-counter");
})


// Function to increase counter by clicking on any heart icon
const miniHeart = document.getElementsByClassName("heart");
for(let heart of miniHeart){
    heart.addEventListener('click', ()=>{
        getCount("heart-counter");
    })
}

// function increaseCount(cls){

//     const heart = document.getElementsByClassName(cls);

// }



// call history actions

 function showTime() {
                const now = new Date();
                let hours = now.getHours;
                const minutes = now.getMinutes().toString().padStart(2, "0");
                const seconds = now.getSeconds().toString().padStart(2, "0");

                const ampm = hours >= 12 ? "PM" : "AM";
                hours = hours % 12 || 12; //converting 0 to 12 for midnight;

                const timeString = `${hours}:${minutes}:${ampm}`;
                document.getElementById("timebox2").textContent = timeString;
              }
              showTime();