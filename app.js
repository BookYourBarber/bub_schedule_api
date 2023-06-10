const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const scheduleRouter = require("./routers/scheduleRouter")

app.use("/schedule", scheduleRouter)

module.exports = app