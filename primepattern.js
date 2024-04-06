// Problem 23: Prime Numbers Pattern
// 2
// 3 3
// 5 5 5
// 7 7 7 7

var n = 10
for(var i = 1 ; i<=n ; i++){
    var isPrime = true
    for(var j = 2 ; j<i ; j++){
        if(i % j == 0){
            isPrime = false
        }
    }
    if(isPrime == true){
        var rows = ""
        for(var k = 1 ; k<=i ; k++){
            rows += i
        }
        console.log(rows);
    }

}
