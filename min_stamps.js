function minStampsNeeded(n, stampTypes) {
    
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