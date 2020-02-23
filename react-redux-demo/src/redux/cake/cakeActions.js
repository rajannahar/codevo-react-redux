import { BUY_CAKE } from './cakeTypes'

// action creator - an action which returns an action
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
}