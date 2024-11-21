export default function accessImmutableObject(object, array) {
  const result = array.reduce((acc, key) => acc && acc[key], object);
  
  if (result === undefined || typeof result === 'string' || result instanceof Map) {
    return result;
  }
  
  return undefined;
}
