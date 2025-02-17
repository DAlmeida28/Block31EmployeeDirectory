import { useEffect } from "react"

function App() {

  useEffect(() => {
    const listEmployees = async () => {
      const getEmployees = await fetch('https://employeedirectory-5zja.onrender.com/employees')
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
