import React from 'react'

export const BigButton = (props) => {
  return (
    <button type={props.type} className={`bigButton ${props.classNames}`}>{props.text}</button>
  )
}

export default BigButton;