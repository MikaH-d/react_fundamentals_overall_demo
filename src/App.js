import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import StatesDemoHome from './StatesDemo/StatesDemoHome';
import EventsDemoHome from './EventsDemo/EventsDemoHome';
import Welcome from './components-general/Welcome';
import ComponentsDemoHome from './ComponentsDemo/CompDemoHome';
import UseEffectDemoHome from './useEffectDemo/UseEffectDemoHome';
import ConditionalRenderingDemoHome from './ConditionalRenderingDemo/ConditionalRenderingHome';

function App() {
  return (
  <div className='app'>
    <Router basename="/react_fundamentals_overall_demo">
        <nav className='nav-menu'>
          <Link to="/">Home</Link>
          <Link to="/components-demo">Components Demo</Link>
          <Link to="/events-demo">Events Demo</Link>
          <Link to="/states-demo">States Demo</Link>
          <Link to="/useEffect-demo">useEffect Demo</Link>
          <Link to="/conditionalRendering-demo">Conditional Rendering Demo</Link>


        </nav>
        <main className='main-content'>
        <Routes>
          <Route path="/" element={<Welcome /> } />
          <Route path="/components-demo/*" element={<ComponentsDemoHome />} />
          <Route path="/events-demo/*" element={<EventsDemoHome /> } />
          <Route path="/states-demo/*" element={<StatesDemoHome /> } />
          <Route path="/useEffect-demo/*" element={<UseEffectDemoHome /> } />
          <Route path="/conditionalRendering-demo" element={<ConditionalRenderingDemoHome />} />
        </Routes>
      </main>
    </Router>
  </div>
  );
}

export default App;
