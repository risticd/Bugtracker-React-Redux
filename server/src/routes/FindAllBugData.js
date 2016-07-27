import express from 'express'
import {dburi} from './../constants/DBConnection'
import mongoose from 'mongoose'
import {bugsSchema} from './../constants/BugsSchema'

const router = express.Router()

/*
* Gets all records in the database.
*/
router.get('/', (req, res) => {
    mongoose.connect(dburi)
    const db = mongoose.connection

    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', () => {
    const bugs = mongoose.model('bugs', bugsSchema)

    bugs.find({}, (err, docs) => {
      res.json(docs)
      db.close()
    })
  })
})

export default router
