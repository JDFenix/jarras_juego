class Jarra {
    jarraGrande = [];
    jarraPequeña = [];
    capacidadJarragrande;

    constructor() {
        this.validarTamaño()
        this.JarraPqueñaDefault();
        this.jarraGrandeDefault();

        this.jarraGrandeImagenes = [
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' '
        ]

        this.jarraPequeñaImagenes = [
            ' ',
            ' ',
            ' ', 
            ' '
        ]
    }

    jarraGrandeDefault() {
        let div = document.getElementById('imagenGrande');
        let img = document.createElement("img");

        img.src = this.jarraGrandeImagenes[0]
        img.style.width = "80px";
        img.style.position = "absolute";
        img.style.top = "80%";

        div.appendChild(img);        
    }

    JarraPqueñaDefault() {
        let div = document.getElementById('imagenGrande');
        let img = document.createElement("img");

        img.src = this.jarraPequeñaImagenes[0]
        img.style.width = "80px";
        img.style.position = "absolute";
        img.style.top = "80%";

        div.appendChild(img);        
    }



    vaciarGrande() {
        let div = document.getElementById('imagenGrande');
        let img = document.createElement("img");

        img.src = this.jarraGrandeImagenes[0]
        img.style.width = "80px";
        img.style.position = "absolute";
        img.style.top = "80%";

        div.appendChild(img);

        this.jarraGrande.splice(0, this.jarraGrande.length);
        console.log('el tamaño de la jarra grande es: ' + this.jarraGrande.length);
    }

    vaciarPequeña() {

        let div = document.getElementById('imagenGrande');
        let img = document.createElement("img");

        img.src = this.jarraPequeñaImagenes[0]
        img.style.width = "80px";
        img.style.position = "absolute";
        img.style.top = "80%";

        div.appendChild(img);

        this.jarraPequeña.splice(0, this.jarraPequeña.length);
        console.log('el tamaño de la jarra pequeña es: ' + this.jarraPequeña.length);
    }



    rellenarGrande() {

        let div = document.getElementById('imagenGrande');
        let img = document.createElement("img");

        img.src = this.jarraPequeñaImagenes[5]
        img.style.width = "80px";
        img.style.position = "absolute";
        img.style.top = "80%";

        div.appendChild(img)


        while (this.jarraGrande.length < 5) {
            this.jarraGrande.push(1);
        }
        console.log('el tamaño de la jarra grande es: ' + this.jarraGrande.length);
    }


    rellenarPequeña() {

        let div = document.getElementById('imagenGrande');
        let img = document.createElement("img");

        img.src = this.jarraPequeñaImagenes[3]
        img.style.width = "80px";
        img.style.position = "absolute";
        img.style.top = "80%";

        div.appendChild(img)

        while (this.jarraPequeña.length < 3) {
            this.jarraPequeña.push(1);
        }
        console.log('el tamaño de la jarra pequeña es: ' + this.jarraPequeña.length);
    }



    pasarPequeñaGrande() {
        while (this.jarraGrande.length < 5 && this.jarraPequeña.length > 0) {
            this.jarraPequeña.pop();
            this.jarraGrande.push(1);
        }
        console.log('el tamaño de la jarra grande es: ' + this.jarraGrande.length);
        console.log('el tamaño de la jarra pequeña es: ' + this.jarraPequeña.length);
    }

    pasarGrandePequeña() {

        while (this.jarraPequeña.length < 3 && this.jarraGrande.length > 0) {
            this.jarraGrande.pop();
            this.jarraPequeña.push(1);
        }
        console.log('el tamaño de la jarra grande es: ' + this.jarraGrande.length);
        console.log('el tamaño de la jarra pequeña es: ' + this.jarraPequeña.length);

    }

    

    validarTamaño() {
        setInterval(() => {
            if (this.jarraGrande.length == 4) {
                alert("ganaste ;v")
            }
        }, 100)

    }
}
