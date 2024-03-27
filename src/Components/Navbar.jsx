import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto font-work-sans">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink className={({isActive})=> isActive? "  text-green-500 font-bold" : ""}
        to="/"
        >Home</NavLink>
     
        <NavLink 
        to="/listed-books" 
        className={({isActive})=> isActive? "  text-green-500 font-bold" : ""}>Listed Books</NavLink>
        <NavLink to="/pages-to-read" className={({isActive})=> isActive? " font-bold text-green-500 " : ""}>Pages to Read</NavLink>

        <NavLink to="/about-us" className={({isActive})=> isActive? " font-bold text-green-500 " : ""}>About Us</NavLink>

        <NavLink to="/contact" className={({isActive})=> isActive? " font-bold text-green-500 " : ""}>Contact Us</NavLink>

        <NavLink className={"border border-green-300 bg-[#23BE0A] text-center text-white"}>Sign in</NavLink>
        <NavLink  className={"border mt-2 bg-[#59C6D2] text-white  text-center"}>Sign up</NavLink>
       
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl font-bold">Book Vibe</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul  className="menu flex gap-3 items-center menu-horizontal px-1">
        <NavLink className={({isActive})=> isActive? "border border-[#23BE0A] btn text-[#23BE0A] font-bold" : ""}
        to="/"
        >Home</NavLink>
     
        <NavLink 
        to="/listed-books" 
        className={({isActive})=> isActive? "border border-[#23BE0A] btn text-[#23BE0A] font-bold" : ""}>Listed Books</NavLink>
        <NavLink to="/pages-to-read" className={({isActive})=> isActive? "border border-[#23BE0A] btn text-[#23BE0A] " : ""}>Pages to Read</NavLink>

        <NavLink to="/about-us" className={({isActive})=> isActive? "border border-[#23BE0A] btn text-[#23BE0A] " : ""}>About Us</NavLink>

        
        <NavLink to="/contact" className={({isActive})=> isActive? "border border-[#23BE0A] btn text-[#23BE0A] " : ""}>Contact Us</NavLink>
       
    
    </ul>
  </div>
  <div className="navbar-end ">
   <Link><button className="btn hidden lg:block bg-[#23BE0A] text-white mr-4">Sign in</button></Link>
   <Link><button className="btn hidden lg:block bg-[#59C6D2] text-white">Sign up</button></Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;