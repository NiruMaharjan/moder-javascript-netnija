

//function expression
const speak = function(){
    console.log('good day');
};

const speak1 = function(name="luigi", time){
    console.log(`good ${time} ${name}`);
}

speak();
speak1('niru','morning');
greet();


//function declaration
function greet(){
    console.log('hello there');
}

//arrwo function version of greet() function is
//const greet = () =>'hello world';

//function returning  value
const calcArea = function(radius){
    // let area = 3.14 *radius**2
    // return area;
    return 3.14 *radius **2;
}

const area = calcArea(4);
console.log(area);


//arrow function
const calcArea1 = (radius) =>{
   return 3.14 *radius **2;
}

console.log(`The area is:`,calcArea1(5));