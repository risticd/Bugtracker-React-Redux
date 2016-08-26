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

  static fetchBugDataByID(bugid, callback, errcallback) {
    fetch(URL + "/_id/" + bugid, {method: 'GET'})
    .then(res => res.json())
    .then(callback)
    .catch(errcallback)
  }

  static deleteBugDataByID(bugid, callback, errcallback) {
    fetch(URL + "/_id/" + bugid, {method: 'DELETE'})
    .then(res => res.json())
    .then(callback)
    .catch(errcallback)
  }

  static updateBugData(bugid, updatequery, callback, errcallback) {
    fetch(URL + "/_id/" + bugid + "/status/" + updatequery.status +
    "/priority/" + updatequery.priority + "/title/" + updatequery.problem, {method: 'PUT'})
    .then(res => res.json())
    .then(callback)
    .catch(errcallback)
  }

}

export default BugsApi
