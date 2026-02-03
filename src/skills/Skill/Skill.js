import style from './Skill.module.scss';

const Skill = (props) => {
  let url = `url(${props.icon})`;

  const projectStyle = {
    backgroundImage: url,
    width: '40px',
    height: '40px',
  };
  
  return (
    <div className={style.skill}>
      <div className={style.icon}>
        <div style={projectStyle}></div>
      </div>
      <h3>{props.title}</h3>
      <span className={style.description}>{props.description}</span>
    </div>
  );
};

export default Skill;
