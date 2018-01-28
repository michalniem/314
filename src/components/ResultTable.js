import React, { Component } from 'react'

import TableHead from './TableHead'
import TableBody from './TableBody'

export default class ResultTable extends Component {
    render() {
        let results;
        let tableBody;
        if( this.props.response ){
            ( this.props.response.length !== 0 )
            ? tableBody = <TableBody response={this.props.response}
                                     codeFiltrValue={this.props.codeFiltrValue}/>
            : results = <p>nothing is here...</p>
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
