import { useEffect } from "react"

function App() {

  useEffect(() => {
    const listEmployees = async () => {
      const getEmployees = await fetch('localhost:3000/employees')
      const response = await getEmployees.json();
      console.log(response);
    }
    listEmployees();
  })

  return (
    <>
     
    </>
  )
}

export default App
