import React from "react";
import { useContext } from "react";
import { Context } from "../index";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {observer} from 'mobx-react-lite'

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{ color: "white" }} to="/shop">
            Buy Device!
          </NavLink>
          {user.isAuth ? (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button variant={"outline-light"} ><NavLink to='/admin'>Admin panel</NavLink></Button>
              <Button variant={"outline-light"} className="ms-3"><NavLink to='/login'>Logout</NavLink></Button>
            </Nav>
          ) : (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Authorization</Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
});

export default NavBar;
