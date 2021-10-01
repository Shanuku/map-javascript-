// console.log("helo")
// console.log("helooooo")


// //Q1
//  var arr =  [2,5,20,30,40,50];
//  var newArr = arr.map(function(value){
//      if (value<40)
//      return value+value;

// })
// console.log(newArr)

// //Q2

// var arr =  [1,2,3,4,5,6,7,8,9,"kumar"];
// var newArr = arr.map(function(value){
//     if (value<5)
//     return value*value;

// })
// console.log(arr)
// console.log(newArr)

// // map calls a provide callback function once for each  element in an array, in order, and returns a new array from the result


// //Q 3

// var arr =  [1,2,3,4,5,6,7,8,9,"sonu"];
// var newArr = arr.map(function(value){
//     if (value)
//     return value+1;

// })
// console.log(newArr)



// Q4


// var fruits = new Map([
//     ["mango", 100],
//     ["apple", 300],
//     ["orange", 200]
//   ]);
//   price = fruits.get("apple")
// console.log(price);



//Q5
 
// var number = [1,2,3,5,6,7,"kum"];
// const doubled = number.map(item => item * 2);
// console.log(doubled);
  
// //Q6
//  var my_map = new Map();
//  my_map.set(1, "first",5);
//  my_map.set(2, "second");
//  my_map.set(3, "third");
//  my_map.set(4, "fourth");
//  console.log(my_map.delete(2));
//  console.log("the key value of the map ","after deleteion" );
//  my_map.forEach(function(item, key, mapObj){
//    console.log(key.toString(),":"," ",item.toString());
//  })

 //Q7

//  function fun() {
//    var arr = [2,56,78,34,65];
//    var new_arr = arr.map(function (num) {
//      return num /5 ;
//    })
//    console.log(new_arr);
//  }
//  fun()

 //Q8


// var myMap = new Map();
//  var myMap1 = new Map();
//  myMap.set(20)
//  myMap1.set(8);
//  console.log(myMap.has(20));
//  console.log(myMap1.has(20));

//Q9

var myMap = new Map();
myMap.set(0, "map");
myMap.set(3,"kumar");
console.log(myMap.size);
myMap.clear();
