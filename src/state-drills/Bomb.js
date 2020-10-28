import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    createRender() {
        const count = this.state.count;

        if(count >= 8) {
            return 'BOOM!!!!';
        } else if(count % 2 === 0) {
            return 'tick';
        } else {
            return 'tock';
        }
    }
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <p>Output: {this.createRender()}</p>
            </div>
        )
    }
}

export default Bomb;