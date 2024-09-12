import './Home.css';
import './About.css';
import { Outlet, Link} from "react-router-dom";

const Layout = () => {
    return (
        <>
          <nav>
              <li className='navHeight'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/goals">Goals</Link>
                <input className='inputBar'></input>
              </li>
          </nav>
        <Outlet />
        </>
    )
};

export default Layout;
