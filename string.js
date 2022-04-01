function stringLength(string) {
    if (string.length >= 1 && string.length <= 10)  {
    return string; 
    }else{
        console.log("Error");
    }
  }
  module.exports = stringLength;