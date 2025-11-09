import { useState } from "react";
import axios from "axios";
import { API_BASE } from "../config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await axios.post(`${API_BASE}/auth/login`, { email, password });

    alert(res.data.message);

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.name);
      window.location.href = "/feed";
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={login}>Login</button>
      <br />
      <br />
      <a href="/signup">Don't have an account? Signup</a>
    </div>
  );
}

export default Login;
