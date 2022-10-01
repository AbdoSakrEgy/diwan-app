import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Groub from "./groub";
import List from "./list";
import ReservationRequest from "./ReservationRequest";
import ReservationShow from "./ReservationShow";
import SideBar from "./sideBar";

const ScreenRouter = () => {
    return ( 
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SideBar/>}>
                        <Route index element={<ReservationRequest/>}/>
                        <Route path="/ReservationShow" element={<ReservationShow/>}/>
                        <Route path="/list" element={<List/>}/>
                        <Route path="/groub" element={<Groub/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
     );
}
 
export default ScreenRouter;