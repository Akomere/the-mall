import React from "react";
import { Route } from "react-router";
import CategoryPage from "../collection/category.component";
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from "../../Components/collections-overview/collections-overview";
import { firestore, convertCollectionSnapshotToMap } from '../../firbase/firebase.utils.js'

import { fetchCollectionsStartAsync } from "../../redux/collection/collection.acions";
import { connect } from 'react-redux';
import WithSpinner from "../../Components/withSpinner/withspinner.component";
import { selectIsCollectionFetching, selectIsCollectionLoaded } from "../../redux/collection/collection.selector";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CategoryPageWithSpinner = WithSpinner(CategoryPage)

class ShopPage extends React.Component {


    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props

        fetchCollectionsStartAsync()
    }


    render() {
        const { match, isCollectionFetching, isCollectionsLoaded } = this.props

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
                <Route path={`${match.path}/:categoryid`} render={(props) => <CategoryPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
            </div>
        )

    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionLoaded
})
const mapDispatchtoProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})



export default connect(mapStateToProps, mapDispatchtoProps)(ShopPage)