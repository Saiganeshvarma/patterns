// Problem 2: Hollow Pyramid Pattern
//     *    
//    * *   
//   *   *  
//  *     * 
// *********

var n = 5
for(var i = 1 ; i<=n ; i++){
    var rows = ""
    for(var j = 1 ; j<=n-i ; j++){
        rows += " "
    }
    for(var k = 1 ; k<=2*i-1 ; k++){
        if(k == 1 || k == 2*i-1 || n == i ){
            rows += "*"
        }else{
            rows += " "
        }
    }
    for(var l = 1 ; l<=n-i ; l++){
        rows += " "
    }
    console.log(rows);
}