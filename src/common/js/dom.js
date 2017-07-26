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

export function getData (el, name, val) {
  const prefix = 'data-'
  if (val) {
    return el.setAttribute(prefix + name, val)
  }
  return el.getAttribute(prefix + name)
}
