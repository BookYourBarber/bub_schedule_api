const router = require('express').Router()
const moment = require('moment');
const db = require('../models')

// const schedule = [{
//     id: 1,
//     barber_id: 2
// }];

// const day = [{
//     id: 1,
//     barber_id: 2,
//     //year, month, day
//     date: new Date(2023,5,9),
//     start_time: (() => {
//         const startTime = new Date();
//         startTime.setHours(9);
//         startTime.setMinutes(0);
//         startTime.setSeconds(0);
//         startTime.setMilliseconds(0);
//         return startTime;
//       })() ,
//     end_time: (() =>{
//         const endTime = new Date();
//         endTime.setHours(17);
//         endTime.setMinutes(0);
//         endTime.setSeconds(0);
//         endTime.setMilliseconds(0);
//         return endTime;
//       })(),
//     type: "Working"
// },
// {
//     day_id:2,
//     barber_id: 2,
//     schedule_id: 1,
//     //year, month, day
//     date: new Date(2023,5,10),
//     start_time: (() => {
//         const startTime = new Date();
//         startTime.setHours(9);
//         startTime.setMinutes(0);
//         startTime.setSeconds(0);
//         startTime.setMilliseconds(0);

//         return startTime;
//       })() ,
//     end_time: (() =>{
//         const endTime = new Date();
//         endTime.setHours(17);
//         endTime.setMinutes(0);
//         endTime.setSeconds(0);
//         endTime.setMilliseconds(0);
//         return endTime;
//       })(),
//       type: "Closed"
// },
// {
//     day_id:3,
//     barber_id: 2,
//     schedule_id: 1,
//     //year, month, day
//     date: new Date(2023,5,11),
//     start_time: (() => {
//         const startTime = new Date();
//         startTime.setHours(9);
//         startTime.setMinutes(0);
//         startTime.setSeconds(0);
//         startTime.setMilliseconds(0);
//         return startTime;
//       })() ,
//     end_time: (() =>{
//         const endTime = new Date();
//         endTime.setHours(17);
//         endTime.setMinutes(0);
//         endTime.setSeconds(0);
//         endTime.setMilliseconds(0);
//         return endTime;
//       })(),
//       type: "Working"
// },
// {
//     day_id:4,
//     barber_id: 3,
//     schedule_id: 1,
//     //year, month, day
//     date: new Date(2023, 5,13),
//     start_time: (() => {
//         const startTime = new Date();
//         startTime.setHours(9);
//         startTime.setMinutes(0);
//         startTime.setSeconds(0);
//         startTime.setMilliseconds(0);
//         return startTime;
//       })() ,
//     end_time: (() =>{
//         const endTime = new Date();
//         endTime.setHours(17);
//         endTime.setMinutes(0);
//         endTime.setSeconds(0);
//         endTime.setMilliseconds(0);
//         return endTime;
//       })(),
//       type: "Working"
// }
// ]

// router.get("/:id", async (req, res) =>{

//     const id = req.params.id;

//     const barbers_working_days = day.filter(d => {
//         return d.barber_id === parseInt(id)
//     }) 
    
//     if(barbers_working_days.length === 0){
//         return res.sendStatus(404)
//     }
//     return res.json(barbers_working_days)
// })

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