import React from 'react'

const tableHead = props => {
    return(
        <thead className='searcher__table--head'>
            <tr>
                <th>name</th>
                <th>country</th>
                <th>code</th>
                <th>domains</th>
            </tr>
        </thead>
    )
};

export default tableHead