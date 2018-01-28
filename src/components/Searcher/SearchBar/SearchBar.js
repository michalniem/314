import React, { Component } from 'react'
import PropTypes from 'prop-types';

import NameInput from './NameInput'
import CountrySelect from './CountrySelect'

export default class SearchBar extends Component {
    render(){
        return(
            <form className='searcher__searchbar' onSubmit={this.props.handleFormSubmit}>
                <NameInput nameInputValue={this.props.nameInputValue}
                           handleNameInput={this.props.handleNameInput}/>
                <CountrySelect countrySelectValue={this.props.countrySelectValue}
                               handleCountrySelect={this.props.handleCountrySelect}/>
                <button className='searcher__searchbar--btn'>
                    <i className="fa fa-search" aria-hidden="true"/>
                </button>
            </form>
        )
    }
}

SearchBar.propTypes = {
    nameInputValue: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired,
    countrySelectValue: PropTypes.string.isRequired,
    handleCountrySelect: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
};