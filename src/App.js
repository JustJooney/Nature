import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ActivityDetail from './pages/ActivityDetail';
import ActivitySection from './components/ActivitySection';
import {AnimatePresence} from 'framer-motion';
import {Switch, Route, useLocation} from 'react-router-dom';


function App() {

  const location = useLocation();

  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <About />
          </Route>
          <Route path='/activity' exact>
            <ActivitySection/>
          </Route>
          <Route path='/activity/:id'>
              <ActivityDetail/>
          </Route>
          <Route path='/gallery'>
            <Gallery/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
