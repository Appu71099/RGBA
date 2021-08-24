// first we are selectiong outpot box
let outputBox = document.querySelector('.output');
// console.log(outputBox);

// Then selecting whole body
let getBody = document.body;
// console.log(getBody);


// creating getValue Function
function getValue(){

    // tanking the values of red , blue , green and alpha.

    let Red = document.getElementById("red").value;
    // console.log(Red);
    let Green = document.getElementById("green").value;
    // console.log(Green);
    let  Blue = document.getElementById("blue").value;
    // console.log(Blue);
    let Alpha = document.getElementById("alpha").value;
    // console.log(Alpha);

    // Adding style on bankgroung and input in pniut box

    getBody.style.background = `rgba(${Red},${Green},${Blue},${Alpha}) `;
    outputBox.innerHTML = `rgba(${Red},${Green},${Blue},${Alpha})`;
}


// Creating function for copy thr text from output-box
function copy(){
    let elem = document.createElement("textarea");
    elem.value = outputBox.textContent;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    alert( elem.value + " Copied!!");

}