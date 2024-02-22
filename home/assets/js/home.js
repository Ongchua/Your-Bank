
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// hight header

// navHight
let headerMobile = $('.header-mobile');
let header = $('header');
let main = $('.main');
headerMobile.style.top = header.offsetHeight + header.offsetTop + 'px';
main.style.marginTop = header.offsetHeight + 'px';


let iconMobile = $('.icon-mobile');
iconMobile.onclick=function() {
    headerMobile.classList.toggle('active')
}
// SWITCH

let btnProduct = $$('.product-top .switch .btn-switch');


btnProduct.forEach(element => {
    element.onclick=function() {

        $('.product-top .btn-switch.switch-active').classList.remove('switch-active')
        this.classList.add('switch-active')
    }
});

// Features show
let siderbars = $$('.siderbar-item');
let showFeatures = $$('.show-card');

siderbars.forEach((siderbar, index) => {
    const showFeature = showFeatures[index];

    siderbar.onclick= function() {
        $('.siderbar-item.siderbar-active').classList.remove('siderbar-active');
        $('.show-card.siderbar-active').classList.remove('siderbar-active');
        
        this.classList.add('siderbar-active')
        showFeature.classList.add('siderbar-active')
    }
})

// btn-load

let btnLoad = $('.btn-question');

btnLoad.onclick = function() {
    $('.question-liner').style.display = "none";
}

// section__testimonials

let btnTestimonials = $$('.section__testimonials-head .switch .btn-switch');

btnTestimonials.forEach(element => {
    element.onclick=function() {

        $('.section__testimonials-head .btn-switch.switch-active').classList.remove('switch-active')
        this.classList.add('switch-active')
    }
});


// Testimonials slider

let list = $('.list-slider');
let items = $$('.list-slider .slider-card');
let prev = $('.arr-left');
let next = $('.arr-right');

let activeList = 1;

let lengthItems = items.length - 1;

next.onclick = function() {
    if(activeList + 1 > lengthItems) {
        activeList = 0;
        
    } else {
        activeList = activeList + 1;
    }
    
    reloadSlider();

}

prev.onclick = function() {
    if( activeList - 1 < 0) {
        activeList = lengthItems;

    }else {
        activeList = activeList - 1
    }

    reloadSlider()
}

// list.onmousedown = function() {
//     list.style.left = -checkLeft + 'px'; 
// } 
function reloadSlider() {
    let checkWidth = items[0].offsetWidth;
    if(activeList == 0) {
        list.style.left = checkWidth + 'px'
    }else {
        let checkLeft = items[activeList -1].offsetLeft;
        list.style.left = -checkLeft + 'px';
   
    }
  
}

// modal
let modal = $('.modal');
let overLay = $('.modal-overlay');
let formLogin = $('.form-login');
let formSign = $('.form-sign');

let btnSign = $('.btn-sign');
let btnLogin = $('.btn-login');

// active-form
btnSign.addEventListener('click', function() {
    modal.classList.add('form-active')
    formSign.classList.add('form-active');
    formLogin.classList.remove('form-active');
})

btnLogin.addEventListener('click', function() {
    modal.classList.add('form-active')
    formSign.classList.remove('form-active');
    formLogin.classList.add('form-active');
})
overLay.addEventListener('click', function(){
    modal.classList.remove('form-active');
})

// btn
let inputForm = $$('.form input[type=text]');
let btnModal = $$('.form .btn');
let label = $$('.form-item label');

btnModal.forEach((btnChild) => {
    btnChild.onclick=function() {
         
    }
});
//  switchh form
let spanSwitch = $$('.span-switch');

spanSwitch.forEach((switchElement, index) => {
    switchElement.addEventListener('click', function() {
        formSign.classList.toggle('form-active');
        formLogin.classList.toggle('form-active');
    });
});

