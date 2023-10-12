//Vowel Count
function getCount(str) {
    var count=0;
    str.split("").forEach(function(x){
      if(x=='a'||x=='e'||x=='i'||x=='o'||x=='u'){
        count+=1;
      }
    });
    return count;
  }