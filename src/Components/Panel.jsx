/* eslint-disable react/prop-types */
const Panel = ({ title, onActive, isActive }) => {
  return (
    <div
      style={{
        textAlign: "left",
        padding: "10px",
        border: "1px solid yellow",
        marginBottom: "15px",
      }}
    >
      <h2>{title}</h2>
      {isActive ? (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
          placeat libero cumque, quod amet recusandae soluta obcaecati. Ad, eos
          cupiditate?
        </p>
      ) : (
        <button onClick={onActive}>Show</button>
      )}
    </div>
  );
};

export default Panel;
