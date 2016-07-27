import {URL} from '../constants/api'

class BugsApi {

  static getBugData(callback) {

    fetch(URL, {method: 'GET'})
    .then(res => res.json())
    .then(callback)
    .catch(err => console.log(err))
  }

  static addBugData(newBug, callback) {

    fetch(URL, {method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(newBug)
    })
    .then(res => res.json())
    .then(callback)
    .catch(err => console.log(err))
  }

  static filterBugData(querydata, callback) {
    fetch(URL + "/status/" + querydata.status + "/priority/" + querydata.priority, {method: 'GET'})
    .then(res => res.json())
    .then(callback)
    .catch(err => console.log(err))
  }

}

export default BugsApi
