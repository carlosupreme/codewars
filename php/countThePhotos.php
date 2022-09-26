<?php

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


function countPhotos($road){
  $arr = str_split($road);
  $res = 0;

  if(!in_array('.',$arr)) return 0;

  for ($i=0; $i < count($arr); $i++) { 
    if($arr[$i] === '<') 
      $res += count(array_filter(array_slice([...$arr],0,$i), fn($el) => $el === '.'));
    else if ($arr[$i] === '>') 
      $res += count(array_filter(array_slice([...$arr],$i,count($arr)), fn($el) => $el === '.'));
  }

  return $res;
}



$result = [];

$result[] = ">>. expected: 2 result: " . countPhotos(">>.");
$result[] = ".>> expected: 0 result: " . countPhotos(".>>");
$result[] = ">.<. expected: 3 result: ". countPhotos(">.<.");
$result[] = ".><.>>.<< expected: 11 result:" . countPhotos(".><.>>.<<");
$result[] = ">.>..< expected: 8 result:". countPhotos(">.>..<");
$result[] = "..<>.>>.><>>.<<<.<>>.>.>>>>>..><<.>.>>..>.>>><><>. expected: 248 result:" . countPhotos("..<>.>>.><>>.<<<.<>>.>.>>>>>..><<.>.>>..>.>>><><>.");

var_export($result);