const { List, Map } = require('immutable');

// Function to concatenate two arrays into an immutable List
function concatElements(page1, page2) {
    return List(page1.concat(page2)); // Concatenates the two arrays and converts them to an immutable List
}

// Function to merge two objects into an immutable List, with page2's values overriding page1's for duplicates
function mergeElements(page1, page2) {
    const mergedMap = Map(page1).mergeWith((v1, v2) => v2, Map(page2));
    return List(mergedMap.values()); // Convert the merged map values to a List
}

// Export the functions to be used in other modules
module.exports = {
    concatElements,
    mergeElements
};

