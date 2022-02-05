import collectionActionTypes from "./collection.types";
import { firestore, convertCollectionSnapshotToMap } from "../../firbase/firebase.utils";
import { bindActionCreators } from "redux";


export const fetchCollectionsStart = ()=>({
    type: collectionActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: collectionActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
}) 
export const fetchCollectionsFailure = errorMessage=>({
    type: collectionActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage

})

export const fetchCollectionsStartAsync = ()=>{
    return dispatch =>{
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionsStart())

        collectionRef.get().then(async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot)
            dispatch(fetchCollectionsSuccess(collectionsMap))
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)))

    }
}
