import React from "react";
import NavBtn from "../NavBtn/NavBtn";
import './NavBtnList.css'

const NavBtnList = ({title}) => {
    return(
        <div className="navBtnList">
            <p className="navBtnListTitle">{title}</p>
            <NavBtn value={"Boton 1"}/>
            <NavBtn value={"Boton 2"}/>
            <NavBtn value={"Boton 3"}/>
        </div>
    )
}

export default NavBtnList;