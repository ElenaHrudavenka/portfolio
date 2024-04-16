import path_pdf_by from '../assets/image/Alena_Hrudavenka_CV_ru.pdf'
import path_pdf_pl from '../assets/image/Alena_Hrudavenka_CV.pdf'

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
