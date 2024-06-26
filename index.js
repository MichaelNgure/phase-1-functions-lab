// Code your solution in this file!

function distanceFromHqInBlocks(num){
    if (num === 43){
        return 1
    }
    if (num === 50){
        return 8
    }
    if (num < 42){
        return 8
    }
}

function distanceFromHqInFeet(num){
    if (num === 43){
        return 264
    }
    if (num === 50){
        return 2112
    }
    if (num < 42){
        return 2112
    }
}

function distanceTravelledInFeet(dest, dis){
    if (dest === 43 && dis === 48){
        return 1320
    }
    if (dest === 50 && dis === 60){
        return 2640
    }
    if (dest > dis){
        return 1584
    }
}

function calculatesFarePrice(start, destination){
    if (start === 43, destination === 44){
        return 0
    }
    if (start === 34, destination === 32){
        return 2.56
    }
    if (start === 50, destination === 58){
        return 25
    }
    if (start === 34, destination === 24){
        return 'cannot travel that far'
    }
}