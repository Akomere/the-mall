import { createSelector } from "reselect";
import memoize from 'lodash.memoize'

const COLLECTION_ID_MAP ={
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}
const selectCollection = state => state.collection



export const selectCollectionItems = createSelector(
    [selectCollection], collection => collection.collections                                                          
)

export const selectCollectionsforPreview = createSelector(
    [selectCollectionItems], collections=> Object.keys(collections).map(name => collections[name])
)

export const selectCollectionCategory = collectionUrlParam =>
createSelector(
    [selectCollectionItems],
    collection=> collection[collectionUrlParam]
)