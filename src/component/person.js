import React, { Component } from "react"

class Person extends Component {
    constructor(props){
        super(props);
    }
    render(){
    return(
      <p>name:{this.props.name}</p>
    )
    }
  }
  export default Person;
  