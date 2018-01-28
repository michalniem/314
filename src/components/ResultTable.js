import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TableHead from './TableHead'
import TableBody from './TableBody'

export default class ResultTable extends Component {
    render() {
        let results;
        let tableBody;
        if( this.props.response ){
            ( this.props.response.length !== 0 )
            ? tableBody = <TableBody response={this.props.response}
                                     codeFilterValue={this.props.codeFilterValue}/>
            : results = <p className='searcher__noresult'>Sorry, I did not find this university...</p>
        }
        return (
            <div className='searcher__table--container'>
                <table className='searcher__table'>
                    <TableHead />
                    { tableBody }
                </table>
                { results }
            </div>
        )
    }
}

ResultTable.propTypes = {
    response: PropTypes.PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),
    codeFilterValue: PropTypes.string.isRequired,
};
