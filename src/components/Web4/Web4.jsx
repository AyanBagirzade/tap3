import React, { Component } from "react"
import "./style.css"

export default class Web4 extends Component{
    click=(event)=>{
        console.log('button click')
    }
    render(){
        return(
            <button onClick={this.click}>Web4</button>
        )
    }
}

