import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import "./Header.css";

import { logout } from "./../../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
        <LinkContainer to="/">
            <Nav.Link className="nav-cal">
              <img
                style={{ width: '35px', height: "auto",  marginBottom: '50px', marginLeft: "-20px"  }}
                src="/images/orrery_icon.svg"
                alt=""
              />
            </Nav.Link>
          </LinkContainer>
      <LinkContainer to="/">
        <Navbar.Brand className="nav-cal">
          <Image className="logo" width="55px" src="/Logo.png" />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ">
          <LinkContainer to="/">
            <Nav.Link className="nav-cal">TRANG CHỦ</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/dich-vu">
            <Nav.Link className="nav-cal">DỊCH VỤ</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/san-pham-thien-van">
            <Nav.Link className="nav-cal">SẢN PHẨM THIÊN VĂN</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/lien-he">
            <Nav.Link className="nav-cal">LIÊN HỆ</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cart">
            <Nav.Link
              className={`${
                userInfo ? "remove-space" : "add-space cart nav-cal"
              } `}
            >
              <i className="fas fa-shopping-cart"></i>GIỎ
            </Nav.Link>
          </LinkContainer>
          {userInfo ? (
            <NavDropdown title={userInfo.name.toUpperCase()} id="username">
              {userInfo && userInfo.isAdmin && (
                <LinkContainer to="/admin/dashboard">
                  <NavDropdown.Item>QUẢN LÝ</NavDropdown.Item>
                </LinkContainer>
              )}
              <LinkContainer to="/profile">
                <NavDropdown.Item>HỒ SƠ</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavDropdown.Item onClick={logoutHandler}>
                  ĐĂNG XUẤT
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link className="login nav-cal">ĐĂNG NHẬP</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
