import React, { Component } from 'react'

import NameInput from './NameInput'
import CountrySelect from './CountrySelect'

export default class Searcher extends Component {
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