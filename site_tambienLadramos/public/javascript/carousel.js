console.log("averrr")

let carousel = document.querySelector('#carouselExampleDark');
let title = document.querySelectorAll('#carouselExampleDark h5');
let paragraph = document.querySelectorAll('#carouselExampleDark p');
let images = document.querySelectorAll('.img-fluid')
let activeImage = document.querySelector('.carousel-item active')




window.addEventListener("load", () => {
        carousel.addEventListener('mouseover', (e) => {
            images.forEach(element => {
                element.style.transform = 'translateX(-200%)'
                element.style.background = 'var(--colores4)'
                element.style.transition = 'all 2s ease-out' 
                  
            })
            title.forEach(element => {
                element.style.transform = 'translateY(-200%)'
                element.style.transition = 'all 2s ease-out'
                element.style.opacity = '1'
            })
            paragraph.forEach(element => {
                element.style.transform = 'translateY(-100%)'
                element.style.transition = 'all 2s ease-out'
                element.style.opacity = '1'
            })
            e(carousel.classList.add('hover'));
        })
    

    carousel.addEventListener('mouseout', function () {
        images.forEach(element => {
            element.style.transform = 'translateX(0%)'
            element.style.background = 'none'  
            element.style.transition = 'all 2s ease-in'     
        })
        paragraph.forEach(element => {
            element.style.transform = 'translateY(0%)'
            element.style.transition = 'all 2s ease-out'
            element.style.opacity = '0'
        })
        title.forEach(element => {
            element.style.transform = 'translateY(0%)'
            element.style.transition = 'all 2s ease-out'
            element.style.opacity = '0'
        })
    })
    
})