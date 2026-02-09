import { Container, Row, Col, Button } from "react-bootstrap";
import {
  Home,
  Search,
  Cpu,
  Grid,
  ShoppingCart,
  User,
  LogIn,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png"

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="p-0">
      
      <Row
        className="border-bottom align-items-center"
        style={{ height: "60px" }}
      >
        <Col>
          <img
            src={logo}
            alt="InSyllabus"
            height="45"
            style={{ marginLeft: "15px" }}
          />
        </Col>
      </Row>

      
      <div className="sidebar d-flex flex-column">
        <div className="sidebar-item">
          <Home />
          <span className="sidebar-text">Home</span>
        </div>

        <div className="sidebar-item">
          <Search />
          <span className="sidebar-text">Search</span>
        </div>

        <div className="sidebar-item">
          <Cpu />
          <span className="sidebar-text">Engineering</span>
        </div>

        <div className="sidebar-item">
          <Grid />
          <span className="sidebar-text">Category</span>
        </div>

        {/* <div className="sidebar-item">
          <ShoppingCart />
          <span className="sidebar-text">Cart</span>
        </div> */}

        {/* <div className="sidebar-item">
          <User />
          <span className="sidebar-text">My Space</span>
        </div> */}

        <div className="sidebar-login">
          <Button
            variant="success"
            className="w-100"
            onClick={() => navigate("/")}
          >
            <LogIn size={18} className="me-2" />
            <span className="sidebar-text">Login</span>
          </Button>
        </div>
      </div>

     
      <div style={{ padding: "20px", marginTop: "60px" }}>
        <h5></h5>
        <p></p>
      </div>
    </Container>
  );
};

export default HomePage;
