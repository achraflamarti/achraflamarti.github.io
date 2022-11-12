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
            var password = prompt("Entrez le mote de passe pour consulter le code source");
            if(password != "achraflamarti"){
                window.close();
            }
        }
    })
}

function websiteVisits(response) {
    document.querySelector("#visited").setAttribute("data-number",response.value);
    console.log(response.value);
}
