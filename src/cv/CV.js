import path_pdf_pl from '../assets/image/Alena_Hrudavenka_CV.pdf'

import React from 'react';
import s from './CV.module.scss'

const CV = () => {
    return (
        <div className={s.block}>
            <iframe src={path_pdf_pl} className={s.cv}/>
        </div>
    );
};

export default CV;
