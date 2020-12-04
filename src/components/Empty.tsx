import style from "../style/empty.module.css";

const Empty = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.inscription}>
        <span className={style.x}>×</span>
        <span>No ticket selected</span>
      </div>
    </div>
  );
};

export default Empty;
