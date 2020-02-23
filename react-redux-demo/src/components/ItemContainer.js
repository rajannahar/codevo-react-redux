import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
  const ItemName = props.cake ? 'Cake' : 'Ice Cream'
  return (
    <div>
      <h2>Item {ItemName} - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams
  return {
    item: itemState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispathFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())
  return {
    buyItem: dispathFunction
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
