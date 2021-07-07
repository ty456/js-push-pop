// array index
var age =[15,22,36,45,14,78,88];
console.log(age[4]);



// array theke kono element niye varisble e rakhar way
var allAge =[25,22,33,47,66,47];
var matureAge = allAge[3];
console.log(matureAge);


// array update
var friendsAge=[25,12,17,19,36];
friendsAge[2]=55;
console.log(friendsAge);

// array theke element er position  indexOf
 var clientAge =[25,12,19,27,13];
  var position = clientAge.indexOf(27);
  console.log(position);

/*
 serially outputs
14
47
[ 25, 12, 55, 19, 36 ]
3 
*/



//section 2



//element adding in array.

var ageList=[25,12,44,33,66,]; // here the element will be added at the last with push method
ageList.push(77);
console.log(ageList);

// how many elements in the array with lenght method
var ageList=[25,12,44,33,66,];
console.log(ageList.length);  // here the array length is 5
ageList.push(77);
console.log(ageList.length); // but here the array length is 6

 /*  code output
 [ 25, 12, 44, 33, 66, 77 ]
5
6
*/



// section 3



//delete element from an array with pop method
var friendsAge=[22,25,41,56,47,33]
friendsAge.pop();
console.log(friendsAge); // this methos delets the last element


 //delete element from an array with shift method

 var nameList=['tuli','bala','rumi','asad'];
 nameList.shift();
 console.log(nameList); // this method delets the very first element from the array.

 /* 
 output
 [ 22, 25, 41, 56, 47 ]
[ 'bala', 'rumi', 'asad' ]
*/