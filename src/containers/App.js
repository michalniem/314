import React, { Component, Fragment } from 'react'

import Toolbar from '../components/Toolbar/Toolbar'
import Header from '../components/Header/Header'
import Searcher from '../components/Searcher/Searcher'

export default class App extends Component {

    render() {
        return (
            <Fragment>
                <Toolbar />
                <Header />
                <Searcher />
            </Fragment>
        )
    }
}
