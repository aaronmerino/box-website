const express = require('express');
const app = express();
const port = 8080;


app.use('/', express.static('static-content'));

app.listen(port, () => {
  console.log(`listening on port ${port}!`)
});
