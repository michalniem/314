import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CodeFilter extends  Component{
    render(){
        return(
            <label>
                country code:
                <input className='searcher__filters--filter'
                       value={this.props.codeFilterValue }
                       onChange={this.props.handleCodeFilter}/>
            </label>
        )
    }
};

CodeFilter.propTypes = {
    codeFilterValue: PropTypes.string.isRequired,
    handleCodeFilter: PropTypes.func.isRequired,
};