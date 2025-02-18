import { useEffect, useState } from "react"

function App() {
  const [allEmployees, setAllEmployees] = useState([]);

  useEffect(() => {
    const listEmployees = async () => {
      const getEmployees = await fetch('/employees');
      const response = await getEmployees.json();
      setAllEmployees(response);
    }
    listEmployees();
  }, [])

  return (
    <>
    {console.log(allEmployees)}
    <h1>HELLO WORLD</h1>
    {allEmployees.map((employee) => {
      return(<ul>{employee.name}</ul>)
    })}
     
    </>
  )
}

export default App
