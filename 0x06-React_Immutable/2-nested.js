export default function accessImmutableObject(object, array) {
    return array.reduce((acc, key) => {
        if (acc && acc[key] !== undefined) {
            return acc[key];
        }
        return undefined;
    }, object);
}
