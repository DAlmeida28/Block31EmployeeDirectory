import { useEffect, useState } from "react"

function App() {
  const [allEmployees, setAllEmployees] = useState([]);

  useEffect(() => {
    const listEmployees = async () => {
      const getEmployees = await fetch('https://employeedirectory-5zja.onrender.com/employees')
      const response = await getEmployees.json();
      setAllEmployees(response);
    }
    listEmployees();
  })

  return (
    <>
    {allEmployees.map((employee) => {
      <ul>{employee.name}</ul>
    })}
     
    </>
  )
}

export default App
