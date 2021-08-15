input = document.getElementById("header__input");
input.onfocus = () => {
    input.classList.add('active');
}
input.onblur = () => {
    input.classList.remove('active');
}

phone_none = document.getElementsByClassName('phone__none');

// Static

if (document.documentElement.clientWidth <= 974){
    for(i = 0; i < phone_none.length; i++){
        phone_none[i].style.display = "none";
    }
} else {
    for(i = 0; i < phone_none.length; i++){
        phone_none[i].style.display = "block";
    }
}

// Dynamic

window.addEventListener('resize',function(){      
    if (document.documentElement.clientWidth <= 974){
        for(i = 0; i < phone_none.length; i++){
            phone_none[i].style.display = "none";
        }
    } else {
        for(i = 0; i < phone_none.length; i++){
            phone_none[i].style.display = "block";
        }
    }
});