import express from 'express'
import {dburi} from './../constants/DBConnection'
import mongoose from 'mongoose'
import {bugsSchema} from './../constants/BugsSchema'

const router = express.Router({mergeParams: true})

/*
* Removes a record from the database with the specified ID.
*/
router.delete('/', (req, res) => {
    mongoose.connect(dburi)
    const db = mongoose.connection
    let dbquery = req.params

    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', () => {
    const bugs = mongoose.model('bugs', bugsSchema)

    bugs.remove(dbquery, (err, docs) => {
      res.json(docs)
      db.close()
    })
  })
})

export default router
