import React from "react";
import './form-input.styles.scss'

const Forminput = ({ handleChange, label, ...otherPops }) => {
    return(<div className='group'>
        <input className='form-input' onChange={handleChange} {...otherPops}>

        </input>
        {label ?
            <label
                className={`${otherPops.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label> : null}
    </div>
    )

}

export default Forminput