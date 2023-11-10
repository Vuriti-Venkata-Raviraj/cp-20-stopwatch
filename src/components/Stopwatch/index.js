// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {time: 0}
  }

  componentWillUnmount() {
    this.clearTimer()
  }

  start = () => {
    this.timerID = setInterval(this.incrementSeconds, 1000)
  }

  clearTimer = () => {
    clearInterval(this.timerID)
  }

  stop = () => {
    this.clearTimer()
  }

  reset = () => {
    this.clearTimer()
    this.setState({time: 0})
  }

  timerFormat = () => {
    const {time} = this.state
    const seconds = time % 60
    const minutes = Math.floor(time / 60)
    const secondsFormat = seconds < 10 ? `0${seconds}` : seconds
    const minutesFormat = minutes < 10 ? `0${minutes}` : minutes
    return `${minutesFormat}:${secondsFormat}`
  }

  incrementSeconds = () => {
    this.setState(prev => ({time: prev.time + 1}))
  }

  render() {
    return (
      <div className="main-container">
        <div className="stopwatch-container">
          <h1 className="title">Stopwatch</h1>
          <div className="time-card">
            <div className="timer-header">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="logo"
              />
              <h1 className="timer-heading">Timer</h1>
            </div>
            <h1 className="time">{this.timerFormat()}</h1>
            <div className="btn-container">
              <button type="button" onClick={this.start} className="btn green">
                Start
              </button>
              <button type="button" onClick={this.stop} className="btn red">
                Stop
              </button>
              <button type="button" onClick={this.reset} className="btn orange">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
