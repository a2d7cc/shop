import React from "react";
import { useContext } from "react";
import { Context } from "../index";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.setItem("token", null);
    navigate("/login");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{ color: "white" }} to="/shop">
            Buy Device!
          </NavLink>
          {user.isAuth ? (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <NavLink to="/admin">Admin panel</NavLink>
              <Button
                variant={"outline-light"}
                className="ms-3"
                onClick={logOut}
              >
                Logout
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <NavLink to="/login">Authorization</NavLink>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
});

export default NavBar;
