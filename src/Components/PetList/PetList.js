//Dependencies
import React from 'react';
import {Link} from 'react-router-dom'

//Components
import PetItem from './PetItem/PetItem'
import BigButton from '../BigButton/BigButton';
import config from '../../config';



class PetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showPetList = () => {
    let returnDog = <PetItem {...this.props.dog} key='dog' choiceTime={this.props.choiceTime} adoptTime={this.props.adoptTime} animalType='dog' newDog={this.props.newDog} />
    let returnCat = <PetItem {...this.props.cat} key='cat' choiceTime={this.props.choiceTime} adoptTime={this.props.adoptTime} animalType='cat' newCat={this.props.newCat} />
    return [returnDog, returnCat]
  }


  render() {
    return (
      <main className="main petList">
        <Link to="/"><h1>Petful</h1></Link>
        <div className="yellowDivider"></div>
        <h2>Current Pets</h2>
        {this.showPetList()}
        <div className="yellowDivider"></div>
        <div className="adoptBoth">
          <h4>or</h4>
          <button type="button" className={`bigButton adopt ${this.props.choiceTime ? '' : 'hidden' }`} onClick={() => {
            this.props.adoptTime('both');
            this.props.newDog();
            this.props.newCat();
          }}>adopt both</button>
        </div>
      </main>
    );
  }
}

export default PetList;