let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("javascript");
        habilidades[10].classList.add("proyect");
        habilidades[12].classList.add("proyect");
        habilidades[13].classList.add("proyect");
        habilidades[14].classList.add("proyect");
        habilidades[15].classList.add("proyect");
        habilidades[16].classList.add("proyect");
    }
}
document.getElementById("downloadCvBtn").addEventListener("click", function() {
    // Reemplaza con la URL directa de tu archivo PDF en GitHub
    var pdfUrl = "https://github.com/JordyMontalvo/MyPersonal-Portfolio/raw/main/CV/Jordy_Montalvo_CV.pdf";
    // Abre el PDF en una nueva pestaña
    window.open(pdfUrl, '_blank');
});


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 