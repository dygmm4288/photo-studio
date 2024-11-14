export const uuid = () => crypto.randomUUID();

export const omitObject = (obj, keysToOmit) => {
  if (!Array.isArray(keysToOmit)) {
    keysToOmit = [keysToOmit];
  }

  return Object.keys(obj).reduce((newObj, key) => {
    if (!keysToOmit.includes(key)) {
      newObj[key] = obj[key];
    }
    return newObj;
  }, {});
};
