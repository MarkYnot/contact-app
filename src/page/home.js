import React from 'react';
import './css/App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contacts</h1>
        </header>
        <ul className="user-list">
          {this.state.users.map(user => (
            <li key={user.id}>
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;