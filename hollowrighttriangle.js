// Problem 8: Hollow Inverted Right Triangle Pattern
// *****
// *   *
// *  *
// * * 
// *    
var n = 5
for(var i = n ; i>=1 ; i--){
    var rows = ""
    for(var j = 1 ; j<=i ; j++){
        if(j == 1 || j == i || n==i){
            rows += "*"
        }else{
            rows += " "
        }
    }
    console.log(rows);
}