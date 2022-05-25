// Code your solution in this file!
const distanceFromHqInBlocks=function(street){
    return Math.abs(42-street)
}
const distanceFromHqInFeet=function(street){
    return Math.abs(42-street)*264
}

const distanceTravelledInFeet=function(start,finish){
    return Math.abs(start-finish)*264
}

const calculatesFarePrice=function(start,destination){
   const distance=distanceTravelledInFeet(start,destination)
    if (distance===264){
        return 0
    } else if (400<=distance && distance<=2000){
        return (distance-400)*.02
    } else if (2000<distance && distance<2500){
        return 25
    } else {
        return 'cannot travel that far'
    }

}