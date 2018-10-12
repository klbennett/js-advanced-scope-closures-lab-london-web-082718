// produceDrivingRange returns a function that we can then use to calculate if a trip is too large for a driver.
function produceDrivingRange(blockRange) {
    return function(startBlock, endBlock) {
        let distance = endBlock.slice(0,-2) - startBlock.slice(0,-2)
        if (distance > blockRange) {
                return `${distance - blockRange} blocks out of range`
        }else
        return `within range by ${blockRange - distance}`
    }
}

// Returns a function that then calculates a tip.
function produceTipCalculator(fare) {
    return function getTipAmount(percentage) {
        return percentage/10
    }
}

// function that returns a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.
function createDriver(name) {
let driverId = 0;
return class {
    constructor(name) {
    this.name = name;
    this.id = driverId++
    }
}
}
