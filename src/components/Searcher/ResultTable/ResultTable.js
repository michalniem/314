import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TableHead from './TableHead'
import TableBody from './TableBody'

export default class ResultTable extends Component {
    render() {
        let noresults;
        let tableBody;
        if( this.props.response ){
            ( this.props.response.length !== 0 )
            ? tableBody = <TableBody response={this.props.response}
                                     codeFilterValue={this.props.codeFilterValue}/>
            : noresults = <p className='searcher__noresult'>Sorry, I could not find this university...</p>
        }
        return (
            <div className='searcher__table--container'>
                <table className='searcher__table'>
                    <TableHead />
                    { tableBody }
                </table>
                { noresults }
            </div>
        )
    }
    shouldComponentUpdate( nextProps ){
        return (this.props.response !== nextProps.response || this.props.codeFilterValue !== nextProps.codeFilterValue)
    }
}

ResultTable.propTypes = {
    response: PropTypes.PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),
    codeFilterValue: PropTypes.string.isRequired,
};
