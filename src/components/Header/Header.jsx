import "./Header.css"
import { CgProfile } from "react-icons/cg";
import { FiBox } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { CiGift } from "react-icons/ci";
import { IoCardSharp } from "react-icons/io5";
import { TiPlus } from "react-icons/ti";
import { IoCartOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";



const Header=()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand text-primary fs-2 fw-bold d-grid" href="#">Flipkart<span className="fs-6 text-danger">Explore <span className="text-warning">Plus</span></span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse gap-4" id="navbarSupportedContent"> 
          <input className="form-control ms-5 w-50" type="search" placeholder="Search" aria-label="Search"/>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-5">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <CgProfile/> Login
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">New customer</a></li>
                <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item fs-5" href="#"><CgProfile className="fs-5 m-1"/>My Profile </a></li>
                  <li><a className="dropdown-item fs-5" href="#"><TiPlus className="m-1"/>Flipkart Plus Zone</a></li>
                  <li><a className="dropdown-item fs-5" href="#"><FiBox className="m-1" />Orders</a></li>
                  <li><a className="dropdown-item fs-5" href="#"><FaRegHeart className="m-1" />Whislist</a></li>
                  <li><a className="dropdown-item fs-5" href="#"><CiGift className="m-1" />Rewards</a></li>
                  <li><a className="dropdown-item fs-5" href="#"><IoCardSharp className="m-1" />Gift Cards</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><IoCartOutline className="fs-2 me-2" />Cart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#"><CiShop className="fs-2 me-2" />Become a seller</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Header;
