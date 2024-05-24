const image = [... document.querySelectorAll('.carousel-image')];
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let i = 0
next.onclick = () => {
    image[i].classList.remove('active')
    i++
    if(i >= image.length){
        i = 0
    }
    image[i].classList.add('active')
}
prev.onclick = () => {
    image[i].classList.remove('active')
    i--
    if(i < 0){
        i = image.length - 1
    }
    image[i].classList.add('active')
}


