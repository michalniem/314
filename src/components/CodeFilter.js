import React from 'react'

const codeFilter = props => {
    return(
        <label>
            country code:
            <input className='searcher__filters--filter'
               value={props.codeFilterValue }
               onChange={props.handleCodeFilter}/>
        </label>
    )
};

export default codeFilter