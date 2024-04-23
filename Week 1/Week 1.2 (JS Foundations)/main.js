// LET : It allows to alter values anytime
// CONST : Values cannot be changed
// VAR : 














// let a=1;

// a print hoga
// console.log(a);                       














// let a=1;
// a=2;

// 2 Print hoga : Phle a ki value 1 thi ab baad me 2 krdi to 2 print hoga kyuki let allows to alter values anytime
// console.log(a);














// const a=15;
// a=14;

// Ab 15 hi print hona chahiye pr error dega ki a ki values change nhi krskte kyuki usko ek constatnt value assign ki ja chuki hai
// console.log(a);














// let naam="Vishal";
// let sname="Panwar";
// let age=22;
// console.log("My name is " + naam, + sname + " and my age is " + age);












// let a=99;
// if(a>18)
// console.log("Yes");

// else console.log("No");













// ARRAYS

// const persone1="Vishal"
// const gender1="male"

// const person2="Asha"
// const gender2="female"

// // Better way of writing this is in the from of arrays
// const array=["Vishal", "Ayushi", "Aadi"]
// const gen=["male", "female", "male"]

// // Ques : Males ka naam print krwado
// for(let  i=0;i<array.length;i++){
//     if(gen[i]=="male"){
//         console.log(array[i]); 
//     }
// }



// // Ab agl alg array bnana bhi avoid krna hai to ek object bna skte hai jisme 1 object me saari values store hojati hai

// const user1={
//     fname : "Vishal",
//     gender : "male"
// }

// console.log(user1["fname"]); // Vishal Print hoga
// console.log(user1["gender"]); // Male Print hoga















// SET TIMEOUT

function greet(){
    console.log("Hello");
}
  
           // Fun   // Kitne time tk chalana hai
setTimeout(greet, 5000);















