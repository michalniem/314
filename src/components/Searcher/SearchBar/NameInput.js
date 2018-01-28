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
    shouldComponentUpdate(nextProps){
        return (this.props.nameInputValue !== nextProps.nameInputValue)
    }
}

NameInput.propTypes = {
    nameInputValue: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired,
};
