import Home from './Home';
import Sofa from './Sofas';
import Chair from './Chairs';
import Bed from './Beds';
import Dining from './Diningsets';
import Tables from './Tables';
import Wardrobes from './Wardrobes';
import Signup from './Signup';
import Login from './Login';

//logo
import logo from "./images/logo2.png";

import Crud from "./CrudPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom';

function App(){
    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow fixed-top">
                    <div className="container-fluid"> 
                        <img src={logo} height={'60px'} width={"70px"}></img>
                        <button className="navbar-toggler" type="button" data-bs-togglers="collaps" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Togglenavigation"><span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-ite">
                                    <Link to="/" className="nav-link fw-bold text-black" aria-current="page"><i class="bi bi-house-door-fill"></i> Home</Link>
                                </li>

                                <li className="nav-ite">
                                    <Link to="/signup" className="nav-link fw-bold text-black"><i class="bi bi-person-circle"></i> Sign Up</Link>
                                </li>

                                <li className="nav-ite">
                                    <Link to="/login" className="nav-link fw-bold text-black"><i class="bi bi-person-fill"></i> Login</Link>
                                </li>

                                {/* <li className="nav-item">
                                    <Link to="/crud" className="nav-link">Images</Link>
                                </li> */}

                                <li className="nav-ite">
                                    <Link to="/crud" className="nav-link fw-bold text-black"><i class="bi bi-bookmark-plus-fill"></i> ManageFurniture</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/crud" element={<Crud />} />
                    <Route path="/sofa" element={<Sofa />} />
                    <Route path="/chair" element={<Chair />} />
                    <Route path="/bed" element={<Bed/>} />
                    <Route path="/tables" element={<Tables />} />
                    <Route path="/dining" element={<Dining/>} />
                    <Route path="/wardrobes" element={<Wardrobes/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/login" element={<Login/>} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;