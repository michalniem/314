import React, { Component } from 'react'

import SearchBar from './SearchBar'

export default class Searcher extends Component {
    render(){
        return(
            <div className='searcher'>
                <SearchBar />
                <div>Result Table</div>
            </div>
        )
    }
}