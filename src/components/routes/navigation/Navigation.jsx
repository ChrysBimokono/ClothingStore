import { useContext } from "react";
import { Outlet, Link} from "react-router-dom"

import CartIcon from "../../cart-icon/CartIcon";
import CartDropdown from "../../cart-dropdown/CartDropdown";
import { ReactComponent as ProperLogo } from '../../../assets/crown.svg';
import { UserContext } from "../../../contexts/UserContext";
import { CartContext } from "../../../contexts/CartContext";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import './navigation.scss';

const Navigation = ()=>{
    const { currentUser } = useContext(UserContext);
    const { isCartOpen }= useContext(CartContext);
  // console.log(currentUser)

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
              {currentUser ? (
                <span className="nav-link" onClick={signOutUser}> SIGN OUT</span>
                ):  (<Link className="nav-link" to='/auth'>
                SIGN IN
               </Link>
               )}
               <CartIcon/>
            </div>
            { isCartOpen && <CartDropdown/> }
        </div>
        <Outlet/>
       </>
    )
  };

  export default Navigation;