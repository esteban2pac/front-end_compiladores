import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/main";
import NotFound from "./pages/NotFound";

const RoutesList = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route path="/main" element={<Main/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
};
export default RoutesList;