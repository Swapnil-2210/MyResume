import logo from './logo.svg';
import './App.css';
import NavigationPanel from './Component/Navigation/NavigationPanel';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Component/Navigation/HomePage';
import AboutPage from './Component/Navigation/AboutPage';
import ExperiecncePage from './Component/Navigation/ExperiecncePage';
import ContactPage from './Component/Navigation/ContactPage';
import ProjectPage from './Component/Navigation/ProjectPage';

function App() {
  return (
    <div className="App">
        <NavigationPanel/>
          <Routes >
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/Home' element={<HomePage/>}></Route>
            <Route path='/AboutMe' element={<AboutPage/>}></Route>
            <Route path='/Experience' element={<ExperiecncePage/>}></Route>
            <Route path='/Project' element={<ProjectPage/>}></Route>
            <Route path='/Contact' element={<ContactPage/>}></Route>
          </Routes>
    
    </div>
  );
}

export default App;
