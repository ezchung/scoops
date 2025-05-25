const app = require("./app");
require('dotenv').config({ path: '../.env' });
const PORT = process.env.PORT;;

app.listen(PORT, function () {
  console.log(
      `Started http://localhost:${PORT}/`);
});