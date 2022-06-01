// menu-bottom
let menu = document.querySelector('#menu-btn');  //let the menu be menu-btn  
let navbar = document.querySelector('.header .navbar');

//when click the menu botton, it become 'fa-solid fa-fire' of fontawesome
menu.onclick = () => {
     //I tried to use 'fa-solid fa-fire' here but it doesn't work and show the error "The token provided ('fa-solid fa-fire') contains HTML space characters, which are not valid in tokens." Then I try 'fa-fire' then It work.
     menu.classList.toggle('fa-fire');  //show fa-fire when #menu-btn (menu) is clicked
     navbar.classList.toggle('active');  //At the same time, show() navbar when  #menu-btn (menu) is clicked. Value of(active) here is show up the while nav element which was hidden
}

window.onscroll = () => {        //windows means whole website, when scroll(onscroll), the navbar will disappear(remove)
     menu.classList.remove('fa-fire');
     navbar.classList.remove('active');
}



// pricing
let year = document.querySelector('.pricing .price-toggler .year');
let month = document.querySelector('.pricing .price-toggler .month');
let yearAmount = document.querySelectorAll('.pricing .price .year');
let monthAmount = document.querySelectorAll('.pricing .price .month');


year.onclick = () => {
     year.classList.add('active');
     month.classList.remove('active');
     yearAmount.forEach(years => {
          //when I click the yearly bottom, the pricing tag of yeay nd to SHW OC
          years.style.display = 'block';
     });
     monthAmount.forEach(months => { 
          //when I click the yearly bottom, the pricing tag of month nd to DISAP OC
          months.style.display = 'none';
     });
}

month.onclick = () => {
     year.classList.remove('active');
     month.classList.add('active');     
     monthAmount.forEach(years => {
          years.style.display = 'block';
     });
     yearAmount.forEach(months => {
          months.style.display = 'none';
     });
}


let slides = document.querySelectorAll('.reviews .slide-container .slide');
let index = 0;

function next() {
     slides[index].classList.remove('active');
     index = (index + 1) % slides.length;
     slides[index].classList.add('active');
}

function prev() {
     slides[index].classList.remove('active');
     index = (index - 1 + slides.length) % slides.length;
     slides[index].classList.add('active');
}


document.querySelectorAll('.faq .accordion-container .accordion').forEach(accordion => {accordion.onclick = () => {
     accordion.classList.toggle('active');  
}

});

// let accordincontent = document.querySelector('.accordin-content')








