
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

  return (<><Header scrollToTop={scrollToTop} />
    <div className="App">
      
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
    <button onClick={scrollToTop}>Scroll to Top</button></>
  );
}

export default App;