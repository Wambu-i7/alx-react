const { List, Map } = require('immutable');

function concatElements(page1, page2) {
    return List(page1.concat(page2));
}

function mergeElements(page1, page2) {
    const mergedMap = Map(page1).mergeWith((v1, v2) => v2, Map(page2));
    return List(mergedMap.values());
}

module.exports = {
    concatElements,
    mergeElements
};

