import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NameInput extends Component{
    render(){
        return(
            <input className='searcher__searchbar--input'
                   placeholder='Enter university name'
                   value={this.props.nameInputValue}
                   onChange={this.props.handleNameInput}/>
        )
    }
}

NameInput.propTypes = {
    nameInputValue: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired,
};
