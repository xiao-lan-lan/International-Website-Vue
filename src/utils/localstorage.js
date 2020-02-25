// 取
export const getItem = k => {
  return JSON.parse(window.localStorage.getItem(k))
}

// 存
export const setItem = (k, v) => {
  window.localStorage.setItem(k, JSON.stringify(v))
}

// 删
export const removeItem = k => {
  window.localStorage.removeItem(k)
}
