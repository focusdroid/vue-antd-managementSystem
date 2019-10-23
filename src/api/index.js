import fetch from './fetch'

export function getLeftMenu (obj) {
  return fetch.requestget(`../../static/json/leftMenu.json`, obj)
}
