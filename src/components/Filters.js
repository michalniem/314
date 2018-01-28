import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CodeFilter from './CodeFilter'

export default class Filters extends Component {
    render() {
        return (
            <div className='searcher__filters'>
                <h2 className='searcher__filters--header'>Filter by</h2>
                <CodeFilter codeFilterValue={this.props.codeFilterValue}
                            handleCodeFilter={this.props.handleCodeFilter}/>
            </div>
        )
    }
}

Filters.propTypes = {
    codeFilterValue: PropTypes.string.isRequired,
    handleCodeFilter: PropTypes.func.isRequired,
};
