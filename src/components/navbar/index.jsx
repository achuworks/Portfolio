import React from "react";
import {FaBars} from "react-icons/fa";
import {HiX} from 'react-icons/hi';
import { Link } from "react-router-dom";
import GirlIcon from './download.jpeg';
import {useState} from "react";
import './styles.scss';

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "PROJECTS",
    to: "/project",
  },
  
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const Navbar = () => {
  const [toggleIcon, settoggleIcon] = useState(false);
  const handleToggleIcon = () => {
    settoggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
          <img src={GirlIcon} alt="Cartoon Girl" className="round"/>
          </Link>
        </div>
        <ul className="navbar__container__menu">
          {data.map((item, key) => (
            <li key={key} className="navbar_container_menu_item">
              <Link className="navbar_container_menu_item_links" to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
            {
                toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
            }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
