import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../layout/Layout";
import CV from "../cv/CV";

export const PATH = {
    PORTFOLIO: '/portfolio',
    CV: '/cv',
}
const Routing = () => {
    return (
            <Routes>
                <Route path={'/'} element={<Layout/>}/>
                <Route path={PATH.PORTFOLIO} element={<Layout/>}/>
                <Route path={PATH.CV} element={<CV/>}/>
            </Routes>
    );
};

export default Routing;