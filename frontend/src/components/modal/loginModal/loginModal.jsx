import { useState } from "react";
import Modal from "../modal";
import "./loginModal.css";
import { login, register } from "../../../api";

function Login({ close, validate }) {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!username) {
      console.log("Username is required");
    } else if (!password) {
      console.log("Password is required");
    }
    if (username !== "" && password !== "") {
      const res = await login(username.toLowerCase(), password);
      if (res && res.token) {
        console.log(res)
        validate(res);
        close();
      } else {
        console.log("Failed: ", res);
      }
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>Email</label><br/>
      <input
        type="email"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <br/><br/><label>Password</label><br/>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/><br/>
      <div className="button">
        <button type="submit">Login</button>
      </div>
    </form>
  )
}

function Register({ close, validate }) {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!username) {
      console.log("Username is required");
    } else if (!username.includes("@") || !username.includes(".")) {
      console.log("Email must contain @ and .");
    } else if (!name) {
      console.log("Name is required");
    } else if (!password) {
      console.log("Password is required");
    } else {
      const res = await register(username.toLowerCase(), name, password);
      if (res && res.token) {
        validate(res)
        close();
      } else {
        console.log("Failed: ", res);
      }
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>Email</label><br/>
      <input
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <br/><br/><label>Name</label><br/>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br/><br/><label>Password</label><br/>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/><br/>
      <div className="button">
        <button type="submit">Register</button>
      </div>
    </form>
  )
}

export default function LoginModal({ close, validate }) {
  const [tab, setTab] = useState("login");
  return (
    <Modal close={close}>
      <div className="loginContainer" onClick={(e) => e.stopPropagation()}>
        <div className="loginHeader">
          <p onClick={() => setTab("login")}>Login</p>
          <p onClick={() => setTab("register")}>Register</p>
        </div>
        <div className="loginForm">
          {tab === "login"
            ? <Login close={close} validate={validate} />
            : <Register close={close} validate={validate} />
          }
        </div>
      </div>
    </Modal>
  );
};