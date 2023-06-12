import React from 'react'

const FoodItem = ({foodId: id, foodName: fName, price}) => {

    // console.log('props: ', props);

  return (
    <li id={id}>{fName} ({price}원)</li>
  )
}

export default FoodItem;