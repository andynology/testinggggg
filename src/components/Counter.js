import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementCount()}>
                    Increment please
                </button>
            </div>
        )
    }
}

export default Counter
