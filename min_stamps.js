// Given: n = total postage needed, stampTypes = an array of stamp values available
// Supply of each type of stamps is unlimited
// Write a function that returns the minimum stamps needed at total value n
// Edge case 1: n = 5, stampTypes = [25] >> best case is use one 25c stamp even if we will waste money
// Edge case 2: n = 6, stampTypes = [4, 3, 1] >> best case is [3, 3] not [4, 1, 1]


function minStampsNeeded(n, stampTypes) {

    // take care of edge case 1
    if (n < Math.min(stamTypes)) {
        return 1;
    } 
    
    // we make an array to hold the minimum possible stamps needed
    // at every total value from 0 to n starting each index with value 0
    var minStampesNeededAtEveryTotalValue = [];
    for (var i = 0; i <= n; i++) {
        minStampesNeededAtEveryTotalValue[i] = 0;
    }

    // index is representing currentTotalValue
    for (var currentTotalValue = 0; currentTotalValue <= n; currentTotalValue++) {

        // set a variable to hold the min stamps needed so far for currentTotalValue
        var currentMinStampsNeeded = 0;

        for (var j = 0; j < stampTypes.length; j++) {

            var stampValue = stampTypes[j];

            if (stampValue <= currentTotalValue) {

                // if we have to use one of this stamp
                var minStampesNeededUsingThisStamp = [stampValue].concat(minStampesNeededAtEveryTotalValue[currentTotalValue - stampValue]);
                currentMinStampsNeeded = Math.min(minStampesNeededUsingThisStamp.length, currentMinStampsNeeded.length);

            }
        }
        // update the array with best case data
        minStampesNeededAtEveryTotalValue[currentTotalValue] = currentMinStampsNeeded;
    }

    return minStampesNeededAtEveryTotalValue[n];
}