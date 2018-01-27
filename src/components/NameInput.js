import React from 'react'

const nameInput = props => {
    return(
        <input className='searcher__searchbar--input'
               placeholder='Enter university name'
               value={props.nameInputValue}
               onChange={props.handleNameInput}/>
    )
};

export default nameInput