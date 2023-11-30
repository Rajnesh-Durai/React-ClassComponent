import React from "react";

interface Details{
    name:string,
    age:number
}

class PersonDetails extends React.Component<{},{details:Details}>{
    constructor(props: {} | Readonly<{}>){
        super(props);
        this.state={
            details:{
                name:'',
                age:0
            }
        }
    }
    handleName=(event:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            details:{
                ...this.state.details,
                name:event.target.value
            }
        })
    }
    handleAge=(event:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            details:{
                ...this.state.details,
                age:Number(event.target.value)
            }
        })
    }
    handleSubmit=()=>{
        const json=JSON.stringify(this.state.details)
        alert(json);
    }
    render(){
        return(
            <>
                <h2>Getting Inputs from User and Adding in a Table</h2>
                <div>
                    <label htmlFor="name">Enter Your Name: </label>
                    <input id="name" type="text" required onChange={this.handleName}></input>
                </div>
                <div>
                    <label htmlFor="age">Enter Your Age: </label>
                    <input id="age" type="number" required onChange={this.handleAge}></input>
                </div>
                <div>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </>
        )
    }
}

export default PersonDetails;