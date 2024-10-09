/**
 * This function takes an array (originalArray) as a parameter and returns a function that can be used to filter the elements of this array
 * @param originalArray
 * @returns {(function(*, *): (*))|*}
 */

function cs142MakeMultiFilter(originalArray) {
    let currentArray = originalArray.slice();

    function arrayFilterer(filterCriteria, callback) {
        if (typeof filterCriteria === 'function') {
            currentArray = currentArray.filter(filterCriteria);
        }

        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray);
        }

        return arrayFilterer;
    }

    return arrayFilterer;
}

// Another way to implement the function
// function cs142MakeMultiFilter(originalArray) {
//     let currentArray = originalArray.slice();
//
//     function arrayFilterer(filterCriteria, callback) {
//         if (typeof filterCriteria !== 'function') {
//             return currentArray;
//         }
//
//         let newArray = [];
//         for (let i = 0; i < currentArray.length; i++) {
//             if (filterCriteria(currentArray[i])) {
//                 newArray.push(currentArray[i]);
//             }
//         }
//         currentArray = newArray;
//
//         if (typeof callback === 'function') {
//             callback.call(originalArray, currentArray);
//         }
//
//         return arrayFilterer;
//     }
//
//     return arrayFilterer;
// }