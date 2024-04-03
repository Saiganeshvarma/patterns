// Problem 3: Inverted Pyramid Pattern
// *********
//  *******
//   *****
//    ***
//     *

var n = 5
for(var i = n ; i>=1 ; i--){
    var rows = ""
    for(var j = 1 ; j<=n-i ; j++){
        rows += " "
    }
    for(var k = 1 ; k<=2*i-1 ; k++){
        rows += "*"
    }
    for(var l = 1 ;l<=n-i ; l++){
        rows += " "
    }
    console.log(rows);
}