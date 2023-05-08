const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const scheduleRouter = require("./routers/scheduleRouter")

app.use("/schedule", scheduleRouter)

app.listen(5002, () => {
  console.log('Server started on port 5002');
});
