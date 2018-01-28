import React, { Component } from 'react'

import SearchBar from './SearchBar'
import ResultTable from './ResultTable'
import Filters from './Filters'

export default class Searcher extends Component {
    state = {
        nameInputValue: '',
        codeFilter: '',
        countrySelectValue: '',
        response: '',
    };

    handleNameInput = event => {
        this.setState({
            nameInputValue: event.target.value,
        })
    };

    handleCodeFilter = event => {
        this.setState({
            codeFilter: event.target.value,
        })
    };

    handleCountrySelect = event => {
        this.setState({
            countrySelectValue: event.target.value,
        })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if( this.state.nameInputValue.length === 0 && this.state.countrySelectValue === '' ) {
            return
        }
        fetch(`http://localhost:9000/api/search?name=${this.state.nameInputValue}&country=${this.state.countrySelectValue}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return new Error('Error');
                }
            }).then(json => {
                this.setState({
                    response: json,
                    nameInputValue: '',
                    codeFilter: '',
                    countrySelectValue: '',
                })
            }).catch(error => {
                console.error(error);
            });
    };

    render(){
        return(
            <div className='searcher'>
                <SearchBar nameInputValue={this.state.nameInputValue}
                           handleNameInput={this.handleNameInput}
                           countrySelectValue={this.state.countrySelectValue}
                           handleCountrySelect={this.handleCountrySelect}
                           handleFormSubmit={this.handleFormSubmit}/>
                <div className='searcher__container'>
                    <Filters codeFilterValue={this.state.codeFilter}
                             handleCodeFilter={this.handleCodeFilter}/>
                    <ResultTable response={this.state.response}
                                 codeFilterValue={this.state.codeFilter}/>
                </div>
            </div>
        )
    }
}