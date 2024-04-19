import React, { useState } from "react";
import './Login.css'

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const [form, setForm] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsVisible(true);
    setForm([...form, { email: email, password: password }]);
  };
  return (
    <div className="A">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Add </h1>
        <div className="form-div">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-filed"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="form-div">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-filed"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="form-div ">
          <input
            className="submit-btn form-filed"
            type="submit"
            placeholder="Password"
          />
        </div>
      </form>

      <div className="flex">
        {isVisible ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {form.map((item) => {
                return (
                  <tr>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>
                      <button>delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Form;