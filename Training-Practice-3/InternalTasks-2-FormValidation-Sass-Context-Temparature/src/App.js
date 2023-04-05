import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sass from "./pages/Sass";
import Sass2 from "./pages/Sass2";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Temparature from "./pages/Temparature";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="sass" element={<Sass />} />
            <Route path="sass2" element={<Sass2 />} />
            <Route path="form" element={<Form />} />
            <Route path="temparature" element={<Temparature />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
