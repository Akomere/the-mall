import React from "react";
import { Route } from "react-router";
import CategoryPage from "../collection/category.component";

import CollectionsOverview from "../../Components/collections-overview/collections-overview";
const ShopPage = ({ match }) => {
    console.log(match)
    return(
    <div className='shop-page'>
        <Route exact path= {`${match.path}`} component= {CollectionsOverview}/>
        <Route path = {`${match.path}/:categoryid`} component={CategoryPage}/>
    </div>
)}



export default ShopPage