

// async function test() {
//     for (let index = 0; index < 10; index++) {
//         setTimeout(function() {
//             console.log("hello")
            // if (index % 2 == 0) {
            //     document.getElementsByTagName("html")[0].setAttribute("style", "background-color:red;");  
            // } else {
            //     document.getElementsByTagName("html")[0].setAttribute("style", "background-color:black;"); 
            // }
//         }, 500);
//     }
// // }

let time_left = 300;

function timer() {
    time_left -= 1;
    let elem = document.getElementById("timer");
    let hour = Math.floor(time_left / 60)
    elem.textContent = String(hour + ":"+time_left%60)

    if (time_left % 2 == 1) {
        document.getElementsByTagName("html")[0].setAttribute("style", "background-color:red;color:white;");

    } else {
        document.getElementsByTagName("html")[0].setAttribute("style", "background-color:black;color:rgb(45, 255, 45);");  
    }
}

function start() {
    setInterval(timer, 1000);
}

alert("would you like to continue?");

document.getElementsByTagName("html")[0].setAttribute("opacity", "100%");


function button_lmfao() {
    let btn = document.getElementById("btn_1")
    btn.style.left = "0px";
    console.log("mrnn");
}

start();

