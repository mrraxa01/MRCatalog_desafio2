
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Catalog from "./pages/Catalog";


const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/catalog" element={<Catalog />}/> */}
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
