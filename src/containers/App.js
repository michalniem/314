import React, { Component, Fragment } from 'react'

import Toolbar from '../components/Toolbar'
import Header from '../components/Header'

export default class App extends Component {

    render() {
        return (
            <Fragment>
                <Toolbar />
                <Header />
            </Fragment>
        )
    }
}
