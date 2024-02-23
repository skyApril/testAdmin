/**
 * 冒泡排序
 * @param {*} arr 
 */
function sortMy(arr) {
  for (let a = arr.length; a > 0; a--) {
    for (let b = 0; b < a - 1; b++) {
      arr[b] > arr[b + 1] && ([arr[b], arr[b + 1]] = [arr[b + 1], arr[b]]);
    }
  }
}
