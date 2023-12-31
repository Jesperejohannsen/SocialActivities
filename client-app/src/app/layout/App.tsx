import "./styles.css";
import NavBar from "../../components/navbar/NavBar";
import { Container } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "../../features/activities/home/HomePage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  const location = useLocation();
  return (
    <>
    <ToastContainer position='bottom-right' hideProgressBar theme='colored'/>
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <Container style={{ marginTop: "7em" }}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}

export default observer(App);
