function fizzbuzz(number){ 
    if ( number>100 || number<0 || isNaN(number)|| Number.isInteger(number)==false){
        return "error"
    }
    if (number %3 == 0 && number %5 != 0){
        number = "fizz"
        return number
    }
    if (number %5 == 0 && number %3 != 0){
        number = "buzz"
        return number
    }
    if (number %3 == 0 && number %5 == 0){
        number = "fizzbuzz"
        return number
    }
    
    else {
        number = number.toString()
        return number
    }
}

// function createArray(){
//     var n = 100;
//     var array = Array.from({length: n}, (item, index) => index+1);
//     for (let index = 0; index < array.length; index++) {
//         array[index] = fizzbuzz(array[index])
//    }
//    console.log(array)
//    return array 
// }

function createArray(){
    for (let index = 1; index < 101; index++) {
        console.log(fizzbuzz(index))
   }
}

createArray()
     
module.exports = fizzbuzz;
module.exports = createArray;