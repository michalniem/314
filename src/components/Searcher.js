import React, { Component } from 'react'

import SearchBar from './SearchBar'
import ResultTable from './ResultTable'

export default class Searcher extends Component {
    state = {
        nameInputValue: '',
        codeFiltr: '',
        countrySelectValue: '',
        response: '',
    };

    handleNameInput = event => {
        this.setState({
            nameInputValue: event.target.value,
        })
    };

    handleCodeFiltr = event => {
        this.setState({
            codeFiltr: event.target.value,
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
                    codeFiltr: '',
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
                           codeFiltrValue={this.state.codeFiltr}
                           handleCodeFiltr={this.handleCodeFiltr}
                           countrySelectValue={this.state.countrySelectValue}
                           handleCountrySelect={this.handleCountrySelect}
                           handleFormSubmit={this.handleFormSubmit}/>
                <ResultTable response={this.state.response}
                             codeFiltrValue={this.state.codeFiltr}/>
            </div>
        )
    }
}