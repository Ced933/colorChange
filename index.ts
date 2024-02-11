let r:number, g:number, b:number;
let colorText:any = document.querySelector(".color-description");

const changeColor = ()=>{
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    document.body.style.background= `rgb(${r},${g},${b})`;

    colorText.innerHTML = `
    rgb(${r}, ${g}, ${b})
    `
}

setInterval(changeColor,1000)








