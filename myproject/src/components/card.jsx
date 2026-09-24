import React from 'react'

const Card = () => {
  return (
    <div>
        <div style={{border: '2px solid white',height:'400px',width:'300px',backgroundColor:'DarkSlateGray', borderRadius: '10px'}}>
            <h4 style={{ color: 'gold' }}>ABES STUDENT CARD</h4>
            <img src="https://i.pinimg.com/originals/4f/ba/09/4fba09dde681e2db50ea2d2d57bbee90.jpg" alt="picture" style={{ width: '50%', height: 'auto',borderRadius: '5px' }} />
            <h5 style={{ color: 'white' }}align="center" >Name: Vivek Gautam</h5>
            <h5 style={{ color: 'white' }} align ="center">Class: Btech DS-B</h5>
            <h5 style={{ color: 'white' }} align="center">Year: 3rd</h5>
        </div>        
    </div>
  )
}

export default Card