import React from "react";

class StatefulGreetingWithCallback extends React.Component {

    // Constructors always take on this form!
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }

    handleClick() {
        // setState() is an asynchronous function...
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter",
        }, ()=>{
            // Any time code needs to run after the state has been changed
            // add a callback function ^
            console.log("New State:", this.state.introduction);
            console.log("New State", this.state.buttonText);
        });
        // ... which means these console.log events happen before the setState method completes
        // hence - old values are logged!
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
    }

    render () {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreetingWithCallback;