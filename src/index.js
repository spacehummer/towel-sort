
// You should implement your task here.

/**
 * Main task function.
 * @param matrix
 * @return {*|*[]}
 */
function towelSort (matrix) {

    console.log("Source 2-D Array to log:", matrix);

    // If no args for towelSort() function specified, return empty Array.
    if (!matrix) {
        return [];
    }

    let outputArr = [];

    // Reduce is used for push every Array from Array.
    outputArr = matrix.reduce((accumulator, currentArray, index) => {
        if (index % 2 === 0) {
            // push Array
            accumulator.push(...currentArray);
        } else {
            // push reversed Array
            accumulator.push(...currentArray.reverse());
        }
        // return accumulator to next iteration.
        return accumulator;
    }, []);

    // return result
    return outputArr;
}

// Export for tests.
module.exports = towelSort;


// Simple tests
testArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(towelSort(testArr));
