import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

TableRow.propTypes = {
    response: PropTypes.shape({
        name: PropTypes.string,
        country: PropTypes.string,
        alpha_two_code: PropTypes.string,
        domains: PropTypes.array,
        web_pages: PropTypes.array,
    }),
};