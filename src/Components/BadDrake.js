import React from "react"
import {yes, no} from '../objects.js'

class BadDrake extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            image: no["no-image"],
            text: no["no-statement"]
        }
    }

    handleClick = () => {
        if (this.state.image === no["no-image"]) {
            this.setState ({
                image: yes["yes-image"],
                text: yes["yes-statement"]
            })
        }

        else if (this.state.image === yes["yes-image"]) {
            this.setState ({
                image: no["no-image"],
                text: no["no-statement"]
            })
        }
    }

    render() {

        return (
            <div>
            <h1>
                {this.state.text}
            </h1>
            <img onClick={this.handleClick} src={this.state.image} alt={this.state.image}>
            </img>
            </div>

        )


    }

}

export default BadDrake