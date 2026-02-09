import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogIn, UserPlus, Home } from "lucide-react";

const AppNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        {/* LOGO / BRAND */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold text-primary"
        >
          InSyllabus
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              active={location.pathname === "/"}
            >
              <Home size={16} className="me-1" />
              Home
            </Nav.Link>
          </Nav>

         
          <div className="d-flex gap-2">
            <Button
              variant="outline-primary"
              onClick={() => navigate("/login")}
            >
              <LogIn size={16} className="me-1" />
              Login
            </Button>

            <Button
              variant="primary"
              onClick={() => navigate("/register")}
            >
              <UserPlus size={16} className="me-1" />
              Register
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
