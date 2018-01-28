import React from 'react'

import TableRow from './TableRow'

const tableBody = props => {
    let rows;
    if( props.response.length !== 0 ) {
        rows = props.response.filter( elem => {
            return ( elem.alpha_two_code.toLowerCase()).indexOf((props.codeFilterValue.toLowerCase()) ) !== -1
        })
            .map( ( resp, index ) => {
                return <TableRow key={ index } response={ resp }/>
            })
    }
    return(
        <tbody className='searcher__table--body'>
            { rows }
        </tbody>
    )
};

export default tableBody