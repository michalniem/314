import React, { Component } from 'react'

import NameInput from './NameInput'
import CountrySelect from './CountrySelect'

export default class Searcher extends Component {
    render(){
        return(
            <form className='searcher__searchbar'>
                <NameInput />
                <CountrySelect />
                <button className='searcher__searchbar--btn'>
                    <i className="fa fa-search" aria-hidden="true"/>
                </button>
            </form>
        )
    }
}