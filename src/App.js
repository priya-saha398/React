import logo from './logo.svg';
import './App.css';
import React from 'react';


import MainComponent from './component/MainComponent';

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

const App = () => {
  return(
    <MainComponent />
  )
}
  




export default App;
