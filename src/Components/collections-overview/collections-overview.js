import React from "react";
import { connect } from "react-redux";
import PreviewCollection from "../preview-collection/preview-collection.component";
import { selectCollectionsforPreview } from "../../redux/collection/collection.selector";
import './collections-overview.styles.scss'
import { createStructuredSelector } from "reselect";


const CollectionsOverview = ({collections})=>(
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otheritems }) => (<PreviewCollection key={id} {...otheritems} />))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsforPreview
}
)

export default connect(mapStateToProps)(CollectionsOverview)