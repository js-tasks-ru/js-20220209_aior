/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (obj) {
    let map = new Map();
    for (let key in obj) {
      map.set(obj[key], key); // John, 30, true
    }
    return Object.fromEntries(map.entries());
  } else {
    return undefined;
  }
}
