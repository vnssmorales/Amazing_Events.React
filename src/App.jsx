import "./App.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Navbar } from "./components/Navbar/navbar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import { Upcoming } from "./pages/UpComing";
import { PastEvents } from "./pages/PastEvents";
import { Contact } from "./pages/Contact";
import { Stats } from "./pages/Stats";
import { Details } from "./pages/Details";
import { Footer } from "./components/Footer/footer";

function App() {
  return (
    <>
     <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/pastEvents" element={<PastEvents />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="*" element={<Home/>} />
       </Routes>
       <Footer />
      </Router>
    </>
  );
}

export default App;
