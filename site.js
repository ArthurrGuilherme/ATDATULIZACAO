/*Mapeamento*/ 
document.querySelector("#btn-primaria").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#container-secundaria");

    console.log("go to up");
});

function scrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}
document.querySelector("#Serviços").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#section_Serviços");

    console.log("go to up");
});

/*Numeros*/
let valueDisplays = document.querySelectorAll(".texto_numeros, texto_numeros02");
let interval = 1000000;


valueDisplays.forEach((valueDisplay) => {
    let starValue = 0.;
    let endValue = parseInt(valueDisplay.getAttribute
        ("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        starValue += 1;
        valueDisplay.textContent = starValue;
        if (starValue == endValue) {
            clearInterval(counter);
        }
    }, duration);

});
