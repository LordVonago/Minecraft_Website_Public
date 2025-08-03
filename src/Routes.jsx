import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Index.jsx";
import Store from "./pages/Store/Index.jsx";
import Votes from "./pages/Votes/Index.jsx";
import Staff from "./pages/Staff/index.jsx";
import Terms from "./components/Terms/Terms.jsx";
import Cart from "./pages/Cart/Index.jsx";

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/votes" element={<Votes />}></Route>
        <Route path="/staff" element={<Staff />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
