//Dependencies
import React from 'react';

//Components
import BigButton from '../../BigButton/BigButton';

function PetItem(props) {
  return(
    <article className="petItem">
      <img src={props.imageURL} alt={props.imageDesc} />
      <ul>
        <li>{props.name}</li>
        <li>{props.animalType}</li>
        <li>{props.sex}</li>
        <li>{props.age} years old</li>
        <li>{props.breed}</li>
      </ul>
      <div className="clear description">{props.story}</div>
      <button type="button" className={`bigButton adopt ${props.choiceTime ? '' : 'grayed' }`} onClick={(e) => {
        e.preventDefault();
        if (props.newDog) {
          props.newDog();
        }
        else if (props.newCat) {
          props.newCat();
        }
        props.adoptTime(props.animalType)}
      }>adopt me!</button>
    </article>

  );
}

export default PetItem;