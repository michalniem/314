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

    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.nameInputValue.length === 0 && this.state.countrySelectValue === '' ) {
            console.log('nie robię reqest')
            return
        }
        console.log('robię reqest')
        fetch(`http://localhost:9000/api/search?name=${this.state.nameInputValue}&country=${this.state.countrySelectValue}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return new Error('Error');
                }
            }).then(json => {
            console.log(json)

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
                <ResultTable />
            </div>
        )
    }
}