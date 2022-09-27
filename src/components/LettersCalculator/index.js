// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchResultCount: 0}

  onPhraseCount = event => {
    this.setState({searchResultCount: event.target.value.length})
  }

  render() {
    const {searchResultCount} = this.state

    return (
      <div className="big-container">
        <div className="bg-container">
          <div className="container">
            <h1>Calculate the Letters you enter</h1>
            <label htmlFor="phraseVal">Enter the phrase</label>
            <input
              type="text"
              id="phraseVal"
              name="phraseVal"
              className="inputElement"
              placeholder="Enter the phrase"
              onChange={this.onPhraseCount}
            />

            <button type="button" className="button">
              <p>No.of letters: {searchResultCount}</p>
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
