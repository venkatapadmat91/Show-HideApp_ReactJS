// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstNameVisible: false, isLastNameVisible: false}

  changeFirstNameVisible = () => {
    const {isFirstNameVisible} = this.state

    this.setState({isFirstNameVisible: !isFirstNameVisible})
  }

  changeLastNameVisible = () => {
    const {isLastNameVisible} = this.state

    this.setState({isLastNameVisible: !isLastNameVisible})
  }

  render() {
    const {isFirstNameVisible, isLastNameVisible} = this.state

    return (
      <div className="show-hide-container">
        <div className="show-hide-card-con">
          <h1>Show/Hide</h1>
          <div className="show-hide-items-con">
            <div className="item-con">
              <button
                type="button"
                className="button"
                onClick={this.changeFirstNameVisible}
              >
                Show/Hide Firstname
              </button>
              {isFirstNameVisible && (
                <div className="show-hide-output">
                  <p>Joe</p>
                </div>
              )}
            </div>
            <div className="item-con">
              <button
                type="button"
                className="button"
                onClick={this.changeLastNameVisible}
              >
                Show/Hide Lastname
              </button>
              {isLastNameVisible && (
                <div className="show-hide-output">
                  <p>Jonas</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
