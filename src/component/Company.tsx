import React from 'react'
import Service from './Service';
interface CompanyProp{
    name:string;
    employeeNum: number;
    establishYear: number;
}
function Company({name, employeeNum, establishYear}: CompanyProp)
 {
  return (
    <div className='container'>
        
        <h2>{name}</h2>
        <hr />
        <h4>Employee Number:</h4>
        <p> {employeeNum}</p>
        <hr />
        <h4>Establish Years:</h4>
        <p> {establishYear}</p>
        <hr />
        <h4>Company Services:</h4>
        <Service name={"Build Site"} price={1500}/>
        <Service name={"Training"} price={200}/>       
       
    </div>
  )
}

export default Company