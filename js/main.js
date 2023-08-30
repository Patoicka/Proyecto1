let ubicacionPrincipal = window.scrollY;

AOS.init();

window.addEventListener("scroll",function(){
    let desplazamientoActual = window.scrollY;
    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual;
})
