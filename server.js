const express = require('express');
const employees = require(`${__dirname}/employees.js`);
let idNumber = 5;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello Employees!</h1>');
}
)

app.get('/employees', (req, res) => {
  res.send(employees);
})

app.get('/employees/random', (req, res) => {
  //get a random number between 1-4.
  const randomNum = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  const randomEmployee = (employees[randomNum]);
  res.send(randomEmployee);
})

//must match object deconstructed variable
app.get('/employees/:employeeId', (req, res) => {
  //Req.params is the ID inputed on the URL bar and setting this to an object wit the key employeeId.
  const { employeeId } = req.params;

  const foundEmployee = employees.find((individualEmployee) => {
    return individualEmployee.id === Number(employeeId);
  });
  res.send(foundEmployee);
})

app.post('/api/v1/employees', (req, res, next) => {
  const { name } = req.body;

  if(!name) {
    const error = new Error("Name is not provided");
    next(error);
  } else {
    
    employees.push({
      id: idNumber,
      name
    });
  }
  idNumber ++; 

})

app.use((err, req, res, next) => {
  console.log('error message', err.message);
  res.status(400).send(err.message);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
})