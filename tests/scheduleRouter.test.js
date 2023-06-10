const app = require('../app')
const supertest = require('supertest');
const request = supertest(app)


describe("Get days by barber id", () => {
    it("should return a list of an objects", async () =>{

      const barberExample ={
        "Id": "2",
        "Name": "Vuk",
        "LastName": "Skrbic",
        "PhoneNr": "132156449874",
        "Mail": "vuk@gmail.com",
        "Role": "Barber"
    }

      //   const daysExample = [{
      //     day_id:1,
      //     barber_id: 2,
      //     schedule_id: 1,
      //     //year, month, day
      //     date: new Date(2023,5,9),
      //     start_time: (() => {
      //         const startTime = new Date().toISOString();
      //         startTime.setHours(9);
      //         startTime.setMinutes(0);
      //         startTime.setSeconds(0);
      //         startTime.setMilliseconds(0);
      //         return startTime.toISOString();
      //       })() ,
      //     end_time: (() =>{
      //         const endTime = new Date().toISOString();
      //         endTime.setHours(17);
      //         endTime.setMinutes(0);
      //         endTime.setSeconds(0);
      //         endTime.setMilliseconds(0);
      //         return endTime.toISOString();
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
      //         const startTime = new Date().toISOString();
      //         startTime.setHours(9);
      //         startTime.setMinutes(0);
      //         startTime.setSeconds(0);
      //         startTime.setMilliseconds(0);
      
      //         return startTime.toISOString();
      //       })() ,
      //     end_time: (() =>{
      //         const endTime = new Date().toISOString();
      //         endTime.setHours(17);
      //         endTime.setMinutes(0);
      //         endTime.setSeconds(0);
      //         endTime.setMilliseconds(0);
      //         return endTime.toISOString();
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
      //         const startTime = new Date().toISOString();
      //         startTime.setHours(9);
      //         startTime.setMinutes(0);
      //         startTime.setSeconds(0);
      //         startTime.setMilliseconds(0);
      //         return startTime.toISOString();
      //       })() ,
      //     end_time: (() =>{
      //         const endTime = new Date().toISOString();
      //         endTime.setHours(17);
      //         endTime.setMinutes(0);
      //         endTime.setSeconds(0);
      //         endTime.setMilliseconds(0);
      //         return endTime.toISOString();
      //       })(),
      //       type: "Working"
      // }
      //   ]

        const response = await request.get(`/schedule/${barberExample.Id}`)

        expect(response.statusCode).toBe(200)
        // expect(response.body).toMatchObject(daysExample)
    })

    it("should return a status 404", async () => {

      const barberExample ={
        Id: "4",
        Name: "Milan",
        LastName: "Skrbic",
        PhoneNr: "031932155",
        mail: "milan@gmail.com",
        Role: "Barber"
    }

      const daysExample = {}

      const response = await request.get(`/schedule/${barberExample.Id}`)
      
      expect(response.statusCode).toBe(404)
      expect(response.body).toMatchObject(daysExample) 
    })
})