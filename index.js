// Code your solution in this file!

function distanceFromHqInBlocks(num){
    let headquaters = 42
    if (num > headquaters){
        let actualDistance = num - headquaters
        return actualDistance
    }else if (num < headquaters){
        return headquaters - num
    }else {
        return `in the same block`
    }
}

function distanceFromHqInFeet(num){
    return distanceFromHqInBlocks(num) * 264

}

function distanceTravelledInFeet(start, dest){
    // const distancebetween = dest - start
    // return Math.abs(distancebetween) * 264
    if (start < dest){
        return (dest - start) * 264
    }else {4
        return (start - dest) * 264
    }
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400){
        return 0
    }else if (distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02
    }else if (distance > 2000 && distance < 2500){
        return 25
    }else {
        return 'cannot travel that far'
    }
}
