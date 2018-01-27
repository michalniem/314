import React, { Component } from 'react'

import TableHead from './TableHead'
import TableBody from './TableBody'

export default class ResultTable extends Component {
    render() {
        return (
            <div className='searcher__table--container'>
                <table className='searcher__table'>
                    <TableHead />
                    <TableBody response={this.props.response}
                               codeFiltrValue={this.props.codeFiltrValue}/>
                </table>
            </div>
        )
    }

}
