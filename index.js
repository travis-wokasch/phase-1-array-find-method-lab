//write function that receives one argument as an array of Javascript Object
//Object has two properties, year and result
//Use .find to test the object for result = W
//return year that W occurred

function superbowlWin(kcChiefs){
    let winYear = kcChiefs.find(superbowl => superbowl.result=== 'W')
    if (winYear){
        return winYear.year}
}
