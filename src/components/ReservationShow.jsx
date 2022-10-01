import React from "react";

const ReservationShow =()=>{
    function ReservationPrint(){
        document.getElementById("ReservationShow-content").innerHTML=
        `
            <div id="ReservationPrint-content">
                <div class="header">
                    <p>الحجز</p>
                    <i class="fas fa-calendar-alt" aria-hidden="true"></i>
                </div>
                <div class="body">
                    <i class='fas fa-check-circle'></i>
                    <p>تم الحجز بنجاح</p>
                </div>
            </div>
        `
    }
    return(
        <React.Fragment>
            <div id="ReservationShow-content">
                <div className="header">
                    <p>الحجز</p>
                    <i className="fas fa-calendar-alt" aria-hidden="true"></i>
                </div>
                <div className="body">
                    <div className="row1">
                        <div className="column1">
                            <div className="info">
                                <p className="title">رقم التليفون</p>
                                <p className="data">01007137667</p>
                            </div>
                            <div className="info">
                                <p className="title">سعر الكشف</p>
                                <p className="data">200 ج</p>
                            </div>
                        </div>
                        <div className="column2">
                            <div className="info">
                                <p className="title">العمر</p>
                                <p className="data">28</p>
                            </div>
                            <div className="info">
                                <p className="title">تاريخ الحجز</p>
                                <p className="data">16-8-2022</p>
                            </div>
                            <div className="info">
                                <p className="title">محول من</p>
                                <p className="data">دكتور محمد</p>
                            </div>
                        </div>
                        <div className="column3">
                            <div className="info">
                                <p className="title">الاسم</p>
                                <p className="data">اسم المريض</p>
                            </div>
                            <div className="info">
                                <p className="title">نوع الكشف</p>
                                <p className="data">كشف جديد</p>
                            </div>
                            <div className="info">
                                <p className="title">رقم المريض</p>
                                <p className="data">8</p>
                            </div>
                        </div>
                    </div>
                        <div className="row2">
                            <div className="btn1" onClick={ReservationPrint}>تأكيد وطباعة</div>
                            <div className="btn2">
                            <p>تعديل</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ReservationShow;