import {Component} from 'react'

import './index.css'

class Welcome extends Component {
    state {
        isSubscribe: false,
    }

    onSubscribe = () => {
        this.setState = (prevState => ({isSubscribe: !prevState.isSubscribe}))
    }
    render getButtonText = () => {
        const {isSubscribe} = this.state
        
        return isSubscribe ? 'Subscribed' : 'Subscribe'
    }

    render() {
        const buttonText = this.getButtonText()

        return (
            <div className="bg-container">
            <h1 className="heading">Welcome</h1>
            <p className="description">Thank You! Happy Learning</p>
            <button className="subscribe-button" type="button" onClick={this.onSubscribe}>{buttonText}</button>
            <button className="button" type="button" onClick={this.onSubscribe}>{buttonText}</button>
            </div>
        )
    }
}

export default Welcome