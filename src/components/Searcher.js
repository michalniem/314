import React, { Component } from 'react'

import SearchBar from './SearchBar'
import ResultTable from './ResultTable'

export default class Searcher extends Component {
    render(){
        return(
            <div className='searcher'>
                <SearchBar />
                <ResultTable />
            </div>
        )
    }
}