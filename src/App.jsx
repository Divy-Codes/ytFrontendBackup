import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import "./_app.scss";
import { useReducer } from "react";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useReducer((value) => !value, false);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className="appContainer ">
        <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
        {/* Import Container from react-bootstrap. 
    'fluid' :  to remove default padding etc*/}
        <Container fluid className="appMain ">
          {children}
        </Container>
      </div>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        />

        <Route path="/auth" element={<LoginScreen />} />
        <Route
          path="/search"
          element={
            <Layout>
              <h1>Search Component</h1>
            </Layout>
          }
        />
        <Route path="*" element={<h3>Error 404: Not Found. Invalid URL </h3>} />
      </Routes>
    </Router>
  );
}
