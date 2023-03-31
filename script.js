//your code here
const hr = document.querySelector(".hour-hand");
const min = document.querySelector(".min-hand");
const sec = document. querySelector(".second-hand");

setInterval(() =>{
    const day = new Date();
    let hrr = day.getHours();
    let mn = day.getMinutes();
    let sc = day.getSeconds();
    
    let hRotate = hrr*30 + mn/2;
    let mRotate = 6 * mn;
    let sRotate = 6 * sc;


    hr.style.transform = `matrix(0, 1, -1, 0, 0, 0)`;
    min.style.transform = `matrix(0, 1, -1, 0, 0, 0)`
    sec.style.transform = `rotateZ(${sRotate}deg)`
});


