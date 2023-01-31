import React from 'react'
interface ServiceProp{
    name:string;
    price:number
}
function Service({name, price}: ServiceProp)
 {
  return (
    <div>
        
        {/* <h4>Service Name:</h4> */}
        <p> {name}</p>
        <h4>Price:</h4>
        <p> {price}</p>
        <hr/>
    </div>
  )
}

export default Service