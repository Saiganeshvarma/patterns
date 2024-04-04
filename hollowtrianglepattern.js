// Problem 20: Hollow Triangle Pattern
// 1
// 2 2
// 3   3
// 4     4
// 5       5


var  n = 5
for(var i = 1 ;i<=n ; i++){
    var rows = ""
    for(var j = 1 ; j<=i ; j++){
        if(j == 1 || j == i){
            rows += i
        }else{
            rows += " "
        }
    }
    console.log(rows);
}