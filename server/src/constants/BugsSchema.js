import mongoose from 'mongoose'

const Schema = mongoose.Schema

export let bugsSchema = new Schema({
  priority: String,
  status: String,
  owner: String,
  title: String
})
