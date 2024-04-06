// Problem 24: Hollow Prime Numbers Pattern
// 2
// 3   3
// 5     5
// 7       7
// 11         11

var n = 11
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
            if(k == 1 || k == i){
                rows += i
            }else{
                rows += " "
            }
        }
        console.log(rows);
    }

}