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




// 