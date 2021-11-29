 import { userActionTypes } from "./user.types"
 export const setCurrentUser = user =>({
     type: userActionTypes.SET__CURRENT_USER,
     payload: user
 })