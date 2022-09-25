import React from "react";

const List = () => {
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
            <div className="list-container">
                <div className="row" id="row1">
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
                <div className="row table-row" id="row2">
                    <div className="col-12">
                        <table>
                            <thead>
                                <tr>
                                    <th className={'left-cells'}>تحديث</th>
                                    <th className={'th-entered'}>سعر الكشف</th>
                                    <th className={'th-entered'}>كلمة برده</th>
                                    <th className={'th-entered'}>كلمة</th>
                                    <th className={'th-entered'}>نوع الكشف</th>
                                    <th className={'th-entered'}>التاريخ</th>
                                    <th className={'right-cells'}>الاسم</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={'td-entered left-cells'} data-bs-toggle="modal" data-bs-target="#myModal"><i class="fa fa-refresh"></i></td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'right-cells'}>كلمة</td>
                                </tr>
                                <tr>
                                    <td className={'td-entered left-cells'} data-bs-toggle="modal" data-bs-target="#myModal"><i class="fa fa-refresh"></i></td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'right-cells'}>كلمة</td>
                                </tr>
                                <tr>
                                    <td className={'td-entered left-cells'} data-bs-toggle="modal" data-bs-target="#myModal"><i class="fa fa-refresh"></i></td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'right-cells'}>كلمة</td>
                                </tr>
                                <tr>
                                    <td className={'td-entered left-cells'} data-bs-toggle="modal" data-bs-target="#myModal"><i class="fa fa-refresh"></i></td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'right-cells'}>كلمة</td>
                                </tr>
                                <tr>
                                    <td className={'td-entered left-cells'} data-bs-toggle="modal" data-bs-target="#myModal"><i class="fa fa-refresh"></i></td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'right-cells'}>كلمة</td>
                                </tr>
                                <tr>
                                    <td className={'td-entered left-cells'} data-bs-toggle="modal" data-bs-target="#myModal"><i class="fa fa-refresh"></i></td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'right-cells'}>كلمة</td>
                                </tr>
                                <tr>
                                    <td className={'td-entered left-cells'} data-bs-toggle="modal" data-bs-target="#myModal"><i class="fa fa-refresh"></i></td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'right-cells'}>كلمة</td>
                                </tr>
                            </tbody>
                        </table>
                        {/* the modal of update */}
                        <div class="modal" id="myModal">
                            <div class="modal-dialog modal-dialog-centered modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <p>تاريخ الكشف<br/><strong>16-6-2022</strong></p>
                                        <p>رقم التليفون<br/><strong>01007137667</strong></p>
                                        <p>تاريخ الكشف<br/><strong>السعر</strong></p>
                                    </div>
                                    <div class="modal-body">
                                        <div className="modal-body-section1">
                                            <p>نوع الكشف</p>
                                            <p><strong>كشف جديد</strong></p>
                                        </div>
                                        <div className="modal-body-section2">
                                            <p><br/><div className="btn btn-success">تسوية</div></p>
                                            <p>أجل<br/><div className="money">50</div></p>
                                            <p>دفع<br/><div className="money">150</div></p>
                                            <p>سعر الكشف<br/><strong>200</strong></p>
                                        </div>
                                        <div className="modal-body-section3">
                                            <div className="btn">إلغاء</div>
                                            <div className="btn">تحديث</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* the modal of update */}
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default List;