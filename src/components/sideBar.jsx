import React from "react";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import '../css files/sideBarCSS.css'


const SideBar = () => {
    function logo(){
        document.getElementById("icon1").style.backgroundColor="#E7EAEA"
        document.getElementById("icon2").style.backgroundColor="#E7EAEA"
        document.getElementById("icon3").style.backgroundColor="#E7EAEA"
        document.getElementsByClassName('title')[0].style.display="block"
        document.getElementsByClassName('title')[1].style.display="block"
        document.getElementsByClassName('title')[2].style.display="block"
        document.getElementsByClassName('sidebar')[0].style.width="20vw"
        document.getElementsByClassName('sidebar')[0].style.border=".5px solid #4F6466"
    }
    function icon1(){
        document.getElementById("icon1").style.backgroundColor="#B8BFBF"
        document.getElementById("icon2").style.backgroundColor="#E7EAEA"
        document.getElementById("icon3").style.backgroundColor="#E7EAEA"
        document.getElementsByClassName('title')[0].style.display="none"
        document.getElementsByClassName('title')[1].style.display="none"
        document.getElementsByClassName('title')[2].style.display="none"
        document.getElementsByClassName('sidebar')[0].style.width="7vw"
        document.getElementsByClassName('sidebar')[0].style.border=".5px #E7EAEA"
    }
    function icon2(){
        document.getElementById("icon1").style.backgroundColor="#E7EAEA"
        document.getElementById("icon2").style.backgroundColor="#B8BFBF"
        document.getElementById("icon3").style.backgroundColor="#E7EAEA"
        document.getElementsByClassName('title')[0].style.display="none"
        document.getElementsByClassName('title')[1].style.display="none"
        document.getElementsByClassName('title')[2].style.display="none"
        document.getElementsByClassName('sidebar')[0].style.width="7vw"
        document.getElementsByClassName('sidebar')[0].style.border=".5px #E7EAEA"
    }
    function icon3(){
        document.getElementById("icon1").style.backgroundColor="#E7EAEA"
        document.getElementById("icon2").style.backgroundColor="#E7EAEA"
        document.getElementById("icon3").style.backgroundColor="#B8BFBF"
        document.getElementsByClassName('title')[0].style.display="none"
        document.getElementsByClassName('title')[1].style.display="none"
        document.getElementsByClassName('title')[2].style.display="none"
        document.getElementsByClassName('sidebar')[0].style.width="7vw"
        document.getElementsByClassName('sidebar')[0].style.border=".5px #E7EAEA"
    }
    return ( 
        <React.Fragment>
            <div className="main-container">
                <Outlet/>
                <div className="sidebar" id="sidebar">
                    <div className="logo" id="logo" onClick={logo}><img/></div>
                    <Link to="/">
                        <div className="icon" id="icon1" onClick={icon1}>
                            <p className="title">طلب حجز</p>
                            <i class="sidebar-icons fas fa-calendar-alt" aria-hidden="true"></i>
                        </div>
                    </Link>
                    <Link to="/groub">
                        <div className="icon" id="icon2" onClick={icon2}>
                            <p className="title">سجل الحجوزات</p>
                            <i class="sidebar-icons fas fa-users" aria-hidden="true"></i>
                        </div>
                    </Link>
                    <Link to="/list">
                        <div className="icon" id="icon3" onClick={icon3}>
                            <p className="title">الحسابات</p>
                            <i class="sidebar-icons fa fa-list-alt" aria-hidden="true"></i>
                        </div>
                    </Link>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default SideBar;