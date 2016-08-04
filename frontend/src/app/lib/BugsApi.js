import {URL} from '../constants/api'

class BugsApi {

  static getBugData(callback, errcallback) {

    fetch(URL, {method: 'GET'})
    .then(res => res.json())
    .then(callback)
    .catch(errcallback)
  }

  static addBugData(newBug, callback, errcallback) {

    fetch(URL, {method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(newBug)
    })
    .then(res => res.json())
    .then(callback)
    .catch(errcallback)
  }

  static filterBugData(query, callback, errcallback) {
    fetch(URL + "/status/" + query.status + "/priority/" + query.priority, {method: 'GET'})
    .then(res => res.json())
    .then(callback)
    .catch(errcallback)
  }

}

export default BugsApi
