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
    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function modalFunction() {
        document.getElementById("modaldropdown").classList.toggle("show");
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
                <div className="row row1">
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
                <div className="row row2">
                    {/* payModal */}
                    <div class="modal" id="payModal">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <p>modal header</p>
                                </div>
                                <div class="modal-body">
                                    <p>modal body</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* payModal */}
                    {/* changeModal */}
                    <div class="modal" id="changeModal">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <div data-bs-dismiss="modal"><i class="fa-solid fa-xmark"></i></div>
                                    <p>تعديل الحجز</p>
                                </div>
                                <div class="modal-body">
                                        <div className="modal-section-1">
                                            <div>
                                                <p>رقم التليفون</p>
                                                <p>01007137667</p>
                                            </div>
                                            <div>
                                                <p>الاسم</p>
                                                <p>عبدالرحيم صقر</p>
                                            </div>
                                        </div>
                                        <div className="modal-section-2">
                                            <div>
                                                <p>سعر الكشف</p>
                                                <p className="price">200</p>
                                            </div>
                                            <div>
                                                <p>نوع الكشف</p>
                                                {/* dropdown */}
                                                <div className="dropdown modaldropdown" onClick={modalFunction}>
                                                    <i class="fa fa-caret-down icondrop" aria-hidden="true" onClick={modalFunction}></i>
                                                    <div className="text">نوع الكشف</div>
                                                </div>
                                                <div className="dropdown-content modaldropdown-content" id="modaldropdown" onClick={modalFunction}>
                                                        <a href="#">كشف جديد</a>
                                                        <a href="#">إعادة كشف</a>
                                                        <a href="#">متابع</a>
                                                </div>
                                                {/* dropdown */}
                                            </div>
                                        </div>
                                        <div className="modal-section-3">
                                            <div>
                                                <p>رقم الحجز</p>
                                                <p><strong>8</strong></p>
                                            </div>
                                            <div>
                                                <p>تاريخ الحجز</p>
                                                <input type="date" />
                                            </div>
                                        </div>
                                        <div className="modal-section-4">
                                            <div className="btn">دفع</div>
                                            <div className="btn" data-bs-toggle="modal" data-bs-target="#deleteModal">حذف</div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* changeModal */}
                    {/* deleteModal */}
                    <div class="modal" id="deleteModal">
                        <div class="modal-dialog modal-dialog-centered modal-xsm">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <p>حذف الحجز</p>
                                </div>
                                <div className="modal-body">
                                    <div><p>هل تريد حذف الحجز</p></div>
                                    <div>
                                        <div><p>الغاء</p></div>
                                        <div><p>حذف</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* deleteModal */}
                    {/* cards */}
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
                            <div className="btn" data-bs-toggle="modal" data-bs-target="#payModal">دفع</div>
                            <div className="btn" data-bs-toggle="modal" data-bs-target="#changeModal">تعديل</div>
                        </div>
                    </div>
                    {/* cards */}
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Groub;