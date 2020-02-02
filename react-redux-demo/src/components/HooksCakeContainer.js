import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {

  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>HooksCakeContainer</h1>
      <h3>Number of cakes: {numOfCakes}</h3>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer