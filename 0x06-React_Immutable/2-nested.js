import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  const result = array.reduce((acc, key) => (acc ? acc[key] : undefined), object);

  if (result === undefined) {
    return undefined;
  }

  if (typeof result === 'string') {
    return result;
  }

  if (result instanceof Map) {
    return result;
  }

  return undefined;
}

