import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import About from './pages/About';
import Activity from './pages/Activity';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import {Switch, Route, useLocation} from 'react-router-dom';


function App() {

  const location = useLocation();

  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path='/' exact>
          <About />
        </Route>
        <Route path='/activity'>
          <Activity/>
        </Route>
        <Route path='/gallery'>
          <Gallery/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
