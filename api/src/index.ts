import express from "express"; 

const port= 3000;

const app = express();
app.get('/', (req, res) => {
    res.send('Hello World1234!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })