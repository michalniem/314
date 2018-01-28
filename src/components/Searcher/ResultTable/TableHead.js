import React, { Component } from 'react'

export default class TableHead extends Component{
    render(){
        return(
            <thead className='searcher__table--head'>
            <tr>
                <th>name</th>
                <th>country</th>
                <th>code</th>
                <th>domains</th>
            </tr>
            </thead>
        )
    }
    shouldComponentUpdate(){
        return false
    }
};
