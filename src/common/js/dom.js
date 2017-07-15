export function hasClss (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.calssName)
}

export function addClass (el, className) {
  if (hasClss(el, className)) {
    return
  }
  let newCLsss = el.className.split(' ')
  newCLsss.push(className)
  el.className = newCLsss.join(' ')
}
