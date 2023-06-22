const router = require('express').Router()
const db = require('../models')

//create a day in a schedule
router.post("/", async (req, res) => {

  const date = req.body.date;
  const barberId = req.body.barberId;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;
  const type = req.body.type;

  let day;

  try{
    day = db.Day.create({
      date: date,
      barberId: barberId,
      startTime: startTime,
      endTime: endTime,
      type: type
    })
  }catch(err){
    console.log(err)
    return res.sendStatus(500)
  }

  return res.sendStatus(200);
})

router.get("/:id", async (req, res) =>{ 
  const barberId = req.params.id

  let schedule;
  let queryOptions = {}

  if(barberId){
    queryOptions.where = {
      barberId: barberId
    }
  }

  try{
    schedule = await db.Day.findAll(queryOptions)
  }catch(err){
    console.log(err)
    return res.sendStatus(500)
  }

  return res.json(schedule)
})

module.exports = router