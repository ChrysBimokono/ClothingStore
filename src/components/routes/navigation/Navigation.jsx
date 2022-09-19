
import { Outlet, Link} from "react-router-dom"

import { ReactComponent as ProperLogo } from '../../../assets/crown.svg';

import './navigation.scss';

const Navigation = ()=>{
    return (
       <>
        <div className="navigation">
            <Link className="logo-container" to='/'>
               <ProperLogo />
            </Link>
           
            <div className="nav-links-container">
              <Link className="nav-link" to='/shop'>
                     SHOP
              </Link>
            </div>
        </div>
        <Outlet/>
       </>
    )
  };

  export default Navigation;