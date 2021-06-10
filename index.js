function distanceFromHqInBlocks(location) {
    const blocks = 42;
     if (location > 42) {
         return location - blocks;
     }
     else { (location < 42)
      return blocks - location;
     }
}
function distanceFromHqInFeet(location) {
    if (location > 42){
    return distanceFromHqInBlocks(location)*264;
    }
    else {(location < 42)
    return distanceFromHqInBlocks(location)*264 }
}
function distanceTravelledInFeet(num1, num2){
    if (num1 > num2){
        return (num1 - num2)*264;
    }
    else {
        return (num2 - num1) *264;
    }

}
function calculatesFarePrice(start, destination){

    const distance = distanceTravelledInFeet(start, destination)
    console.log(distance)
    if (distance < 400){
        return 0;}
    else if (distance< 2000){
    return (distance - 400) * 0.02;
    }
    else if (distance < 2500) {
    return 25;
    }
    else return 'cannot travel that far';
    }


