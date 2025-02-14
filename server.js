const express = require('express');
const employees = require(`${__dirname}/employees.js`)

const app = express();

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

app.listen(3000, () => {
  console.log('listening on PORT 3000');
})