//Dependencies
import React from 'react'
import {Link} from 'react-router-dom'

function Congratulations(props) {
  return (
    <main className="main congratulations">
      <h3>Congratulations!!</h3>
      <div className="yellowDivider extra30space"></div>
      <h4>Thank you so much for adopting</h4>
      <h2>{props.petName}</h2>
      <div className="yellowDivider extra30space"></div>
      <h5>We hope your home finds much joy!</h5>
      <Link to="/"><h6>Click here to go back to the home page!</h6></Link>
    </main>
  )
}

export default Congratulations;