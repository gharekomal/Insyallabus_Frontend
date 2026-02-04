import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { Mail, Lock } from "lucide-react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("All fields are required!");
      return;
    }

    toast.success("Login Successful!");
    console.log({ email, password });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "400px" }} className="p-4 shadow">
        <h3 className="text-center mb-3">Login</h3>

        <Form onSubmit={handleLogin}>
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

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>

        <p className="text-center mt-3">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </Card>
    </Container>
  );
};

export default Login;
