class Jarra {
  jarraGrande = [];
  jarraPequeña = [];
  

  constructor() {
    this.validarTamaño();
    this.jarraPequeñaImagenes = [
      'resources/img/3frasco0.png ',
      'resources/img/3frasco1.png ',
      'resources/img/3frasco2.png',
      'resources/img/3frasco3.png'
    ];
    this.jarraGrandeImagenes = [
      'resources/img/5frasco0.png',
      'resources/img/5frasco1.png ',
      'resources/img/5frasco2.png',
      'resources/img/5frasco3.png',
      'resources/img/5frasco4.png',
      'resources/img/5frasco5.png'
    ];
    this.jarraGrandeDefault();
    this.jarraPequeñaDefault();
  }

  gifllenadoGrande() {
    let div = document.getElementById('llenadoGrande');
    let gif = document.createElement("img");

    gif.style.width = '100px'
    gif.style.position = 'absolute'
    gif.src = "/resources/img/pruebaGif.gif"

    div.appendChild(gif)
    return gif
  }

  gifllenadoPequeño() {
    let div = document.getElementById('llenadoPequeño');
    let gif = document.createElement("img");

    gif.style.width = '100px'
    gif.style.position = 'absolute'
    gif.src = "/resources/img/pruebaGif.gif"

    div.appendChild(gif)
    return gif
  }

  jarraGrandeDefault() {
    let div = document.getElementById('imagenGrande');
    let img = document.createElement("img");

    img.src = this.jarraGrandeImagenes[0];
    img.style.width = "250px";
    img.style.position = "absolute";

    div.appendChild(img);
  }

  jarraPequeñaDefault() {
    let div = document.getElementById('imagenPequeña');
    let img = document.createElement("img");

    img.src = this.jarraPequeñaImagenes[0];
    img.style.width = "250px";
    img.style.position = "absolute";

    div.appendChild(img);
  }

  vaciarGrande() {
    let div = document.getElementById('imagenGrande');
    div.innerHTML = "";

    let img = document.createElement("img");
    img.src = this.jarraGrandeImagenes[0];
    img.style.width = "250px";
    img.style.position = "absolute";

    div.appendChild(img);

    this.jarraGrande.splice(0, this.jarraGrande.length);
    console.log('el tamaño de la jarra grande es: ' + this.jarraGrande.length);
  }

  vaciarPequeña() {
    let div = document.getElementById('imagenPequeña');
    div.innerHTML = "";
    let img = document.createElement("img");
    img.src = this.jarraPequeñaImagenes[0];
    img.style.width = "250px";
    img.style.position = "absolute";

    div.appendChild(img);

    this.jarraPequeña.splice(0, this.jarraPequeña.length);
    console.log('el tamaño de la jarra pequeña es: ' + this.jarraPequeña.length);
  }

  rellenarGrande() {
    let divGif = document.getElementById('llenadoGrande');
    let gif = this.gifllenadoGrande()

    setTimeout(() => {
      let div = document.getElementById('imagenGrande');
      divGif.removeChild(gif)
      div.innerHTML = "";

      let img = document.createElement("img");
      img.id = "img5"
      img.src = this.jarraGrandeImagenes[5];
      img.style.width = "170px";
      img.style.position = "absolute";

      div.appendChild(img)
    }, 1500)

    while (this.jarraGrande.length < 5) {
      this.jarraGrande.push(1);
    }
    console.log('el tamaño de la jarra grande es: ' + this.jarraGrande.length);
  }

  rellenarPequeña() {

    let divGif = document.getElementById('llenadoPequeño');
    let gif = this.gifllenadoPequeño()

    setTimeout(() => {
      let div = document.getElementById('imagenPequeña');
      divGif.removeChild(gif)
      div.innerHTML = "";

      let img = document.createElement("img");
      img.src = this.jarraPequeñaImagenes[3];
      img.id = "imgp3"
      img.style.width = "250px";
      img.style.position = "absolute";

      div.appendChild(img)
    }, 1500)

    while (this.jarraPequeña.length < 3) {
      this.jarraPequeña.push(1);
    }
    console.log('el tamaño de la jarra pequeña es: ' + this.jarraPequeña.length);
  }

  pasarPequeñaGrande() {
    while (this.jarraPequeña.length > 0 && this.jarraGrande.length < 5) {
      this.jarraPequeña.pop();
      this.jarraGrande.push(1);
    }
    console.log('el tamaño de la jarra grande es: ' + this.jarraGrande.length);
    console.log('el tamaño de la jarra pequeña es: ' + this.jarraPequeña.length);

    this.actualizarImagenes();
  }


  
  pasarGrandePequeña() {
    while (this.jarraGrande.length > 0 && this.jarraPequeña.length < 3) {
      this.jarraGrande.pop(1);
      this.jarraPequeña.push(1);
    }
    console.log('el tamaño de la jarra grande es: ' + this.jarraGrande.length);
    console.log('el tamaño de la jarra pequeña es: ' + this.jarraPequeña.length);

    this.actualizarImagenes();
  }



  actualizarImagenes() {
    if (this.jarraGrande.length == 5) {
      this.rellenarGrande();
    }
    else if(this.jarraGrande.length ==0){
      this.vaciarGrande()
    }
    else if (this.jarraGrande.length == 2) {
      let div = document.getElementById('imagenGrande');
      div.innerHTML = "";

      let img = document.createElement("img");
      img.id = "img2"
      img.src = this.jarraGrandeImagenes[2];
      img.style.width = "200px";
      img.style.position = "absolute";

      div.appendChild(img)
    } else if (this.jarraGrande.length == 4) {
      let div = document.getElementById('imagenGrande');
      div.innerHTML = "";

      let img = document.createElement("img");
      img.id = "img4"
      img.src = this.jarraGrandeImagenes[4];
      img.style.width = "200px";
      img.style.position = "absolute";

      div.appendChild(img)
    }
    let divGrande = document.getElementById('imagenGrande');
    let imgGrande = divGrande.querySelector("img");
    imgGrande.style.width = "250px"
    imgGrande.src = this.jarraGrandeImagenes[this.jarraGrande.length];

    if (this.jarraPequeña.length == 0)
      this.vaciarPequeña()

    else if (this.jarraPequeña.length === 3)
      this.rellenarPequeña()

    else if(this.jarraPequeña.length === 2){
      let divGif = document.getElementById('llenadoPequeño');
    let gif = this.gifllenadoPequeño()

    setTimeout(() => {
      let div = document.getElementById('imagenPequeña');
      divGif.removeChild(gif)
      div.innerHTML = "";

      let img = document.createElement("img");
      img.src = this.jarraPequeñaImagenes[2];
      img.id = "imgp2"
      img.style.width = "250px";
      img.style.position = "absolute";

      div.appendChild(img)
    }, 1500)
    }
  }
  

  validarTamaño() {
    let div = document.createElement('div')

    div.style.position = 'absolute'
    div.style.display = 'flex'
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center'
    div.style.height = '50vh'
    div.style.width = '100%'

    let img = document.createElement('img');
    img.src = '/resources/img/felicidades.png'

    let intervalo = setInterval(() => {
      if (this.jarraGrande.length == 4) {
        clearInterval(intervalo)

        div.appendChild(img)
        document.body.appendChild(div)
        this.reiniciarJuego()
      }
    }, 2000);
  }

  reiniciarJuego() {

    setTimeout(() => {
      window.location.href = 'Index.html'
    }, 4500)
  }
}
