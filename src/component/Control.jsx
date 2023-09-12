import React, { Component } from 'react'
import Search from './Search'
import Sort from './Sort'

export class Control extends Component {
  render() {
    return (
        <>
            {/* Search */}
            <Search onSearch={this.props.onSearch}/>
            {/* Sort */}
            <Sort 
                onSort={this.props.onSort}
                sortBy={this.props.sortBy}
                sortValue={this.props.sortValue}                    

            />
        </>
        
        )
    }
}

export default Control