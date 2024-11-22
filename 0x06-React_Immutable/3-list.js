import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  const immutableMap = Map(object);
  return immutableMap.getIn(array);
}
