// Write your code here
import {Component} from 'react'
import './index.css'

import DestinationItem from './components/DestinationItem/index'

class DestinationSearch extends Component {
  state = {searchInput: '', destinationsList: destinationsList}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, destinationsList} = this.state
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.includes(searchInput),
    )

    return (
      <div className="container">
        <h1 className="title">Destination List</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul className="list-container">
          {searchResults.map(eachItem => (
            <DestinationItem ItemDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
