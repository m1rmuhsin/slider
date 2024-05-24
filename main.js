const image = [... document.querySelectorAll('.carousel-image')];
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const carousel = document.querySelector('.carousel')

let i = 0
next.addEventListener('click',function (){
    image[i].style.display= "none"
    i++
    if(i>= image.length){
        i = 0
    }
    console.log(i)
    image[i].style.display = "block"
})
prev.addEventListener('click',function (){
    image[i].style.display= "none"
    i--
    if(i < 0){
        i= image.length -1 
    }
    console.log(i)
    image[i].style.display = "block"
})


function atomaticSlider(){
    image[i].style.display = "none"
    i++
    if(i >= image.length){
        i = 0
    }
    console.log(i)
    image[i].style.display = "block"
}
 let auto;
 auto = setInterval(() => {
    atomaticSlider()
 }, 1000);
function stop(){
    clearInterval(auto)
}
carousel.addEventListener('mouseover', function(){
    stop()
})
function start(){
    return auto = setInterval(() => {
        atomaticSlider()
     }, 1000);
}
carousel.addEventListener('mouseout', function(){
    start()
})

