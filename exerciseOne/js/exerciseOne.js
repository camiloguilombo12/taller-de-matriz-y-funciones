/*
	Name exercise: exerciseOne
	Description: matriz y suma
	Autor: juan camilo guilombo
	Date: march 27 th 2025
*/

let matriz =[];
let sumaFilas = [];
let number;
let interationOne;
let interationTwo;
let interationThree;
let interationThreeLow;
let interationFour;
let interationFourLow;
let suma;
let sumaTwo;
let sumaColumnas=[];

	for (interationOne=0; interationOne<5; interationOne++)  {
	let objet= [];
	for (interationTwo=0; interationTwo<5; interationTwo++)  {
		number = Math.floor(Math.random() * 100);
    		objet.push(number);}
matriz.push(objet);		
}

	console.log(matriz);
 
for (interationThree=0; interationThree<5; interationThree++) {
suma=0;
for  (interationThreeLow=0; interationThreeLow<5; interationThreeLow++) {
suma+=matriz[interationThree][interationThreeLow];}
	sumaFilas[interationThree] =suma;
}

for (interationFour=0; interationFour<5; interationFour++) {
sumaTwo=0;
for (interationFourLow=0; interationFourLow<5; interationFourLow++) {
sumaTwo+=matriz[interationFourLow][interationFour];
	sumaColumnas[interationFour]=sumaTwo;
}

}

console.log("sum of rows:"+sumaFilas);
console.log("sum of colums:"+sumaColumnas)














