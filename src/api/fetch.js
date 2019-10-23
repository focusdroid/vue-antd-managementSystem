import axios from 'axios'

export default class fetch {
  static requestget (url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, {params: params}).then((res) => {
        if (res.status === 200 || res.status === '200') {
          resolve(res.data)
        }
      }
      ).catch((err) => {
        reject(err)
      })
    })
  }
}
