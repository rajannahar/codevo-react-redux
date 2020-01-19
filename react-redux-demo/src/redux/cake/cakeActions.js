import { BUY_CAKE } from './cakeTypes'

// action creator - an action which returns an action
export const buyCake = () => {
  return {
    type: BUY_CAKE
  }
}