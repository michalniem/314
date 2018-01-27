import React, { Component } from 'react'

import SearchBar from './SearchBar'
import ResultTable from './ResultTable'

export default class Searcher extends Component {
    state = {
        nameInputValue: '',
        countrySelectValue: '',
    };

    handleNameInput = event => {
        this.setState({
            nameInputValue: event.target.value,
        })
    };

    handleCountrySelect = event => {
        this.setState({
            countrySelectValue: event.target.value,
        })
    };

    render(){
        return(
            <div className='searcher'>
                <SearchBar nameInputValue={this.state.nameInput}
                           handleNameInput={this.handleNameInput}
                           countrySelectValue={this.state.countrySelectValue}
                           handleCountrySelect={this.handleCountrySelect}/>
                <ResultTable />
            </div>
        )
    }
}