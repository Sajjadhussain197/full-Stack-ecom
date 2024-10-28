import { useState } from "react";
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

const user = {
    _id: "123",
    role: "user"
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoutHandler = () => {
    setIsOpen(false);
  localStorage.removeItem("auth");
  window.location.href = "/";
}
  return(
    
  <nav className="header">
  <Link  onClick={() => setIsOpen(false)}  to="/">Home</Link>
  <Link  onClick={() => setIsOpen(false)}  to="/cart"><FaShoppingBag /></Link>
  <Link onClick={() => setIsOpen(false)}  to="/search">
  <FaSearch/>
  </Link>
  {
      user._id?(<><button onClick={() => setIsOpen((prev) => !prev)} className="button">
          
      <FaUser />
      </button>
      <dialog open={isOpen} className="dialog">
          <div>
              {
                  user.role === "admin" && (
                      <Link to="/admin/dashboard">Admin Dashboard</Link>
                  )
              }
          <Link to="/orders">Orders</Link>
          <button onClick={logoutHandler}>
              <FaSignOutAlt/>
          </button>
          </div>
      </dialog>
      
      </>):

      <Link to="/search">
  <FaSignInAlt/>
  </Link>


  }

</nav>
  )
}

export default Header
