// Problem 7: Inverted Right Triangle Pattern
// *****
// **** 
// ***  
// **   
// *    

var n = 5
for(var i = 1 ; i<=n ; i++){
    var rows = ""
    for(var j = 1 ; j<=n-i ; j++){
        rows += "*"
    }
    console.log(rows);
}