import express from 'express'
import getrequest from './src/routes/FindAllBugData'
import cors from 'cors'
import postrequest from './src/routes/CreateBugData'
import bodyparser from 'body-parser'
import getparamrequest from './src/routes/FindParamBugData'

const app = express()

app.use(cors())
app.use(express.static('public'))
app.use('/api/bugs', getrequest)
app.use(bodyparser.json())
app.use('/api/bugs', postrequest)
app.use('/api/bugs/status/:status/priority/:priority', getparamrequest)

app.listen(9000, () => {
  console.log('Express server listening on port 9000!')
})
