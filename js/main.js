let energiaBatman = 450;
let energiaRobin = 400;

const personajes = ["batman", "robin", "donatello", "scorpion", "depredador"];

const BATMAN = {
        nombre: "Batman",
        golpeEspecial: 150,
        energia: 450,
    
    };

    console.log(BATMAN);

const ROBIN = {
        nombre: "Robin",
        golpeEspecial: 90,
        energia: 400,
        
    };

    console.log(ROBIN);




alert("Bienvenido a la batalla de super heroes y monstruos");

alert("La primer batalla será entre Batman y Robin");


let jugadorBatman = prompt("Nombre del jugador de Batman");
let jugadorRobin = prompt("Nombre del jugador de Robin");

alert( "Estos son los personajes que en el futuro podrás usar: " + (personajes.toString()));

function conocerPersonaje(){

    let opciones = prompt(`Elige un personaje para aprender más:
    1: Scorpion
    2: Donatello
    3: Depredador
    Escribe 1, 2 o 3.`);

    switch (opciones) {
        case "1":
            let opcion1 = Number;

            const opcionScorpion = [
                {
                  Franquicia: 'Mortal Kombat',
                  TipoGuerrero: 'Ninja / Guerrero',
                  Dificultad: 'Intermedia'
                },

              ];

              alert("Scorpion es un guerrero ninja con habilidades para atacar a distancia, su dificultad es intermedia")
              


            break;

        case "2":
            let opcion2 = Number;

            const opcionDonatello = [
                {
                    Franquicia: "Las tortugas ninjas",
                    TipoGuerrero: "Ninja",
                    Dificultad: "Principiante"
                },

              ];

              alert("Donatello es un personaje de las tortugas ninja, su facilidad para el manejo es principiante y su tipo de guerrero es Ninja");
              


            break;

        case "3":
            let opcion3= Number;

            const opcionDepredador = [
                {
                    Franquicia: "Depredador",
                    TipoGuerrero: "Alienigena",
                    Dificultad: "Experto"
                },
              ];
            
            alert("Depredador es un alienigena cazador, su nivel de dificultad es de Experto")


            break;

            default:
                alert("Esta no es una opcion disponible");
                conocerPersonaje();
    }
}

conocerPersonaje();

alert ("la batalla ha comenzado")

console.log(energiaBatman)
console.log(energiaRobin)

let round = 0;

while (energiaBatman > 0 && energiaRobin > 0){

round+=1    

let golpeBatman = Math.ceil(Math.random()*60)
console.log("El golpe de Batman hizo un daño de " + golpeBatman)
let golpeRobin = Math.ceil(Math.random()*50)
console.log("El golpe de Robin hizo un daño de " + golpeRobin)

if(golpeBatman === golpeRobin){
    energiaRobin -= golpeBatman
    energiaBatman -= golpeRobin
} else if (golpeRobin > golpeBatman){
    energiaBatman -= golpeRobin
    
} else {
    energiaRobin -= golpeBatman
}

console.log("Round número " + round)
console.log("Energia Batman " + energiaBatman)
console.log("Energia Robin " + energiaRobin)
}

if(energiaBatman===energiaRobin){
    document.write=("Ambos perdieron")
} else if(energiaBatman>0){
    document.write(jugadorBatman +" es el ganador")

} else {
    document.write( jugadorRobin + " ha resultado ganador")
}


