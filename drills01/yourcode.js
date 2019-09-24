
function sumArray(sumArray){
  var total = 0;
    for (var i = 0; i < sumArray.length; i++){
      total += sumArray[i];
    }
  return total;
  }


function fitWithinVal(sumArray){
  console.log(sumArray)
//go through the loop/values
//add value to sum
//check if sum is too big
//subtract value if it is
  var total = 0;
  for (var i = 1; i <= sumArray.length; i++){
    for (var j = 0; j <= 30; j++){
      total += sumArray[j];
      console.log(total)
    }
    return total;
  }
}

function getAllNamesShorterThan(){

}

function makeLabel(){

}
