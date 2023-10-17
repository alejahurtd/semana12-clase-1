export class Animal {
    nombre= "";
    tipo = "";
    #element=null

	constructor(nombre, raza) {
		this.nombre = nombre; 
        this.raza = raza;

	}

    #obtenerTexto() {
        const texto = "Hola, mi nombre es " + this.nombre  + " y soy de raza " + this.raza;
        return texto; 
    }

    render() {
        const texto = this.#obtenerTexto(); 
        const p = document.createElement("p");
        p.textContent = texto;
        this.element = p; 

        return p; 
    }

    onClickListener(){
        this.element.addEventListener("click", () => {
            const texto = this.#obtenerTexto ();
            alert (texto);
        });
    }

}