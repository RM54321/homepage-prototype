
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let description1=document.getElementById('des1');
let description2=document.getElementById('des2');
let description3=document.getElementById('des3');

navBarToggle.addEventListener('click', function () {

    mainNav.classList.toggle('active');
});


description1.addEventListener('mouseenter',function(){
            document.getElementById('btn1').style.backgroundColor = '#5DADE2';
});

description1.addEventListener('mouseout',function(){
            document.getElementById('btn1').style.backgroundColor = '#AAB7B8';
});
description2.addEventListener('mouseenter',function(){

            document.getElementById('btn2').style.backgroundColor = '#5DADE2';
});
description2.addEventListener('mouseout',function(){

            document.getElementById('btn2').style.backgroundColor = '#AAB7B8';
});
description3.addEventListener('mouseenter',function(){

            document.getElementById('btn3').style.backgroundColor = '#5DADE2';
});
description3.addEventListener('mouseout',function(){

            document.getElementById('btn3').style.backgroundColor = '#AAB7B8';
});
