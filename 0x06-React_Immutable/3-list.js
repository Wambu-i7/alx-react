import { List } from 'immutable';

export function getListObject(array) {
    // Converts the array to an immutable List
    return List(array);
}

export function addElementToList(list, element) {
    // Appends the string element to the list and returns the updated list
    return list.push(element);
}
