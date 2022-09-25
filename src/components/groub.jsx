import React from "react";
import '../css files/groubCSS.css'

const Groub = () => {
    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropdown') && !event.target.matches('.text')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                }
            }
        }
    }

    return ( 
        <React.Fragment>
            <div className="groub-container">
                <div className="row row1" id="row1">
                    <div className="col-4">
                        {/* datepicker */}
                        <span class="datepicker-toggle">
                            <input type="date" class="datepicker-input"/>
                        </span>
                        {/* datepicker */}
                    </div>
                    <div className="col-4">
                        {/* dropdown */}
                        <div className="dropdown" onClick={myFunction}>
                            <i class="fa fa-caret-down icondrop" aria-hidden="true" onClick={myFunction}></i>
                            <div className="text">نوع الكشف</div>
                        </div>
                        <div className="dropdown-content" id="myDropdown" onClick={myFunction}>
                                <a href="#">كشف جديد</a>
                                <a href="#">إعادة كشف</a>
                                <a href="#">متابع</a>
                        </div>
                        {/* dropdown */}
                    </div>
                    <div className="col-4">
                        {/* search */}
                        <div className="search">
                            <input type="text" placeholder="إبحث عن اسم المريض أو كود المريض"/>
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </div>
                        {/* search */}
                    </div>
                </div>
                <div className="row row2" id="row2">
                    <div className="card">
                        <div className="card-section-1">
                            <p><strong>رقم التليفون</strong><br />01007137667</p>
                            <p><strong>الاسم</strong><br />عبدالرحيم صقر</p>
                        </div>
                        <div className="card-section-2">
                            <p><strong>سعر الكشف</strong><br />200</p>
                            <p><strong>نوع الكشف</strong><br />كشف جديد</p>
                        </div>
                        <div className="card-section-3">
                            <p><strong>رقم المريض</strong><br />8</p>
                            <p><strong>تاريخ الحجز</strong><br />السبت<br/>16-8-2022</p>
                        </div>
                        <div className="card-section-4">
                            <div className="btn">دفع</div>
                            <div className="btn">تعديل</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-section-1">
                            <p><strong>رقم التليفون</strong><br />01007137667</p>
                            <p><strong>الاسم</strong><br />عبدالرحيم صقر</p>
                        </div>
                        <div className="card-section-2">
                            <p><strong>سعر الكشف</strong><br />200</p>
                            <p><strong>نوع الكشف</strong><br />كشف جديد</p>
                        </div>
                        <div className="card-section-3">
                            <p><strong>رقم المريض</strong><br />8</p>
                            <p><strong>تاريخ الحجز</strong><br />السبت<br/>16-8-2022</p>
                        </div>
                        <div className="card-section-4">
                            <div className="btn">دفع</div>
                            <div className="btn">تعديل</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-section-1">
                            <p><strong>رقم التليفون</strong><br />01007137667</p>
                            <p><strong>الاسم</strong><br />عبدالرحيم صقر</p>
                        </div>
                        <div className="card-section-2">
                            <p><strong>سعر الكشف</strong><br />200</p>
                            <p><strong>نوع الكشف</strong><br />كشف جديد</p>
                        </div>
                        <div className="card-section-3">
                            <p><strong>رقم المريض</strong><br />8</p>
                            <p><strong>تاريخ الحجز</strong><br />السبت<br/>16-8-2022</p>
                        </div>
                        <div className="card-section-4">
                            <div className="btn">دفع</div>
                            <div className="btn">تعديل</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-section-1">
                            <p><strong>رقم التليفون</strong><br />01007137667</p>
                            <p><strong>الاسم</strong><br />عبدالرحيم صقر</p>
                        </div>
                        <div className="card-section-2">
                            <p><strong>سعر الكشف</strong><br />200</p>
                            <p><strong>نوع الكشف</strong><br />كشف جديد</p>
                        </div>
                        <div className="card-section-3">
                            <p><strong>رقم المريض</strong><br />8</p>
                            <p><strong>تاريخ الحجز</strong><br />السبت<br/>16-8-2022</p>
                        </div>
                        <div className="card-section-4">
                            <div className="btn">دفع</div>
                            <div className="btn">تعديل</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-section-1">
                            <p><strong>رقم التليفون</strong><br />01007137667</p>
                            <p><strong>الاسم</strong><br />عبدالرحيم صقر</p>
                        </div>
                        <div className="card-section-2">
                            <p><strong>سعر الكشف</strong><br />200</p>
                            <p><strong>نوع الكشف</strong><br />كشف جديد</p>
                        </div>
                        <div className="card-section-3">
                            <p><strong>رقم المريض</strong><br />8</p>
                            <p><strong>تاريخ الحجز</strong><br />السبت<br/>16-8-2022</p>
                        </div>
                        <div className="card-section-4">
                            <div className="btn">دفع</div>
                            <div className="btn">تعديل</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-section-1">
                            <p><strong>رقم التليفون</strong><br />01007137667</p>
                            <p><strong>الاسم</strong><br />عبدالرحيم صقر</p>
                        </div>
                        <div className="card-section-2">
                            <p><strong>سعر الكشف</strong><br />200</p>
                            <p><strong>نوع الكشف</strong><br />كشف جديد</p>
                        </div>
                        <div className="card-section-3">
                            <p><strong>رقم المريض</strong><br />8</p>
                            <p><strong>تاريخ الحجز</strong><br />السبت<br/>16-8-2022</p>
                        </div>
                        <div className="card-section-4">
                            <div className="btn">دفع</div>
                            <div className="btn">تعديل</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-section-1">
                            <p><strong>رقم التليفون</strong><br />01007137667</p>
                            <p><strong>الاسم</strong><br />عبدالرحيم صقر</p>
                        </div>
                        <div className="card-section-2">
                            <p><strong>سعر الكشف</strong><br />200</p>
                            <p><strong>نوع الكشف</strong><br />كشف جديد</p>
                        </div>
                        <div className="card-section-3">
                            <p><strong>رقم المريض</strong><br />8</p>
                            <p><strong>تاريخ الحجز</strong><br />السبت<br/>16-8-2022</p>
                        </div>
                        <div className="card-section-4">
                            <div className="btn">دفع</div>
                            <div className="btn">تعديل</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-section-1">
                            <p><strong>رقم التليفون</strong><br />01007137667</p>
                            <p><strong>الاسم</strong><br />عبدالرحيم صقر</p>
                        </div>
                        <div className="card-section-2">
                            <p><strong>سعر الكشف</strong><br />200</p>
                            <p><strong>نوع الكشف</strong><br />كشف جديد</p>
                        </div>
                        <div className="card-section-3">
                            <p><strong>رقم المريض</strong><br />8</p>
                            <p><strong>تاريخ الحجز</strong><br />السبت<br/>16-8-2022</p>
                        </div>
                        <div className="card-section-4">
                            <div className="btn">دفع</div>
                            <div className="btn">تعديل</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-section-1">
                            <p><strong>رقم التليفون</strong><br />01007137667</p>
                            <p><strong>الاسم</strong><br />عبدالرحيم صقر</p>
                        </div>
                        <div className="card-section-2">
                            <p><strong>سعر الكشف</strong><br />200</p>
                            <p><strong>نوع الكشف</strong><br />كشف جديد</p>
                        </div>
                        <div className="card-section-3">
                            <p><strong>رقم المريض</strong><br />8</p>
                            <p><strong>تاريخ الحجز</strong><br />السبت<br/>16-8-2022</p>
                        </div>
                        <div className="card-section-4">
                            <div className="btn">دفع</div>
                            <div className="btn">تعديل</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Groub;