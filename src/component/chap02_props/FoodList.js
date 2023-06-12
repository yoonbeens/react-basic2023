import React from 'react'
import FoodItem from './FoodItem'

const FoodList = () => {

    //fetch를 통해 서버에서 음식 목록을 json으로 받아오겠죠?
    const food = {
        id: 327432,
        foodList : [
            {
                fName: '짜장면',
                price: 6000,
                id: 'chinese'
            },
            {
                fName: '해물파전',
                price: 12000,
                id: 'korean'
            },
            {
                fName: '가츠동',
                price: 8000,
                id: 'japanese'
            },
            {
                fName: '김치찌개',
                price: 5000,
                id: 'korean'
            },
            {
                fName: '탕수육',
                price: 20000,
                id: 'chinese'
            },
    
        ]
      }

  return (
    <ul>
        {/* <FoodItem foodName='짜장면' price={6000} foodId='chinese' />
        <FoodItem foodName='해물파전' price={12000} foodId='korean' />
        <FoodItem foodName='가츠동' price={8000} foodId='japanese' /> */}
        {
            food.foodList.map(f => <FoodItem foodName={f.fName} price={f.price} foodId={f.id} />)
        }
    </ul>
  )
}

export default FoodList;