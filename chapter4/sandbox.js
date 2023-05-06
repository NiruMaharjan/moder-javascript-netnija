
//function expression
const speak = function(){
    console.log('good day!');
}


const speak1 = function(name, time){
    console.log(`good  ${time} ${name}`);
}

const speak2 = function(name1='luigi', time1='night'){
    console.log(`good  ${time1} ${name1}`);
}


greet();
speak();
speak1('mario', 'morning');

//function declaration
function greet(){
    console.log('hello there');
}

