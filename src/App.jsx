import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import { Spinner, Container } from "react-bootstrap";

// Lazy-loaded components
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));


const Loader = () => (
  <Container className="d-flex justify-content-center align-items-center vh-100">
    <Spinner animation="border" variant="primary" />
  </Container>
);

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
