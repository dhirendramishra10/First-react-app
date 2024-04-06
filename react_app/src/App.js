import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import DestinationList from "./Components/DestinationList";

const LIST_URL = 'https://first-react-app.ddev.site/jsonapi/node/destination';

class App extends Component {

  constructor() {
    super();
    this.state = { data: null };
    this.loadDestinations = this.loadDestinations.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  componentWillMount() {
    this.loadDestinations();
  }

  updateData(responseData) {
    this.setState({data: responseData.data});
  }

  loadDestinations() {
    fetch(LIST_URL, {mode:'cors'})
    .then(function (response) {
      return response.json();
    })
    .then((data) => this.updateData(data))
    .catch(err => console.log('Fetching Destinations Failed', err));
  }

  render() {
    return (
      <div className="App">
        <DestinationList
          data={this.state.data}
        />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
