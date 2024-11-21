import { Map } from 'immutable';

function mergeDeeplyElements(page1, page2) {
    const map1 = Map(page1);
    const map2 = Map(page2);

    const mergedMap = map1.mergeWith((value1, value2) => {
        if (value1 === value2) {
            return value1;
        }
        return [value1, value2];
    }, map2);

    return mergedMap.toList();
}

export { mergeDeeplyElements };
