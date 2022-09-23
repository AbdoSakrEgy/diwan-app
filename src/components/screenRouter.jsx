import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./list";
import SideBar from "./sideBar";

const ScreenRouter = () => {
    return ( 
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SideBar/>}>
                        <Route path="/list" element={<List/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
     );
}
 
export default ScreenRouter;