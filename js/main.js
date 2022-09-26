let energiaBatman = 450;
let energiaRobin = 400;

let jugadorBatman = prompt("Nombre del jugador de Batman");
let jugadorRobin = prompt("Nombre del jugador de Robin");

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
    console.log=("Ambos perdieron")
} else if(energiaBatman>0){
    console.log( jugadorBatman +" es el ganador")

} else {
    console.log( jugadorRobin + " ha resultado ganador")
}