/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if (arr) {
    let set = new Set();

    for (let key of arr) {
      set.add(key);
    }

    return Array.from(set);
  } else {
    return [];
  }
}
