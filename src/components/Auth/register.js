import { useState, useEffect } from "react";
import axios from "axios";

function Register() {
  const [registrations, setRegistrations] = useState([]);
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");


  const fetchData = async () => {
    try {
      const [regRes, userRes] = await Promise.all([
        axios.get("user/register"),
        axios.get("user/profile")
      ]);

      setRegistrations(Array.isArray(regRes.data) ? regRes.data : []);
      setUsers(Array.isArray(userRes.data?.users) ? userRes.data.users : []);
    } catch (error) {
      console.error("Error fetching data:", error);
    //   alert("Failed to fetch data.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRegister = async () => {
    if (!email || !name || !status) {
      alert("Please fill all fields!");
      return;
    }

    try {
      await axios.post("/register/register", {
        email,
        name,
        status
      });

      alert("Registered successfully!");
      setEmail("");
      setName("");
      setStatus("");
      fetchData();
    } catch (error) {
      console.error(error);
      alert(error.message || "Registration failed!");
    }
  };

  return (
    <div className="container">
      <h2>All Users</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {registrations.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No data found
              </td>
            </tr>
          ) : (
            registrations.map((r, index) => (
              <tr key={r._id}>
                <td>{index + 1}</td>
                <td>{r.user_Id?.name || "No user name"}</td>
                <td>{r.user_Id?.email || "No user email"}</td>
                <td>{r.user_Id?.status || "No status"}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="card mt-4">
        <div className="card-header">
          <h2>Register for Events</h2>
        </div>
        <div className="card-body">
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label>Name</label>
            <input
              className="form-control"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label>Status</label>
            <input
              className="form-control"
              placeholder="Enter status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>

          <button
            className="btn btn-primary"
            onClick={handleRegister}
            disabled={!email || !name || !status}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
