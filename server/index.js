import express from "express"

const app = express()

app.get('/users', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({
    users: ['Rodolfo Gabriel', 'William Bonner', 'Alanzoka']
  })
})

app.listen(5000, () => console.log("Server started on port 5000"))