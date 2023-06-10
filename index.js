const app = require("./app")
const db = require('./models')


db.sequelize.sync().then((req) => {
app.listen(5002, () => {
  console.log('Server started on port 5002');
});
})
