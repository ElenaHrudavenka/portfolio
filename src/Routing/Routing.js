import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../layout/Layout";
import CV from "../cv/CV";

export const PATH = {
    PORTFOLIO: '/portfolio',
    CV_BY: '/cv/by',
    CV_PL: '/cv/pl'
}
const Routing = () => {
    return (
            <Routes>
                <Route path={'/'} element={<Layout/>}/>
                <Route path={PATH.PORTFOLIO} element={<Layout/>}/>
                <Route path={PATH.CV_BY} element={<CV region={'BY'}/>}/>
                <Route path={PATH.CV_PL} element={<CV/>}/>
            </Routes>
    );
};

export default Routing;