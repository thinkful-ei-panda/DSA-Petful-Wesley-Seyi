//Dependencies
import React from 'react';

//Components
import AdoptedItem from './AdoptedItem/AdoptedItem';


function displayAdoptedItems(adoptionList) {
  let cycleList = [];
  for (let i=0; i<3; i++) {
    if (adoptionList[i]) {
    cycleList.push(adoptionList[i]);
    }
  }
  let returnItem = cycleList.map((item,index) => {
    return <AdoptedItem {...item} key={index} />
  })
  return returnItem;

}

function AdoptedList(props) {
  return(
    <section className="adoptedList">
      <h4>Successful Adoptions</h4>
      <ul>
        {displayAdoptedItems(props.adoptionList)}
      </ul>
    </section>
  );
}

export default AdoptedList;