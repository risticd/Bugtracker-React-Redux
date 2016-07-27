import express from 'express'
import {dburi} from './../constants/DBConnection'
import mongoose from 'mongoose'
import {bugsSchema} from './../constants/BugsSchema'

const router = express.Router()

router.post('/', (req, res) => {
    mongoose.connect(dburi)
    const db = mongoose.connection

    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', () => {
    const bugs = mongoose.model('bugs', bugsSchema)
    const newBug = req.body

    bugs.create(newBug, (err, docs) => {
      res.json(docs)
      db.close()
    })
  })
})

export default router
