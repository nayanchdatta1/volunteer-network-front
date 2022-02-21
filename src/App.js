import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Footer/Footer';
import Login from './pages/Login';
import Events from './pages/Events/Events';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import VolunteerTable from './pages/Dashboard/VolunteerTable';
import AddEvent from './pages/Dashboard/AddEvent';
import AuthContext from './Context/AuthContext';
import PrivateRoute from './PrivateRoutes/PrivateRoute';

function App() {
  return (
    <AuthContext>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

          {/* Nested routes  */}
          <Route path='/dashboard' element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>} >
            <Route path='volunteer-list' element={<VolunteerTable />} />
            <Route path='add-event' element={<AddEvent />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </AuthContext>
  );
}

export default App;
