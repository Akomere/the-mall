import SHOP_DATA from "./shopData"


const INITIAL_STATE = {
    collections: SHOP_DATA
}

const collectionReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        default:
            return state
    }
}

export default collectionReducer