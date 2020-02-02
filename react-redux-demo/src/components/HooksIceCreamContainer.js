import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'

function HooksIceCreamContainer() {

  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>HooksIceCreamContainer</h1>
      <h3>Number of ice cream: {numOfIceCreams}</h3>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  )
}

export default HooksIceCreamContainer