import React from "react";
import Menuitem from "../menu-item/menu-item.component";
import { selectDirectorySection } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import "./directory.styles.scss"

const Directory = ({sections})=> (
            <div className="directory-menu">
                {
                    sections.map(({ id, ...OtherSectProps }) => {
                        return <Menuitem key={id} {...OtherSectProps}/>
                    })
                }
            </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory)