function myFunction() {
    window.open('../assets/cv/MyCV.pdf');
}

var element_navbar = document.querySelector('.nav-link');
var navbar_collapse = document.querySelector('.navbar-collapse');

function salam(){
    navbar_collapse.classList.remove("show");
}
function disableClick(){
    document.querySelector('body').addEventListener('mouseup',(e)=>{
        if(e.button == 2){
            document.addEventListener('contextmenu', event => event.preventDefault());
        }
    })
}

function websiteVisits(response) {
    document.querySelector("#visited").setAttribute("data-number",response.value);
    console.log(response.value);
}


function mouseFloating(){
    console.log(document.body.offsetHeight);
    $('html').animate({
        scrollTop: document.body.offsetHeight
      }, 11000);
      return false;
}
