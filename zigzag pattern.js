// Problem 17: Zigzag Pattern
// *        *
//  *      * 
//   *    *  
//    *  *   
//     **    

var n = 5
for(var i = n ; i>=1 ; i--){
    var rows = ""
    for(var j = 1 ; j<=n-i ; j++){
        rows += " "
    }
    for(var k = 2 ; k<=2*i-1 ; k++){
        if(k == 2 || k == 2*i-1){
            rows += "*"
        }else{
            rows += " "
        }
    }
    console.log(rows);
}