input = document.getElementById("header__input");
input.onfocus = () => {
    input.classList.add('active');
}
input.onblur = () => {
    input.classList.remove('active');
}

phone_none = document.getElementsByClassName('phone__none');
burger = document.querySelector('.header__burger');

// Static

if (document.documentElement.clientWidth <= 974){
    burger.style.display = "block";
    for(i = 0; i < phone_none.length; i++){
        phone_none[i].style.display = "none";
    }
} else {
    burger.style.display = "none";
    for(i = 0; i < phone_none.length; i++){
        phone_none[i].style.display = "block";
    }
}

// Dynamic

window.addEventListener('resize',function(){      
    if (document.documentElement.clientWidth <= 974){
        burger.style.display = "block";
        for(i = 0; i < phone_none.length; i++){
            phone_none[i].style.display = "none";
        }
    } else {
        burger.style.display = "none";
        for(i = 0; i < phone_none.length; i++){
            phone_none[i].style.display = "block";
        }
    }
});