import express from 'express'

const apiPort = 3333

const app = express()
app.use(express.json())

app.use()

app.listen(apiPort, () => 'server running on port 3333')