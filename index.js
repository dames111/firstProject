// let person = {
//     name= 'Dames',
//     address= 'Makati'
// };

// console.log(person.name);   

// let array = ['A','B','C'];
// array[3] = 'D'; 
// console.log(array[2]);

// function Calculator(number) {
//     return number * number;
//     }
//     Console.log(Calculator(2));
    
// Encapsulation
//     let employee = {
//     value1: 30,
//     value2: 40,
//     value3: 50,

//     myFunction: function(){
//         return this.value1 + (this.value2 * this.value3);
//     }
// };
// employee.myFunction();

// const Circle = {
//     radius: 1,
//     axis: 2,

//     diameter: function(){
//         console.log("Drawer");
//     }
// }
// Circle.diameter();

function identity(Name,Age){
    return{
       Name,
       Age,
       identity: function(){
          console.log("Malakas");
       }
    };
}


console.log(identity('Pogi').Name, identity('pogs').Age);

// const Name2 = new identity('Pogi',21);
// console.log(Name2);




// function multiply(num1,num2){
//    return(num1 + num2);   
// }
//     console.log(multiply(2,2));

// function tellFortune(nofChildren, partnersName, geograpghicLocation,jobTitle){
//       var future = 'noOfChildren' + nofChildren + 'partnersName' + partnersName + 'geographicLocation' + geograpghicLocation + 'jobtitle' + jobTitle+ '.' ;      
   
//    console.log(future);
// }

// tellFortune(21, 'Danica', 'Makati', 'SoftwareEngineer');


// function calculateDogAge(age,age2){
//   return(age*age2)
// }
// console.log(calculateDogAge(2,2));

// function calculateDogAge2(age){
//    var dogAge = 7*age;
//    console.log(dogAge);
// }

// calculateDogAge2(3);


//Anonymous Function
// var greet = function(name){
//    console.log("Hello " + name + "!");
// }
// greet('Dames');

// function names(name){
//       return{
//          name,

//       }
//    }

// names("Dames");