const contenedor = document.getElementById("contenedor");

const datosRandom = [
    "Las tortugas pueden vivir más de 150 años.",
    "Los elefantes son uno de los pocos animales que se reconocen en un espejo.",
    "Los delfines ponen nombres a otros delfines.",
    "Los camellos pueden beber 100 litros de agua en 10 minutos.",
    "Los búhos pueden girar la cabeza hasta 270 grados."
];

function cargarGato() {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json())
        .then(data => {
            const img = data[0].url;

            contenedor.innerHTML = `
                <img src="${img}">
                <p>Dato curioso: Los gatos pueden saltar hasta 7 veces su altura.</p>
            `;
        })
        .catch(() => {
            contenedor.innerHTML = "<p>Error cargando gatos.</p>";
        });
}


function cargarPerro() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            const img = data.message;

            contenedor.innerHTML = `
                <img src="${img}">
                <p>Dato curioso: Los perros pueden soñar igual que los humanos.</p>
            `;
        })
        .catch(() => {
            contenedor.innerHTML = "<p>Error cargando perros.</p>";
        });
}


