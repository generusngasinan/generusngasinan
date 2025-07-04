import Homepages from "./pages/Homepages";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Imagepages from "./pages/Imagepages";
import Videopages from "./pages/Videopages";
import Caberawitpages from "./pages/Caberawitpages";
import Caberawitkg from "./pages/Caberawitkg";
import Berita1 from "./berita/Berita1";
import AboutUs from "./berita/AboutUs";
import Berita2 from "./berita/Berita2";
import Berita3 from "./berita/Berita3";
import Berita4 from "./berita/Berita4";
import Mainpages from "./pages/Mainpages";
import Berita5 from "./berita/Berita5";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/mainpages" element={<Mainpages />} />
        <Route path="/caberawitkg" element={<Caberawitkg />} />
        <Route path="/imagepages" element={<Imagepages />} />
        <Route path="/videopages" element={<Videopages />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/caberawitpages" element={<Caberawitpages />} />
        <Route path="/berita1" element={<Berita1 />} />
        <Route path="/berita2" element={<Berita2 />} />
        <Route path="/berita3" element={<Berita3 />} />
        <Route path="/berita4" element={<Berita4 />} />
        <Route path="/berita5" element={<Berita5 />} />
      </Routes>
    </Router>
  );
}

export default App;
