import express from 'express'
import {dburi} from './../constants/DBConnection'
import mongoose from 'mongoose'
import {bugsSchema} from './../constants/BugsSchema'

const router = express.Router({mergeParams: true})

/*
* Queries the database using a specified ID from params.
*/
router.get('/', (req, res) => {
    mongoose.connect(dburi)
    const db = mongoose.connection
    let dbquery = req.params

    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', () => {
    const bugs = mongoose.model('bugs', bugsSchema)

    bugs.find(dbquery, (err, docs) => {
      res.json(docs.reverse())
      db.close()
    })
  })
})

export default router
