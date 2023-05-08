const router = require('express').Router()
const moment = require('moment');

// const schedule = [{
//     id: 1,
//     barber_id: 2
// }];

const day = [{
    barber_id: 2,
    schedule_id: 1,
    //year, month, day
    date: new Date(2023,05,09),
    start_time: (() => {
        const startTime = new Date();
        startTime.setHours(9);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        return startTime;
      })() ,
    end_time: (() =>{
        const endTime = new Date();
        endTime.setHours(17);
        endTime.setMinutes(0);
        endTime.setSeconds(0);
        return endTime;
      })(),
    type: "Working"
},
{
    barber_id: 2,
    schedule_id: 1,
    //year, month, day
    date: new Date(2023,05,10),
    start_time: (() => {
        const startTime = new Date();
        startTime.setHours(9);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        return startTime;
      })() ,
    end_time: (() =>{
        const endTime = new Date();
        endTime.setHours(17);
        endTime.setMinutes(0);
        endTime.setSeconds(0);
        return endTime;
      })(),
      type: "Closed"
},
{
    barber_id: 2,
    schedule_id: 1,
    //year, month, day
    date: new Date(2023,05,11),
    start_time: (() => {
        const startTime = new Date();
        startTime.setHours(9);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        return startTime;
      })() ,
    end_time: (() =>{
        const endTime = new Date();
        endTime.setHours(17);
        endTime.setMinutes(0);
        endTime.setSeconds(0);
        return endTime;
      })(),
      type: "Working"
},
{
    barber_id: 3,
    schedule_id: 1,
    //year, month, day
    date: new Date(2023,05,13),
    start_time: (() => {
        const startTime = new Date();
        startTime.setHours(9);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        return startTime;
      })() ,
    end_time: (() =>{
        const endTime = new Date();
        endTime.setHours(17);
        endTime.setMinutes(0);
        endTime.setSeconds(0);
        return endTime;
      })(),
      type: "Working"
}
]

router.get("/:id", async (req, res) =>{

    const id = req.params.id;

    const barbers_working_days = day.filter(d => {
        return d.barber_id === parseInt(id)
    }) 
    
    if(barbers_working_days.length === 0){
        return res.sendStatus(404)
    }
    return res.json(barbers_working_days)
})

module.exports = router