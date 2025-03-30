/*
	Name exercise: exercise three
	Description: simulates the movement of an object with constant acceleration, for several seconds
	Autor:juan camilo guilombo osorio
	Date: March  30th 2025
*/

const acceleration=[2,1];
const initialVelocity=[4,0];
const initialPosition=[0,0];
const steps=5;
let iterationOne;
let iterationTwo;
let positionForTime;
let netTime;
let time=0;
let timeArray=[];

for(iterationOne=0; iterationOne<steps; iterationOne++){
	NetTime=[];
	time++	
	 for (let iterationTwo = 0; iterationTwo < 2; iterationTwo++) {
	positionsForTime= initialPosition[iterationTwo]+initialVelocity[iterationTwo]*time+(1/2)*acceleration[iterationTwo]*time*time;
	NetTime.push(positionsForTime);
	}
	timeArray.push(NetTime)
	
	
}
console.table(timeArray);
	
