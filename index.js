// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber > 42) {
        return blockNumber - 42
    }
    else if (blockNumber < 42) {
        return 42 - blockNumber
    }

}


function distanceFromHqInFeet(blockNumber) {
    let distance = distanceFromHqInBlocks(blockNumber)
    console.log(distance, blockNumber)
    return distance * 264
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return (destination - start) * 264
    }
    else if (start > destination) {
        return (start - destination) * 264
    }

}

function calculatesFarePrice(start, destination) {
    let distanceTravelled = distanceTravelledInFeet(start, destination)
    if (distanceTravelled < 400) {
        return 0
    }
    else if (distanceTravelled < 2000) {
        return (distanceTravelled - 400) * .02

    }
    else if (distanceTravelled < 2500) {
        return 25
    }

    else if (distanceTravelled > 2500) {
        return `cannot travel that far`
    }

}