// Problem 22: Hollow Fibonacci Pattern
// 1
// 1 1
// 1   2
// 1     3
// 1       5
var n = 5
for(var i = 1 ; i<=n ; i++){
    var a = 1
    var b = 1

    var rows = ""
    for(var j = 1 ; j<=i ; j++){
        if(j == 1 || j == i){
            rows += a + " "
        }else{
            rows += " "
        }

        var temp = a+b
        a = b
        b = temp
    }
    console.log(rows);
}
