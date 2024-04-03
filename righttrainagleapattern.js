// Problem 5: Right Triangle Pattern
// *        
// **       
// ***      
// ****     
// *****

var n = 5
for(var i = 1 ; i<=n ; i++){
    var rows = ""
    for(var j = 1 ; j<=i ; j++){
        rows += "*"
    }
    console.log(rows);
}