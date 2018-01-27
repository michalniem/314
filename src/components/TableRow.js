import React, { Component } from 'react'

export default class TableRow extends Component {
    render(){
        return(
            <tr>
                <td><a href={ this.props.response.web_pages } target='_blank'>{ this.props.response.name }</a></td>
                <td>{ this.props.response.country }</td>
                <td>{ this.props.response.alpha_two_code }</td>
                <td>{ this.props.response.domains }</td>
            </tr>
        )
    }
}