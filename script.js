const imgsContainer = document.getElementById('imgs');
const imgs = document.querySelectorAll('#imgs img');
let index = 0;

function run(){
    index++
    if(index>imgs.length -1){
        index = 0
    }
    imgsContainer.style.transform = `translateX(${-index * 100}%)`
}

setInterval(run, 2000)