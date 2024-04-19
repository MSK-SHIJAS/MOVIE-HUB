
import React, { useState } from "react";
import './Login.css'
import 'bootstrap/dist/css/bootstrap.css';

function App1() {
  // State variables
  const [email, setEmail] = useState(""); // Store email input value
  const [password, setPassword] = useState(""); // Store password input value
  const [isVisible, setIsVisible] = useState(false); // Toggle visibility of user list table
  const [backupData, setBackupData] = useState([]); // Store backup of original user data
  const [search, setSearch] = useState(""); // Store search query
  const [form, setForm] = useState([]); // Store user data entered through the form

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (email === "") {
      return alert("Please enter an email address");
    }
    if (password === "") {
      return alert("Please enter a password");
    }
    if (password.length < 8) {
      return alert("Password must be at least 8 characters long");
    }
    if (password.length > 16) {
      return alert("Password cannot be more than 16 characters long");
    }

    // Add user data to form state array
    setIsVisible(true);
    setForm([...form, { email: email, password: password }]);
    setBackupData([...form, { email: email, password: password }]);

    // Clear input fields
    setEmail("");
    setPassword("");
  };

  // Function to handle deletion of a user
  const handleDeleteUser = (indexOf) => {
    const status = window.confirm("Delete?");

    if (status) {
      const result = form.filter((item, index) => index !== indexOf);
      setForm(result);
    }
  };

  // Function to handle search
  const handleSearch = (data) => {
    setSearch(data);

    // Filter user data based on search query
    if (data === "") {
      setForm(backupData);
    } else {
      const filteredItems = form.filter((user) =>
        user.email.toLowerCase().includes(data.toLowerCase())
      );
      setForm(filteredItems);
    }
  };

  // delete function
  // validation ( length, required )
  // search

  // toast
  // validation
  // modal
  // edit
  // localstorage
  // filter
  // sort
  // paginations

  return (
    <div className="A">
        <div>
      {/* Form */}
      <form className="form" onSubmit={handleSubmit}>
        <h1>Add</h1>
        <div className="form-div">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="form-div">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control mt-2"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="form-div">
          <input
            className="btn btn-primary mt-2"
            type="submit"
            placeholder="Submit"
          />
        </div>
      </form>

      {/* User list */}
      <div className="flex">
        {isVisible && (
          <div>
            {/* Search input */}
            <input
              type="search"
              className="form-control mt-2"
              placeholder="Search"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {/* User table */}
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {form.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <tr>
                        <button className="btn btn-danger mt-5"onClick={() => handleDeleteUser(index)}>
                          Delete
                        </button>
                      </tr>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default App1;