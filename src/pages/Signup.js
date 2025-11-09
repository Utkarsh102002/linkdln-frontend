import { useState } from "react";
import axios from "axios";
import { API_BASE } from "../config";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    await axios.post(`${API_BASE}/auth/signup`, { name, email, password });
    alert("Signup successful!");
    window.location.href = "/login";
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Signup</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <br />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={signup}>Signup</button>
    </div>
  );
}

export default Signup;
