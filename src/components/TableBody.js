import React from 'react'

import TableRow from './TableRow'

const tableBody = props => {
    let rows;
    if( props.response.length !== 0 ) {
        rows = props.response.map( ( resp, index ) => {
            return <TableRow key={ index+resp.name } response={ resp }/>
        });
    }
    return(
        <tbody className='searcher__table--body'>
            { rows }
        </tbody>
    )
};

export default tableBody