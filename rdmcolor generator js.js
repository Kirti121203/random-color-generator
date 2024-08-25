let btn=document.querySelector("Button");


btn.addEventListener('click',function () {
    let h1 = document.querySelector("h1");
    let RandomColor=getRandomColor();
    h1.innerText= RandomColor; 
    
    let div=document.querySelector("div");
    div.style.backgroundColor=RandomColor;


});

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color
};