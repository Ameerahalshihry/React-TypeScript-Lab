import React from 'react'
interface ProgrmerProp{
    name:string;
    languages: string;
    experience: number;
    company:string
}
function Programer({name, languages, experience, company}: ProgrmerProp) {
  return (
    <div className='container'>
        
        <h2>{name}</h2>
        <hr />
        <h4>Languages:</h4>
        <p> {languages}</p>
        <hr />
        <h4>Experience Years:</h4>
        <p> {experience}</p>
        <hr />
        <h4>Company Name:</h4>
        <p> {company}</p>
       
    </div>
  )
}

export default Programer