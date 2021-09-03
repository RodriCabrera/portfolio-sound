import React from "react";
import './NavBtn.css'

const NavBtn = ({ value }) => {
    return(
        <button className="navBtn">{value.toUpperCase()}</button>
    )
}

export default NavBtn;