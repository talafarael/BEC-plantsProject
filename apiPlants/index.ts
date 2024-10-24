const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3003;

app.use(bodyParser.json());
app.use(cors());


app.get('/pl', (req:any, res:any) => {
  console.log("AAAAA");

  res.send("Route '/pl' is working!");
});

app.listen(port, () => {
  console.log(`Catalog service listening at http://localhost:${port}`);
});