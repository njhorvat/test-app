import React, { Component } from 'react';

class Input extends Component {
    constructor() {
        super()

        this.state = {
            inputValue: "Reactive Data!"
        }
        
        // the context of "this" being undefined when we called the function was the issue
        //https://github.com/goatslacker/alt/issues/283#issuecomment-115391700
        this.changeInputValue = this.changeInputValue.bind(this)
    }

    changeInputValue(event){
        this.setState({ inputValue: event.target.value })
    }

    render() {
        return (
            <div>
                <h2>{this.state.inputValue}</h2>
                <input value={this.state.inputValue} onChange={this.changeInputValue}/>
            </div>
        )
    }
}

export default Input