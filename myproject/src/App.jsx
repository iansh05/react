import React from 'react'
import Student from './components/Student'

const App = () => {
  return (
    <div style={{ display:'flex' , gap:'10px'}}>
      <Student name="MOHAN JI" class="10 class" rollNo="102" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4W3u01m2cXDSELxBDtwa8s1yzyxOaUKUdTXXXhcgdQ&s=10" />
      <br />
       <Student name="SOHAN JI" class="12 class" rollNo="103" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4W3u01m2cXDSELxBDtwa8s1yzyxOaUKUdTXXXhcgdQ&s=10" />
      <br />
       <Student name="ROHAN JI" class="11 class" rollNo="104" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4W3u01m2cXDSELxBDtwa8s1yzyxOaUKUdTXXXhcgdQ&s=10" />
      <br />
    </div>
  )
}

export default App