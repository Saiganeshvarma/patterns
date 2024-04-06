// Problem 25: Palindrome Pattern
// 1
// 1 2 1
// 1 2 3 2 1
// 1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1


var n = 5
for(var i = 1 ; i<=n ; i++){
    var rows = ""
    for(var j = 1 ; j<=i ; j++){
        rows += j + " "
    }
    for(var k = i-1 ; k>=1 ; k--){
        rows += k + " "
    }
    console.log(rows);
}