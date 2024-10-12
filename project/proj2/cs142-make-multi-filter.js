"use strict";

/**
 * This function takes an array (originalArray) as a parameter and returns a function that can be
 * used to filter the elements of this array
 * @param originalArray
 * @returns {(function(*, *): (*))|*}
 */

function cs142MakeMultiFilter(originalArray) {
    let currentArray = originalArray.slice();

    function arrayFilterer(filterCriteria, callback) {
        if (typeof filterCriteria !== 'function') {
            return currentArray; // Return the current array if the filterCriteria is not a function
        }

        currentArray = currentArray.filter(filterCriteria);

        // Call the callback function with the original array as this
        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray);
        }

        return arrayFilterer; // Allow multiple arrayFilterer functions operating at the same time
    }

    return arrayFilterer;
}

/* Another Implementation
function cs142MakeMultiFilter(originalArray) {
    let currentArray = originalArray.slice();

    function arrayFilterer(filterCriteria, callback) {
        if (typeof filterCriteria !== 'function') {
            return currentArray;
        }

        let newArray = [];
        for (let i = 0; i < currentArray.length; i++) {
            if (filterCriteria(currentArray[i])) {
                newArray.push(currentArray[i]);
            }
        }
        currentArray = newArray; // Manual Update

        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray);
        }

        return arrayFilterer;
    }

    return arrayFilterer;
}
*/