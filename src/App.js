import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Technologies from './Pages/Technologies';
import { BASE_URL } from './constants';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={`${BASE_URL}`} element={<Home />} />
        <Route
          path={`${BASE_URL}/experience`}
          element={<Experience />}
        />
        <Route path={`${BASE_URL}/contact`} element={<Contact />} />
        <Route path={`${BASE_URL}/projects`} element={<Projects />} />
        <Route
          path={`${BASE_URL}/technologies`}
          element={<Technologies />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
