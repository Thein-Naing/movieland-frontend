import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";

const Header = () => {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const handleAuthentication = async () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "blueviolet" }}>
          <FontAwesomeIcon icon={faVideo} />
          Movieland
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/watchList">
              Watch List
            </NavLink>
          </Nav>
          <Link to={!user && "/login"}>
          <span style={{padding:"10px"}}>Hi {!user ? "Guest" : user?.email}</span>
            <Button
              variant="outline-primary"
              className="me-2"
              onClick={handleAuthentication}
            >

              <span style={{padding:"10px"}}>
                {user ? "Sign Out" : "Sign In"}
              </span>


            </Button>
          </Link>
          {/* <Button variant="outline-primary">Log Out</Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
