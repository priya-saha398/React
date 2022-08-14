import React, { Component } from 'react';
import Book from "./book";
import booklist from "../asset/books";

class MainComponent extends Component {
    state = {
        books: booklist,
        showBook : true
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
      changewithInputState = (event,index) =>{
        // this.setState({
        //   books: [
        //     {name: event.target.value,writtername: "hamid" },
        //     {name: "mim",writtername: "hamid" },
        //     {name: event.target.value,writtername: "hamid" },
        //     {name: "nafisa",writtername: "hamid" }
        //   ]
        // });
    
        const book = {
          ...this.state.books[index]
        }
        book.name = event.target.value;
        const updatedBookState = [...this.state.books];
        updatedBookState[index] = book;
        this.setState(
         {books : updatedBookState} 
        )
    
      }
      toogleState=()=>{
        this.setState({showBook : !this.state.showBook});
      }
      render()
      {
        const style = {
          borderRadius: "2%",
          border: "2px solid black",
          backgroundColor: "black",
          color: "white",
          padding: "10px 20px",
          
          width: "100%"
        };
        let books = null;
        if(this.state.showBook){
          const booksState = this.state.books;
        // console.log(this);
         books = booksState.map(function(book,index){
          
          return (
            <Book name={book.name} 
            writtername={book.writtername}
            key={book.id}
            inputName={(event) => this.changewithInputState(event,index)}/>
          )
        },this)
          // console.log(books);
        
        }
        
        
        return(
          <div className='App'>
            <h1 style={style}>Book list</h1>
            {/* <button onClick={this.changeBookState.bind(this,"1984")}>Change State</button>
            <input type="text" onChange={this.changewithInputState} /> */}
            {/* <Book name= {this.state.books[0].name} writtername= {this.state.books[0].writtername} inputName = {this.changewithInputState} />
            <Book name= {this.state.books[1].name} writtername= {this.state.books[1].writtername}  />
            <Book name= {this.state.books[2].name} writtername= {this.state.books[2].writtername}  />
            <Book name= {this.state.books[3].name} writtername= {this.state.books[3].writtername} change= {()=>this.changeBookState("Ninety Eighty Four")}/> */}
            <button onClick={this.toogleState}>Toogle Book</button>
            {books}
          </div>
        )
      }
}
export default MainComponent;