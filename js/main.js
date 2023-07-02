let jarra = new Jarra()

function vaciarGrande() {
    jarra.vaciarGrande()
}

function vaciarPequeña() {
    jarra.vaciarPequeña()
}

function rellenarGrande() {
    jarra.rellenarGrande()
}

function rellenarPequeña() {
    jarra.rellenarPequeña()
}

function pasarPequeñaGrande() {
    jarra.pasarPequeñaGrande()
}

function pasarGrandePequeña() {
    jarra.pasarGrandePequeña()
}

let boton = document.getElementById('vaciarG');
boton.addEventListener('click', () => {
    jarra.vaciarGrande()
});
