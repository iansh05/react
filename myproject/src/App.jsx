import React from 'react'
import Student from './components/Student'

const App = () => {
  return (
    <div style={{ display:'flex' , gap:'10px'}}>
      <Student/>
      <br />
       <Student/>
      <br />
       <Student/>
      <br />
    </div>
  )
}

export default App