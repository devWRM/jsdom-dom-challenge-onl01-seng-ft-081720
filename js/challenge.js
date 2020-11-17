


function incrementCounter() {

    var num = document.getElementById("counter").innerText
    num++;
    document.getElementById("counter").innerText = num
}

setInterval(incrementCounter, 1000);


minus.addEventListener("click", function(e) {
    let num = document.getElementById("counter").innerText
    num--;
    document.getElementById("counter").innerText = num
})

plus.addEventListener("click", function(e) {
    let num = document.getElementById("counter").innerText
    num++;
    document.getElementById("counter").innerText = num
})












// let counter = document.getElementById("counter")



// function incrementCounter() {
//     let a = counter.innerText;
//     counter = parseFloat(a) + 1;

// }




// setInterval(incrementCounter(), 1000);




