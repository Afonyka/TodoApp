const express = require('express');
const app = express();

app.use("/static", express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('todo.ejs');
});

app.post('/',(req, res) => {
    console.log(req.body);
    });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});