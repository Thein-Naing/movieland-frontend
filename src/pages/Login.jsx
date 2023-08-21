import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Container } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // create signIn function
  const signIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      if (auth) {
        navigate("/");
        return user.email;
      }
    } catch (error) {
      console.log(error);
    }
  };

  // create signUp function
  const signUp = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      style={{
        height: "100vh",
        backgroundColor: " black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <Link to="/"></Link> */}
      <div
        style={{
          width: "300px",
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          borderRadius: "5px",
          border: "1px solid lightgray",
          padding: "20px",
          marginTop: "100px",
        }}
      >
        <h3>Sign-in</h3>
        <form>
          <h5 style={{ mb: "5px" }}>E-mail</h5>
          <input
            style={{
              height: "30px",
              mb: "10px",
              backgroundColor: "white",
              width: "100%",
            }}
            type="text"
            value={email}
            s
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h5 style={{ mb: "5px" }}>Password</h5>
          <input
            style={{
              height: "30px",
              mb: "10px",
              backgroundColor: "white",
              width: "100%",
            }}
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={signIn}
            type="submit"
            style={{
              background: "blueviolet",
              borderRadius: "2px",
              width: "100%",
              height: "30px",
              border: "1px solid",
              mt: "20px",
              borderColor: "#5b34a8 #5b34a7 #5b34a6",
            }}
          >
            Sign In
          </button>
          <p style={{ mt: "15px", fontSize: "12px" }}>
            By signing-in you agree to Movieland's Terms and Conditions of Use &
            Sale.
          </p>
          <button
            onClick={signUp}
            style={{
              background: "blueviolet",
              borderRadius: "2px",
              width: "100%",
              height: "30px",
              border: "1px solid",
              mt: "20px",
              borderColor: "#5b34a8 #5b34a7 #5b34a6",
            }}
          >
            Register
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
