import express from 'express'
import {dburi} from './../constants/DBConnection'
import mongoose from 'mongoose'
import {bugsSchema} from './../constants/BugsSchema'

const router = express.Router({mergeParams: true})

/*
* Queries the database for records based on request params.
*/
router.put('/', (req, res) => {
    mongoose.connect(dburi)
    const db = mongoose.connection
    let conditions = {_id: req.params._id}
    let update = {$set: {status: req.params.status,
      priority: req.params.priority, title: req.params.title}}

    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', () => {
    const bugs = mongoose.model('bugs', bugsSchema)

    bugs.update(conditions, update, (err, docs) => {
      res.json(docs)
      db.close()
    })
  })
})

export default router
