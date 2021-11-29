import React from "react";

import './category.styles.scss'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionCategory } from "../../redux/collection/collection.selector";
import CollectionItem from '../../Components/collection-item/collection-item.components.jsx'




const CategoryPage = ({collection})=> {
    console.log(collection)
    const {title, items} = collection;
    return (
        <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {items.map(item =>(
                <CollectionItem key={item.id} item={item}/>
            ))}
        </div>
       
            
        </div>
    )
}

const mapStateToProps = (state, ownProps)=>({
    collection: selectCollectionCategory(ownProps.match.params.categoryid)(state)
})

export default connect(mapStateToProps)(CategoryPage)
