import React, { Component } from 'react';

class AdminPage extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    this.setState({ users });
  }

  deleteUser = (index) => {
    // Copy the current state
    const updatedUsers = [...this.state.users];
    
    // Remove the user at the specified index
    updatedUsers.splice(index, 1);
    
    // Update the state with the modified user list
    this.setState({ users: updatedUsers });

    // Update local storage to reflect the deletion
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  }

  render() {
    return (
      <div>
        <h1>Admin Page</h1>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => this.deleteUser(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AdminPage;