import React from "react";
import './collection-item.styles.scss'
import CustomButton from "../custom-button/custom-button";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

const CollectionItem = ({item,addItemAction}) => {
    const {name, imageUrl, price} = item;
    return(
    <div className='collection-item'>
        <div 
        className='image'
        style={{backgroundImage: `url(${imageUrl})`}}
        />
        <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={()=> addItemAction(item)} inverted> ADD TO CART</CustomButton>
    </div>
    )
}

const mapDispatchToProps = dispatch =>({
    addItemAction: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)