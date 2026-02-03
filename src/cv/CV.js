import path_pdf_pl from '../assets/image/HRUDAVENKA_ALENA_CV.pdf'

import style from './CV.module.scss'

const CV = () => {
    return (
        <div className={style.block}>
            <iframe
                title='My CV document'
                src={path_pdf_pl}
                className={style.cv} />
        </div>
    );
};

export default CV;
