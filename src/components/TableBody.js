import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TableRow from './TableRow'

export default class TableBody extends Component{
    render(){
        let rows;
        if( this.props.response.length !== 0 ) {
            rows = this.props.response.filter( elem => {
                return ( elem.alpha_two_code.toLowerCase()).indexOf( (this.props.codeFilterValue.toLowerCase()) ) !== -1
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
    }
};

TableBody.propTypes = {
    response: PropTypes.PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),
    codeFilterValue: PropTypes.string.isRequired
};
