import path_pdf_by from '../assets/image/AlenaHrudavenkaCVby.pdf'
import path_pdf_pl from '../assets/image/AlenaHrudavenkaCV.pdf'

import React from 'react';
import s from './CV.module.scss'

const CV = ({region}) => {
    const path_pdf = region ? path_pdf_by : path_pdf_pl;
    return (
        <div className={s.block}>
            <iframe src={path_pdf} className={s.cv}/>
        </div>
    );
};

export default CV;