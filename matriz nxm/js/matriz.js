/*
	Name exercise: matriz nxm
	Description: matriz con números aleatorios
	Autor: juan camilo guilombo
	Date: march 26 th 2025
*/

let iterationOne;
let iterationTwo;
let number;
let matriz=[];

for (iterationOne=0;iterationOne<5;iterationOne++){
let objet=[];

	for (iterationTwo=0;iterationTwo<5;iterationTwo++){
	number=Math.floor(Math.random()*100);
	objet.push(number);
}
matriz.push(objet);
}

	console.log(matriz);
