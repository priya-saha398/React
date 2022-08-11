import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import Book from './component/book';

// class App extends Component {
//   render(){
//     return (
//       <div className="App">
//         <h1>hello world</h1>
//         <Person name="priya" />
//       </div>
//     );
//   }
// }
// .........................START = FUNCTIONAL COMPONENT..............
// function App(){
//   return(
//     <div className='App'>
//       <h1>Book List</h1>
//        <Book name="mawlana" writtername="hamid" />
//        <Book name="mawlana" writtername="hamid" />
//        <Book name="mawlana" writtername="hamid" />
//        <Book name="mawlana" writtername="hamid" />
//     </div>
//   )
// }
// ........................END FUNCTIONAL COMPONENT................


// START.= ANOTHER WAY TO WRITE { FOUNCTION App() } JSX FROMATE TO REACT LIBRARY METHOD................

// function App(){
//   return React.createElement('div', { className:"App" },React.createElement('h1',null,"hello world"),<Person />)

// }
// ,,,,,,,,,,,END......................

// ,,,,,,,,,,,,,,,,,,,,,,,,,START= CLASS COMPONENT OF BOOKS,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

class App extends Component {
  state = {
    books: [
      {name: "mawlana",writtername: "hamid" },
      {name: "riya",writtername: "hamid" },
      {name: "tiya",writtername: "hamid" },
      {name: "piya",writtername: "hamid" }
    ]
  }
  changeBookState = newName => {
    // console.log("button clicked");
    this.setState({
      books: [
        {name: newName,writtername: "hamid" },
        {name: "mim",writtername: "hamid" },
        {name: "sumaiya",writtername: "hamid" },
        {name: "nafisa",writtername: "hamid" }
      ]
    });
  }
  changewithInputState = (event) =>{
    this.setState({
      books: [
        {name: event.target.value,writtername: "hamid" },
        {name: "mim",writtername: "hamid" },
        {name: event.target.value,writtername: "hamid" },
        {name: "nafisa",writtername: "hamid" }
      ]
    });

  }
  render(){
    const style = {
      borderRadius: "2%",
      border: "2px solid black",
      backgroundColor: "black",
      color: "white",
      padding: "10px 20px",
      position: "fixed",
      width: "100%"
    };
    return(
      <div className='App'>
        <h1 style={style}>Book list</h1>
        <button onClick={this.changeBookState.bind(this,"1984")}>Change State</button>
        <input type="text" onChange={this.changewithInputState} />
        <Book name= {this.state.books[0].name} writtername= {this.state.books[0].writtername} inputName = {this.changewithInputState} />
        <Book name= {this.state.books[1].name} writtername= {this.state.books[1].writtername}  />
        <Book name= {this.state.books[2].name} writtername= {this.state.books[2].writtername}  />
        <Book name= {this.state.books[3].name} writtername= {this.state.books[3].writtername} change= {()=>this.changeBookState("Ninety Eighty Four")}/>
      </div>
    )
  }

}

export default App;
