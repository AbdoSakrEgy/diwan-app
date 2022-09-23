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
    // --------------
    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function myFunction2() {
        document.getElementById("myDatedown").classList.toggle("show");
    }
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.datedown') && !event.target.matches('.text')) {
            var dropdowns = document.getElementsByClassName("datedown-content");
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
                                    <th className={'first-th-entered'}>تحديث</th>
                                    <th className={'th-entered'}>سعر الكشف</th>
                                    <th className={'th-entered'}>كلمة برده</th>
                                    <th className={'th-entered'}>كلمة</th>
                                    <th className={'th-entered'}>نوع الكشف</th>
                                    <th className={'th-entered'}>التاريخ</th>
                                    <th className={'last-th-entered'}>الاسم</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={'first-td-entered td-entered'} id='hello'><i class="fa fa-refresh"></i></td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'last-td-entered'}>كلمة</td>
                                </tr>
                                <tr>
                                    <td className={'td-entered first-td-entered'}><i class="fa fa-refresh"></i></td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'last-td-entered'}>كلمة</td>
                                </tr>
                                <tr>
                                    <td className={'td-entered first-td-entered'}><i class="fa fa-refresh"></i></td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'last-td-entered'}>كلمة</td>
                                </tr>
                                <tr>
                                    <td className={'td-entered first-td-entered'}><i class="fa fa-refresh"></i></td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'last-td-entered'}>كلمة</td>
                                </tr>
                                <tr>
                                    <td className={'td-entered first-td-entered'}><i class="fa fa-refresh"></i></td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'last-td-entered'}>كلمة</td>
                                </tr>
                                <tr>
                                    <td className={'td-entered first-td-entered'}><i class="fa fa-refresh"></i></td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'last-td-entered'}>كلمة</td>
                                </tr>
                                <tr>
                                    <td className={'td-entered first-td-entered'}><i class="fa fa-refresh"></i></td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'td-entered'}>كلمة</td>
                                    <td className={'last-td-entered'}>كلمة</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default List;