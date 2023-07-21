import path_pdf from '../assets/image/AlenaHrudavenkaCV.pdf'
import React from 'react';
import s from './CV.module.scss'

const CV = () => {
    return (
        <div className={s.block}>
            <object data={path_pdf} type='application/pdf' className={s.cv}/>
        </div>
    );
};

export default CV;