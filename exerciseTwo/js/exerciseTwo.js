/*
	Name exercise: exercise two
	Description: Sum of vector forces and calculation of total acceleration.
	Autor:juan camilo guilombo osorio
	Date: March  30th 2025
*/

const forces=[
[5, 0],
[-2, 3],
[1, -1]
];

const mass= 2;


let iterationOne;
let iterationTwo;
let NetForce;
let acceleration;
let valueAcceleration;


for(iterationOne=0; iterationOne<3; iterationOne++){
	acceleration= [];
	NetForce=0;
	for(iterationTwo=0; iterationTwo<2; iterationTwo++){
	NetForce=forces[iterationOne][iterationTwo]+NetForce;
	
	}
	valueAcceleration= NetForce/mass;
	acceleration.push(valueAcceleration);
	console.log("The acceleration is:", +valueAcceleration, "m/sg^2");	
}
