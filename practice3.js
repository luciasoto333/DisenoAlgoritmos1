cost1 = parseInt(prompt("Escribe el precio 1: "));
cost2 = parseInt(prompt("Escribe el precio 2: "));
cost3 = parseInt(prompt("Escribe el precio 3: "));
function costos(){
if (cost1 > cost2 && cost1 > cost3)
console.log("Los precios bajos son: " + cost2 + ", " + cost3)
if (cost2 > cost1 && cost2 > cost3)
console.log("Los precios bajos son: " + cost1 + ", " + cost3)
if (cost3 > cost1 && cost3 > cost2)
console.log("Los precios bajos son: " + cost1 + ", " + cost2)
}
costos();