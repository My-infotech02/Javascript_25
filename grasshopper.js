//Grasshopper - Summation
var summation = function (num) {
    let sum=0;
    while(num!=0){
      sum+=num;
      num-=1;
    }
    return sum;
  }