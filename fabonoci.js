// Problem 21: Fibonacci Pattern
// 1
// 1 1
// 1 1 2
// 1 1 2 3
// 1 1 2 3 5

var n = 5
for(var i = 1 ; i<=n ; i++){
    var a = 1
    var b = 1

    var rows = ""
    for(var j = 1 ; j<=i ; j++){
        rows += a + " "
        var temp = a+b
        a = b
        b = temp
    }
    console.log(rows);
}
