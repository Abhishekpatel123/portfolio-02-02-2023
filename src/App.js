import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Technologies from './Pages/Technologies';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/portfolio-02-02-2023' element={<Home />} />
        <Route
          path='/portfolio-02-02-2023/experience'
          element={<Experience />}
        />
        <Route path='/portfolio-02-02-2023/contact' element={<Contact />} />
        <Route path='/portfolio-02-02-2023/projects' element={<Projects />} />
        <Route
          path='/portfolio-02-02-2023/technologies'
          element={<Technologies />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
