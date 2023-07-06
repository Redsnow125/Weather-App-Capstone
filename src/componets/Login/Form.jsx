import axios from "axios";
import { React, useRef } from "react";
import "./Form.css";
import logo from "../../client/assets/logo.png"

const Form = (props) => {
  const loginNameRef = useRef();
  const loginPassRef = useRef();

  const regNameRef = useRef();
  const regPassRef = useRef();

  const handleLogin = (evt) => {
    evt.preventDefault();
    let body = {
      username: loginNameRef.current.value,
      password: loginPassRef.current.value,
    };
    axios
      .post("http://localhost:3000/login", body)
      .then((res) => {
        props.setAuth(true);
      })
      .catch((err) => {
        alert("ACCESS DENIED");
      });
  };
  const handleReg = (evt) => {
    evt.preventDefault();
    let body = {
      username: regNameRef.current.value,
      password: regPassRef.current.value,
    };
    axios
      .post("http://localhost:3000/register", body)
      .then((res) => {
        props.setAuth(true);
      })
      .catch((err) => {
        alert("Cannot Register");
      });
  };

  return (
    <div id="formContain">
              <img src={logo} alt="pic" id="formlogo"/> 

      <div id="formCard">
        <form onSubmit={handleLogin} >
          <h2>Login</h2>
          <input
            className="formClass"
            ref={loginNameRef}
            type="text"
            placeholder="Username"
          />
          <input
            className="formClass"
            ref={loginPassRef}
            type="password"
            placeholder="Password"
          />
          <button>Login</button>
        </form>
        <form onSubmit={handleReg}>
          <h2>Register</h2>
          <input
            className="formClass"
            ref={regNameRef}
            type="text"
            placeholder="Username"
          />
          <input
            className="formClass"
            ref={regPassRef}
            type="password"
            placeholder="Password"
          />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
