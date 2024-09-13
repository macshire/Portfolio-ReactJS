import './Home.css';
import './Projects.css';
import { Outlet, Link} from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Layout = () => {
    return (
        <>
          <nav>
              <li className='navHeight'>
                <div className='flex-container'>
                  <div id='avatarLeft'/>
                  <Link to="/">Home</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/goals">Goals</Link>
                  {/* <div id='linkedinLogo'></div> */}
                  <LinkedInIcon
                    // color='success'
                    style={{
                      color: 'white'
                    }}
                  />
                </div>
              </li>
          </nav>
        <Outlet />
        </>
    )
};

export default Layout;
