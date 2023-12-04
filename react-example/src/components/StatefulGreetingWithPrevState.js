import React from "react";

class StatefulGreetingWithCallback extends React.Component {

    // Constructors always take on this form!
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        this.setState({
            introduction: this.state.introduction === "Hello" ? "Goodbye!" : "Hello",
            buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
        }, ()=>{
            console.log("New State:", this.state.introduction);
            console.log("New State", this.state.buttonText);
        });
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render () {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.incrementFive()}>Increment</button>
                <p>You've clicked {this.state.count} times</p>
            </div>
        )
    }
}

export default StatefulGreetingWithCallback;