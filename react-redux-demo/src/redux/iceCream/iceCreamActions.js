import { BUY_ICECREAM } from './iceCreamTypes'

// action creator - an action which returns an action
export const buyIceCream = () => {
  return {
    type: BUY_ICECREAM
  }
}