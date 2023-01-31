import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Programer from './component/Programer'
import Company from './component/Company'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Programers</h1>
      <div className="appContainer">
        <Programer name={"Ameerah"} languages={"Python"} experience={2} company={"SADAYA"}/>
        <Programer name={"Saad"} languages={"JS"} experience={4} company={"STC"}/>
        <Programer name={"Sara"} languages={"PHP"} experience={7} company={"Tuwiq"}/>
      </div>
      <hr />
      <h1>Companies</h1>
      <div className="appContainer">
        <Company name={"Tuwiq"} employeeNum={1500} establishYear={2010} />
        <Company name={"STC"} employeeNum={10000} establishYear={1900} />
        <Company name={"SADAYA"} employeeNum={12000} establishYear={2000} />
      </div>
      
    </div>
  )
}

export default App
