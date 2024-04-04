// Problem 19: Triangle Pattern
// 1
// 12
// 123
// 1234
// 12345

var n = 5
for(var i = 1 ; i<=n ; i++){
    var rows = ""
    for(var j = 1 ; j<=i ; j++){
        rows += j
    }
    console.log(rows);
    
}
