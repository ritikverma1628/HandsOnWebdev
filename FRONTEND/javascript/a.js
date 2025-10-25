// let array = [1,2,3,4,5,6,2,3];
// let num=2;
// console.log(array);
// while(array.indexOf(num)!=-1){
//     array.splice(array.indexOf(num),1);
// }
// console.log(array);


// let number = 287152;
// let count= 0 ;
// let copy = number;
// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log(`The number of digits in ${number} is: ${count}`);

// count=0;
// copy=number;
// while(copy>0){
//     copy/=10;
//     count++;
// }
// console.log(`The number of digits in ${number} is: ${count}`);

// will not work as expected cz js stores these numbers as floating point numbers and thus tere division is also a floating point number


// function larger(array, number){
//     let array2 = [];
//     for(let i =0; i<array.length; i++){
//         if(array[i]>number){
//             array2.push(array[i])
//         }
//     }
//     return array2;
// }

// let array = [10,2,3,4,5,61,72];
// let number = 4;
// let array2 = larger(array, number);
// for(let i = 0 ; i< array2.length; i++){
//     console.log(array2[i]);
// }

// function uniqueCharacters(string){
//     let duplicate = string;
//     let ans="";
//     while(duplicate.length!=0){
//         let char = duplicate[0];
//         ans=ans+char;
//         duplicate=duplicate.replaceAll(char,"");
//     }
//     return ans;
// }
// str="abcdabcdefgggh";
// let ans = uniqueCharacters(str);
// console.log(ans);


// function longest(country){
//     let longestc="";
//     for(let i = 0 ; i< country.length ; i++){
//         if(longestc.length<country[i].length){
//             longestc=country[i];
//         }
//     }
//     return longestc;
// }
// country=["Australia","Germany","United States of America"]
// let longestc = longest(country);
// console.log(longestc);

// function numVowels(string){
//     let count= 0;
//     for(let i = 0 ; i<string.length; i++){
//         let c=string[i];
//         if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u'){
//             count++;
//         }
//     }
//     return count;
// }

// let string = "what the fuck";
// console.log(numVowels(string));

// function printRand(start, end){
//     let rand = Math.floor(Math.random()*(end-start+1)) + start;
//     return rand;
// }

// let start = 29;
// let end = 36;
// console.log(printRand(start, end));

// let square = (n)=>(n*n);  arrow functions

// let id = setInterval(()=>{
//     console.log("hello");
// },2000)

// setTimeout(()=>{
//     clearInterval(id);
// },10000)


// let arrayAverage = (array)=>{
//     let sum = 0 ;
//     for(let i=0;i<array.length;i++){
//         sum+=array[i];
//     }
//     return sum/array.length;
// }

// let sum = arrayAverage([1,2,3,4,5,6]);
// console.log(sum);

// let isEven = (n)=>(!(n%2));
// console.log(isEven(10));

// var len = 4;
// function callback() {
//   console.log(this.len);
// }
// const object = {
//   len: 5,
//   method(callback) {
//     callback();
//   },
// };
// object.method(callback, 1, 2);

//do sum of all the elements of array
// let arr = [1,2,3,4,5,60];
// let sum= arr.reduce((sum, element)=>(sum+element));
// console.log(sum);

//check whether all array elements are multiple of 10
// let arr1 = [10,20,30,4,50];
// console.log(arr1.every((el)=>(el%10==0)));

//minimum value of the array 
// let arr2 = [6,2,5,4,3,7];
// console.log(arr2.reduce((min, element)=>Math.min(min, element)));



//use of spread
// let arr3 = [1,2,3,4,5,6];
// console.log(...arr3);

// let arr4 = [6,7,8,9];
// let arr5 = [...arr4];

// let arr6=[...arr4,...arr5];
// console.log(arr6);

// const object={
//   name:"ritik",
//   password:1234
// }

// let object2 = {...object, city:"delhi"};
// console.log(object2);

// let object3 = {...arr4};  //keys are the indices
// console.log(object3)

// let object4 = {..."hello"};   //keys are the indices
// console.log(object4);

//-------------------------------------------------------------------------------------------------

//use of rest
//it is just opposite of spread
//it takes multiple values and combine them to firm an array.
//it's syntax is same as the spreas that is three dots (...)

// function sum (...args){
//   return args.reduce((sum, elements)=>(sum+elements));
// }
// console.log(sum(1,3,5,7,9,2)); //you can give any number of arguments into this function because it uses rest(...) to combine all the arguments up into an array

// By defualt, Every function has a default collection whose name is "arguments", it is not an actual array but just a "collection" of all the arguments passed into a function. Any array method cannot be applied onto the "argumetns" coolection, just the elements can be used from it

// function print(){
//   for(let i = 0 ; i<arguments.length ; i++){
//     console.log(arguments[i]);
//     arguments.push(2);  //will give error
//   }
// }

// print(1,4,6,2,4,5,80);


//----------------------------------------------------------------------------------------------------

// destructuring the array and objects--- means that you are just creating individuals variables out of the values of an array or an on=bject

// let arr7=["ritik","manish", "kavi", "raj", "taj", "komal"];
// let [winner, runnerUp, ...losers] = arr7;  //einner="ritik", runnerUp="manish", losers is an array of rest names

// let student = {
//   name: "ritik",
//   roll: 201,
//   city:"delhi",
//   gender: "male",
//   position:1,
//   country:"USA"
// }

// let {name, roll:RollNumber, country:cntry="India"} = student;


//------------------------------------------------------------------------------------------------------

// let arr8 = [90, 57, 38 , 29 , 10 ];
// let sqArr=arr8.map((el)=>(el*el));
// let sumArr=sqArr.reduce((sum, ele)=>(sum+ele));
// let avg = sumArr/(sqArr.length);
// console.log(avg);



// let arr9 = [1,2,3,4,5];
// let add5 = arr9.map((el)=>(el+5));
// console.log(add5);



// let arr10 = ["ritik", "manish", "raj" ];
// let upper = arr10.map((word)=>(word.toUpperCase()));
// console.log(upper);



// const doubleAndReturnArgs = (array, ...args) => [...array, ...args.map((el)=>el*el)];
// console.log(doubleAndReturnArgs([1,2,3,4,5],1,2,3,4,5));


const name = {
  aname: "Ritik",
  bname: "Verma"
};

const details = {
  city: "Delhi",
  country: "India"
};

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2}) ;
console.log(mergeObjects(name, details));

