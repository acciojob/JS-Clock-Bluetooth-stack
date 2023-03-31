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
    let sRotate = 6 * sc;
    let mRotate = 6 * mn;


    hr.style.transform = `rotateZ(${hRotate}deg)`;
    min.style.transform = `rotateZ(${mRotate}deg)`
    sec.style.transform = `rotateZ(${sRotate}deg)`
});


