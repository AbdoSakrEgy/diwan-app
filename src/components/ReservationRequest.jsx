import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../components/ReservationShow'
import '../css files/ReservationRequestCSS.css' 

const ReservationRequest =()=>{
    function newPatient(){
        document.getElementsByClassName('new-patient')[0].style.color='white'
        document.getElementsByClassName('new-patient')[0].style.backgroundColor='#4F6466'
        document.getElementsByClassName('registered-patient')[0].style.color='#4F6466'
        document.getElementsByClassName('registered-patient')[0].style.backgroundColor='white'
    }
    function registeredPatient(){
        document.getElementsByClassName('registered-patient')[0].style.color='white'
        document.getElementsByClassName('registered-patient')[0].style.backgroundColor='#4F6466'
        document.getElementsByClassName('new-patient')[0].style.color='#4F6466'
        document.getElementsByClassName('new-patient')[0].style.backgroundColor='white'
    }
    return (
        <React.Fragment>
            <div id="request-content">
                <div className="header">
                    <p>الحجز</p>
                    <i className="fas fa-calendar-alt" aria-hidden="true"></i>
                </div>
                <div className="body">
                    <div className="row row1">
                        <div className="col-6">
                            <div className="new-patient" onClick={newPatient}>
                                <i className='fas fa-user-plus'></i>
                                <p>مريض جديد</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="registered-patient" onClick={registeredPatient}>
                                <i className='fas fa-user-check'></i>
                                <p>مريض مسجل</p>
                            </div>
                        </div>
                    </div>
                    <div className="row row2">
                        <div className="col-4">
                            <div className="info">
                                <p className="float-label">السن</p>
                                <input type="search" defaultValue=""/>
                            </div>
                            <div className="info">
                                <p className="float-label">سعر الكشف</p>
                                <input type="search" defaultValue=""/>
                            </div>
                            <div className="info">
                                <p className="float-label">محول من</p>
                                <input type="search" defaultValue=""/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="info">
                                    <p className="float-label">رقم التليفون</p>
                                    <input type="search" defaultValue=""/>
                                </div>
                                <div className="info">
                                    <p className="float-label">نوع الكشف</p>
                                    <input type="search" defaultValue=""/>
                                </div>
                                <div className="info">
                                    <p className="float-label">رقم الكشف</p>
                                    <input type="search" defaultValue=""/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="info">
                                    <p className="float-label">الاسم</p>
                                    <input type="search" defaultValue=""/>
                                </div>
                                <div className="info">
                                    <p className="float-label">كود المريض</p>
                                    <input type="search" defaultValue=""/>
                                </div>
                                <div className="info">
                                    <p className="float-label">تاريخ الكشف</p>
                                    <input type="search" defaultValue=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row row3">
                        <div className="col-12">
                            <Link to="/ReservationShow">
                                <div className="show-btn">عرض الحجز</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ReservationRequest;