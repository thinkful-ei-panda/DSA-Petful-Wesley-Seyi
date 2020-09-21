//Dependencies
import React from 'react';
import {Link} from 'react-router-dom'

//Components
import JoinForm from './JoinForm/JoinForm';
import BigButton from '../BigButton/BigButton';


function Splash(props) {
  return(
    <main className="main splash">
      <Link to="/"><h1>Petful</h1></Link>
      <div className="yellowDivider"></div>
      <h3>At Petful, we believe every pet deserves a home</h3>
      <div className="splashImage">
        <img src="https://www.sheknows.com/wp-content/uploads/2018/08/woman-with-cat_xedhlr.jpeg" alt="A woman greets her new pet" />
      </div>
      <p className="petfulDescription">We match pets and people on a first-in first-out basis.</p>
      
      <p className="petfulDescription">Put your name in the queue and then click "View Pets", and when it's your turn, you'll be prompted
      to choose whether you want the next available dog,
        cat, or both!</p>
    <div className="yellowDivider extra30space"></div>
    <JoinForm addToQueue={props.addToQueue}/>
    <div className="yellowDivider extra30space"></div>
    <Link to="/pets"><BigButton type="button" classNames='viewPets' text='view pets' /></Link>
    </main>
  );
}

export default Splash;