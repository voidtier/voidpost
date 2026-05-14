import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Nav_bar from "./nav/Nav";
import Signin from "./auth/Singin";
import Signup from "./auth/Signup";
import Home from "./pages/Home";

function Layout() {
  return (
    <>
      <Nav_bar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
