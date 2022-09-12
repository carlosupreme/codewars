// In a string we describe a road. There are cars that move to the right and we denote them with ">" and cars that move to the left and we denote them with "<". There are also cameras that are indicated by: " . ".
// A camera takes a photo of a car if it moves to the direction of the camera.

// Task
// Your task is to write a function such that, for the input string that represents a road as described, returns the total number of photos that were taken by the cameras. The complexity should be strictly O(N) in order to pass all the tests.


// Examples
// For ">>." -> 2 photos were taken
// For ".>>" -> 0 photos were taken
// For ">.<." -> 3 photos were taken
// For ".><.>>.<<" -> 11 photos were taken
// For ">.>..<" -> 8 photos were taken

console.log(`">>." expected: 2 result: ${countPhotos(">>.")}`) 
console.log(`".>>" expected: 0 result: ${countPhotos(".>>")}`) 
console.log(`">.<." expected: 3 result: ${countPhotos(">.<.")}`) 
console.log(`".><.>>.<<" expected: 11 result: ${countPhotos(".><.>>.<<")}`) 
console.log(`">.>..<" expected: 8 result: ${countPhotos(">.>..<")}`) 
console.log(`"..<>.>>.><>>.<<<.<>>.>.>>>>>..><<.>.>>..>.>>><><>." expected: 248 result: ${countPhotos("..<>.>>.><>>.<<<.<>>.>.>>>>>..><<.>.>>..>.>>><><>.")}`) 

function countPhotos(road){
  if(!road.includes('.')) return 0;
 
  let res = 0;
  const OPERATIONS = {
    '>' : (i) => res += road.substring(i).match(/[\.]/g)?.length || 0,
    '<' : (i) => res += road.substring(0,i).match(/[\.]/g)?.length || 0,
  }

  for(let i = 0; i < road.length; i++){
    if(road[i] === '.') continue;
    OPERATIONS[road[i]](i);
  }
  
  return res;
}


//NOTE: THIS TIMESOUT IN THE TEST FOR Execution Timed Out (12000 ms)