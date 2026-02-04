import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { User, Mail, Lock } from "lucide-react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("All fields are required!");
      return;
    }

    toast.success("Registration Successful!");
    console.log({ name, email, password });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "420px" }} className="p-4 shadow">
        <h3 className="text-center mb-3">Register</h3>

        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <div className="d-flex align-items-center border rounded px-2">
              <User size={18} className="me-2" />
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-0"
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <div className="d-flex align-items-center border rounded px-2">
              <Mail size={18} className="me-2" />
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-0"
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <div className="d-flex align-items-center border rounded px-2">
              <Lock size={18} className="me-2" />
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-0"
              />
            </div>
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            Register
          </Button>
        </Form>

        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Card>
    </Container>
  );
};

export default Register;
