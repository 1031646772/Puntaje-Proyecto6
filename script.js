const marcoPuntaje=document.querySelector('.puntaje');
let puntajeActual=0;
const puntajeLimite=5;

const htmlMapa= Array.from(Array(puntajeLimite)).map((item,i)=>{
    return `<div class="item item-${i}" data-pos="${i}"></div>`;
});

marcoPuntaje.innerHTML=htmlMapa.join("");

document.querySelectorAll('.item').forEach(element => {
    element.addEventListener("mouseover",e =>{
        console.log("Funciona");
        const posicion=element.getAttribute("data-pos");

        if(puntajeActual=== parseInt(posicion)+1){
            return
        }

        document.querySelectorAll(".item").forEach(cuadradoGris =>{
            if (cuadradoGris.classList.contains("selec")){
                cuadradoGris.classList.remove("selec");
            }
        })

        for (let i=0; i<=posicion; i++){
            const cuadrito=document.querySelector(`.item-${i}`);
            if(!cuadrito.classList.contains("select")){
                cuadrito.classList.add("selec")
            }
        }

        puntajeActual=parseInt(posicion)+1;
    });
    element.addEventListener("click",(e)=>{
        const posicion=element.getAttribute("data-pos");
        puntajeActual= parseInt(posicion)+1;
        console.log (puntajeActual)
    })
});