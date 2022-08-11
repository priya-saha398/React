import React from "react";
import "../stylesheet/Book.css"
const Book = props => {
    return(
    <div className="book">
        <h3 onClick={props.change}>BookName: { props.name}</h3>
        <h4>WritterName: { props.writtername}</h4>
        <input type="text" onChange={props.inputName} value= {props.name} />
    </div>
    );
}
export default Book;