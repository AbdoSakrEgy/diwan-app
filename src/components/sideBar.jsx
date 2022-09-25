import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../css files/sideBarCSS.css'


const SideBar = () => {
    return ( 
        <React.Fragment>
            <div className="main-container">
                <Outlet/>
                <div className="sidebar">
                    <div className="logo"><Link to="/"><img/></Link></div>
                    <div className="icon"><Link to="/calender"><i class="sidebar-icons fas fa-calendar-alt" aria-hidden="true"></i></Link></div>
                    <div className="icon"><Link to="/groub"><i class="sidebar-icons fas fa-users" aria-hidden="true"></i></Link></div>
                    <div className="icon"><Link to="/list"><i class="sidebar-icons fa fa-list-alt" aria-hidden="true"></i></Link></div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default SideBar;