import React, { useState } from "react";
function Forms() {
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: 0
  });
  const [data, setData] = useState([]);
  const [emailError, setEmailError] = useState("");
  const [err, setErr] = useState("");
  const validate = (val) => {
    let emailError = "";
    if (!val.includes('@')) {
      emailError = 'invaild email'
    }
    if (emailError !== "") {
      setEmailError(emailError)
      return false;
    }
    else {
      setEmailError(emailError);
    }
    return true;
  }
  const handleEmailChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const isValid = validate(e.target.value);
  }
  const handleChange = e => {
    if (e.target.name === "phoneNo") {
      var phoneno = /^\d{10}$/;
      var val = e.target.value.match(phoneno);
      if (e.target.value && !val) {
        setErr("Invalid No");
      } else {
        setErr("");
      }
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleData = e => {
    e.preventDefault();
    setData([...data, formData]);
    alert(" Form Successfully Submitted");
  };
  const handleTab = () => {
    setTab1(!tab1);
    setTab2(!tab2);
  };
  const isEnabled = formData.firstName.length > 0 && formData.phoneNo.length > 0 && formData.email.length > 0;
  return (
    <div className="container">
      <div className="tab__container">
        <button className="tab__buttons" onClick={handleTab}>Tab1</button>
        <button className="tab__buttons" onClick={handleTab}>Tab2</button>
      </div>
      <br />
      <br />
      {tab1 && (
        <div>
          <form onSubmit={handleData}>
            <table>
              <tr>
                <td><label>First Name</label></td><td>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="FirstName"
                    onChange={handleChange}
                    required
                  />
                </td>
                <td><label>Last Name</label></td><td>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="LastName"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td><label>Country</label></td><td>
                  <select>
                    <option value="India">India</option>
                    <option value="United State">United State</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td><label>  Email</label></td> <td>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleEmailChange}
                  />
                  <br />
                  <div style={{ fontSize: "20px", color: "red" }}>{emailError && emailError} </div>
                </td>
              </tr>
              <tr>
                <td><label>Phone Number </label></td><td>
                  <input
                    type="text"
                    name="phoneNo"
                    placeholder="Phone"
                    onChange={handleChange}
                  />
                  <div style={{ fontSize: "20px", color: "red" }}> {err && <p>{err}</p>}</div>
                </td>
              </tr>
            </table>
            <br />
            <button type="submit" className="btn btn-success" disabled={!isEnabled}>Submit</button>
          </form>
        </div>
      )}
      {tab2 && (
        <div className="container">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>FirstName</th>
                <th>Email</th>
                <th>PhoneNUM</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.firstName}</td>
                      <td>{item.email}</td>
                      <td>{item.phoneNo}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
export default Forms