import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import SearchBox from "./Searchbox";
import LoginModal from "./LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { getAllProductsaction } from "../actions/productactions";

function EtsyNavbar(props) {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  //handle logout
  const handleLogout = (e) => {
    console.log("Inside logout");
    dispatch(logout());
    dispatch(getAllProductsaction());
  };

  return (
    <div className="EtsyNavbar">
      <Navbar bg="white" variant="white">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="logo">Etsy</Navbar.Brand>
          </LinkContainer>
          <SearchBox></SearchBox>
          <Nav className="me-auto">
            {!isLoggedIn ? (
              <LoginModal
                buttonName={"Favourites"}
                redirectTo={"/favorites"}
              ></LoginModal>
            ) : (
              <Link to="/favorites" className="nav-link">
                Favourites
              </Link>
            )}
          </Nav>
          <Nav className="me-auto">
            {!isLoggedIn ? (
              <LoginModal
                buttonName={"Sell"}
                redirectTo={"/createshop"}
              ></LoginModal>
            ) : userInfo.shopname === "" ? (
              <Link to="/createshop" className="nav-link">
                Sell
              </Link>
            ) : (
              <Link to={"/shoppage/" + userInfo.shopname} className="nav-link">
                Sell
              </Link>
            )}
          </Nav>
          <Nav className="me-auto">
            {!isLoggedIn ? (
              <LoginModal
                buttonName={"My Purchases"}
                redirectTo={"/mypurchases"}
              ></LoginModal>
            ) : (
              <Link to="/mypurchases" className="nav-link">
                My Purchases
              </Link>
            )}
          </Nav>
          <Nav className="me-auto">
            {!isLoggedIn ? (
              <LoginModal
                buttonName={"Profile"}
                redirectTo={"/profile"}
              ></LoginModal>
            ) : (
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            )}
          </Nav>
          <Nav className="me-auto">
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </Nav>
          {isLoggedIn ? (
            <ul class="nav navbar-nav navbar-right">
              <li>
                <Link to="/" onClick={handleLogout} className="nav-link">
                  Logout
                </Link>
              </li>
            </ul>
          ) : (
            <ul class="nav navbar-nav navbar-right">
              <li>
                <LoginModal buttonName={"Login"} redirectTo={"/"}></LoginModal>
              </li>
            </ul>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default EtsyNavbar;
