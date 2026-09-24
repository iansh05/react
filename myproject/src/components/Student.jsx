import React from 'react';
const Student = (props) => {
  return (
    <div style={{border: '2px solid red',height:'300px',width:'300px'}}>
        <h3>STUDENT RECORD</h3>
        <h3>{props.name}</h3>
        <img src={props.image} alt={props.name} height={'100px'} width={'100px'} />
        <h3>Roll NO:{props.rollNo}</h3>
        <h3>Class:{props.class}</h3>
    </div>
  )
}
export default Student;