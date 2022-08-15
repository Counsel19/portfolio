import {
  About,
  Banner,
  Navbar,
  Services,
  Skills,
  Works,
  Contact,
  Footer,
} from "./components";

import { BrowserRouter } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Banner />
        <Works />
        <Skills />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
