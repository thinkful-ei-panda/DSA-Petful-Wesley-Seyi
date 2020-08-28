//Dependencies
import React from 'react';

function AdoptedItem(props) {
  let dogPath = 'https://art.pixilart.com/5d29768f5c3f448.png';
  let catPath = 'https://art.pixilart.com/279c04744561021.png';
  return(
    <li className="adoptedItem">
      <div className="animalSprite">
        <img src={props.petType === 'dog' ? dogPath : catPath } alt={props.petType} />
      </div>
      <div className="backgroundRow">
        <div className="nameInfo">
          <span className="petName"><span className="bold">{props.petName}</span> was adopted!</span>
        </div>
      </div>
    </li>

  );
}

export default AdoptedItem;