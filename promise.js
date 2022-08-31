//1.Write one example explaining how you can write a callback function ?

//A callback function is passed as an argument to another function that executes the callback based on the result.In this below example,we are passing printSum() function as an argument to Calsum() function.
function printSum(a){
    console.log(a);
}
function calSum(num1,num2,cb){
    let sum=num1+num2;
    cb(sum);
}
calSum(20,10,printSum)

//2."Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

const printNum=()=>{
    setTimeout(() => {
        console.log('1')
    }, 1000);
    setTimeout(() => {
        console.log('2')
    }, 2000);
    setTimeout(() => {
        console.log('3')
    }, 3000);
    setTimeout(() => {
        console.log('4')
    }, 4000);
    setTimeout(() => {
        console.log('5')
    }, 5000);
    setTimeout(() => {
        console.log('6')
    }, 6000);
    setTimeout(() => {
        console.log('7')
    }, 7000);
}
printNum();

// const printNumbersForEvery1sec = (n)=>{
//   for (let i = 1; i <= n; i++) {
//     setTimeout( () =>{
//       console.log(i)
//     }, i * 1000)
//   }
// }

// printNumbersForEvery1sec(7);

//3.Explain callback hell.

//callback hell is essentially nested callbacks stacked below one another forming a pyramid structure.every callback depends/waits for the previous callback,thereby making a pyramid structure
//that affects the readability and maintainability of the code.

//4."Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
    
      let num =new Promise((fullfilled,reject)=>{
     
        setTimeout(()=>{
            fullfilled(console.log("1"))
        },1000)
       
    }).then( ()=> new Promise((fullfilled,reject)=>{
    
       setTimeout(()=>{
        fullfilled(console.log("2"))
       },2000)
    
    }) ).then( ()=> new Promise((fullfilled,reject)=>{
    
       setTimeout(()=>{
        fullfilled(console.log("3"))
       },3000)
    
    }) ).then(()=> new Promise((fullfilled,reject)=>{
       
        setTimeout(()=>{
            fullfilled(console.log("4"))
        },4000)
    
    })).then(()=> new Promise((fullfilled,reject)=>{
       
        setTimeout(()=>{
            fullfilled(console.log("5"))
        },5000)
    })).then( ()=> new Promise((fullfilled,rej)=>{
       
        setTimeout(()=>{
           fullfilled(console.log("6"))
        },6000)
    
    })).then(()=> new Promise((fullfilled,rej)=>{
        
        setTimeout(()=>{
            fullfilled(console.log("7"))
            console.log("end of promises");
        },7000)
    }));


//5.Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

function foo(condition){
  const apiResponse=new Promise(function(response,reject){
    if(condition==="yes"){
      response("promise Resolved");
    }
    else {
      reject("promise rejected");
    }
  })
  return apiResponse;
}
foo('')
.then(function(data){
  console.log(data);
})
.catch(function(err){
  console.log(err);
})
//6.Create examples to explain promises function

//when we call an API ,we wrap it into promise .if server is running or API is fine,then it will return success.if the API is invalid,then it will return an error.
//promise is always binded to a condition behind it.

//example------
function marks(mark){
  const apiResponse=new Promise(function(response,reject){
    if(mark>90){
      response("you will get chocolates")
    }
    else{
      reject("you will get punishment.")
    }
  })
  return apiResponse;
}
marks(93)
.then(function(data){
  console.log(data);
})
.catch(function(err){
  console.log(err);
});

//7.Create examples to explain callback hell function.

let words = document.querySelectorAll(".word");
  
const animateAll = (animate) => {
    setTimeout(() => {
        animate(words[0]);
        setTimeout(() => {
            animate(words[1]);
            setTimeout(() => {
                animate(words[2]);
            }, 1000)
        }, 1000)
    }, 1000)
}

const animate = (word) => {
    word.classList.add("animate");
}

animateAll(animate);

//8.Create examples to explain async await function.

//async and await makes our code asynchronous.these are like syntactical sugar for promises.async always goes with the function.await is only
//valid inside the async function.async makes a function return a promise while await makes a function wait for a promise.
//example-------
const getData = async() => {
  var y = await "Hello World";
  console.log(y);
}

console.log(1);
getData();
console.log(2);

//9.explain promise all function with examples.

//The Promise.all() method is actually a method of Promise object that takes an array of promises(an iterable) as an input.
//. It returns a single Promise that resolves when all of the promises passed as an iterable, which have resolved or when the iterable contains no promises.
//example--------

p1 = Promise.resolve(50);
p2 = 200
p3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'geek');
});

Promise.all([p1, p2, p3]).then(function(values) {
    console.log(values);
});