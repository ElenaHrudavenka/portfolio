import React, {useEffect, useState} from 'react';
import style from './Main.module.scss';
import Particle from '../common/components/Particle/Particle';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';

const Main = () => {
/*  const [isModalDisplayed, setModalDisplayed] = useState(false);
  const [ModalComponent, setModalComponent] = useState(null);

  useEffect(async ()=>{
    const loadResult = await import('../common/components/Particle/Particle')
    setModalComponent(() => {
      setModalDisplayed(true);
      return loadResult.default
    })
  },[])*/
  return (
    <div id='home' className={style.mainBlock}>
     {/* {isModalDisplayed && ModalComponent ? <Particle /> : null};*/}
      <Particle />
      <div className={style.mainContainer}>
        <Fade top>
          <div className={style.salutation}>
            <h2>I'am</h2>
            <h1>Alena Hrudavenka</h1>
            <span>
              <ReactTypingEffect text={'Front-end Developer'} speed={50} typingDelay={1100} eraseDelay={10000} />
            </span>
          </div>
          <div className={style.photo}>
            <div className={style.image}></div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Main;
