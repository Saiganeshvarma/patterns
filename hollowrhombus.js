// Problem 12: Hollow Rhombus Pattern
//     *    
//    * *   
//   *   *  
//  *     * 
// *       * 
//  *     * 
//   *   *  
//    * *   
//     *    

var n = 5
for(var i = 1 ; i<=n ; i++){
    var rows = ""
    for(var j = 1 ; j<=n-i ; j++){
        rows += " "
    }
    for(var k = 1 ; k<=2*i-1 ; k++){
        if(k == 1 || k == 2*i-1){
            rows += "*"
        }else{
            rows += " "
        }
    }
    console.log(rows);
}

var n = 5
for(var i = n ; i>=1 ; i--){
    var rows = ""
    for(var j = 1 ; j<=n-i ; j++){
        rows += " "
    }
    for(var k = 1 ; k<=2*i-1 ; k++){
        if(k == 1 || k == 2*i-1){
            rows += "*"
        }else{
            rows += " "
        }
    }
    console.log(rows);
}