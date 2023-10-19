
import "./index.css"
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';

import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (<>
    <div className="App">
    <Header scrollToTop={scrollToTop} className="fixed top-0" />      
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    <button onClick={scrollToTop}>Scroll to Top</button>
    </div>
    </>
  );
}

export default App;