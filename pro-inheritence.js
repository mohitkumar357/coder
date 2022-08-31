//Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

const grandfather={
    property:"2 acre land",
    house:"delhi"
}

const father={
  name:"Ramesh",
  income:"40000"
}
father._proto_=grandfather;
console.log(father);

//Write code to explain prototype chaining.

//Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. 

const mohan={
    property:"2acre land",
    villa:"in gurgaon",
    getProperty:function(){
      return this.property;
    }
  }
  
  console.log(mohan.getProperty());
  const suresh=Object.create(mohan); 
  console.log(suresh.getProperty());
  const son=Object.create(suresh);
  
  son.getProperty=function(){
    return "Son's property";
  }
  console.log(son.getProperty());

//Add a method to calculate sum of all elements in Array in array's prototype, use that method to calculate sum for multiple arrays.


let total={
  getSum:function(){
    let sum=arr.reduce((acc,cum)=>acc+cum,0);
    console.log(sum);
  }
}
let arr=[1,2,3,4,5,6,7,8,9,10];
total.getSum();


//Write a JavaScript function to retrieve all the names of object's own and inherited properties.

let student={
  name:"Aman",
  year:"2016"
}
function names(){
  let keys=Object.keys(student);
  console.log(keys);
  let value=Object.values(student);
  console.log(value);
}
names();