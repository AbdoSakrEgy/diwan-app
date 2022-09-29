import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Groub from "./groub";
import List from "./list";
import Request from "./request";
import SideBar from "./sideBar";

const ScreenRouter = () => {
    return ( 
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SideBar/>}>
                        <Route path="/list" element={<List/>}/>
                        <Route path="/groub" element={<Groub/>}/>
                        <Route path="/groub" element={<Request/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
     );
}
 
export default ScreenRouter;