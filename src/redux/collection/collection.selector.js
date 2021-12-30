import { createSelector } from "reselect";
import memoize from 'lodash.memoize'


const selectCollection = (state) => state.collection



export const selectCollectionItems = createSelector(
    [selectCollection], collection => collection.collections                                                          
)

export const selectCollectionsforPreview = createSelector(
    [selectCollectionItems], 
    (collections)=> 
        collections ? Object.keys(collections).map((name) => collections[name]) : []
)

export const selectCollectionCategory = collectionUrlParam =>
createSelector(
    [selectCollectionItems],
    collections => (collections ? collections[collectionUrlParam] : null)

)

export const selectIsCollectionFetching = createSelector(
    [selectCollection], collection => collection.isFetching
)

export const selectIsCollectionLoaded = createSelector(
    [selectCollection], collection => !!collection.collections
)