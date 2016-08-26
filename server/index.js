import express from 'express'
import getbugdatareq from './src/routes/FindAllBugData'
import cors from 'cors'
import postbugdatareq from './src/routes/CreateBugData'
import bodyparser from 'body-parser'
import getbugdatabyparamsreq from './src/routes/FindBugDataByParams'
import getbugdatabyidreq from './src/routes/FindBugDataByID'
import deletebugdatabyidreq from './src/routes/DeleteBugDataByID'
import updatebugdatareq from './src/routes/UpdateBugData'

const app = express()

app.use(cors())
app.use(express.static('public'))
app.use('/api/bugs', getbugdatareq)
app.use(bodyparser.json())
app.use('/api/bugs', postbugdatareq)
app.use('/api/bugs/status/:status/priority/:priority', getbugdatabyparamsreq)
app.use('/api/bugs/_id/:_id', getbugdatabyidreq)
app.use('/api/bugs/_id/:_id', deletebugdatabyidreq)
app.use('/api/bugs/_id/:_id/status/:status/priority/:priority/title/:title', updatebugdatareq)

app.listen(9000, () => {
  console.log('Express server listening on port 9000!')
})
