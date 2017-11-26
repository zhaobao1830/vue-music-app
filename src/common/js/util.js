// 获取min和max之间的随机数,包括max
// Math.random()获取0到1之间的随机数，不包括1
// (max - min + 1)加1是为了获取最大值max
// (max - min + 1) + min) 加min是为了获取min与最大值之间的数
// 因为时个小数，所以最外面要向下取整
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
// 打乱数组，随机排列
// 原理就是获取0到I之间的随机数，然后换了i和j俩个的位置
// 使用_arr是为了操作的时候，不改变arr
export function shuffle (arr) {
  var _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i) // 获取0到i之间的随机数
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}
