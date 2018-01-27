import React from 'react'

const codeFiltr = props => {
    return(
        <input className='searcher__searchbar--filtr'
               placeholder='Filtr'
               value={props.codeFiltrValue}
               onChange={props.handleCodeFiltr}/>
    )
};

export default codeFiltr