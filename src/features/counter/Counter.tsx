import React from "react";

interface Count{
    count:number
}

class Counter extends React.Component<{},Count>{
    constructor(props: {} | Readonly<{}>){
        super(props)
        this.state={
            count:0
        }
    }
    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    decrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    render(){
        if(this.state.count<0)
        {
            this.setState({
                count:0
            })
        }
        return(
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default Counter;