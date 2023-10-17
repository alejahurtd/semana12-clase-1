import { Animal } from "./utils.js";

const animalesData = [
    {nombre:"Rex", raza: "Labrador"},
    {nombre:"Whiskers", raza: "Siamés"},
    {nombre: "Buddy", raza: "Golden Retriever"}
];

const contenedor = document.querySelector("#contenedor");

const render = () => {
    for(const animalData of animalesData) {
		const animal = new Animal(animalData.nombre, animalData.raza);
        const p = animal.render();
        contenedor.appendChild(p);
        animal.onClickListener()
	}
};
	
window.onload = render;