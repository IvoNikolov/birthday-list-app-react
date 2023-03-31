import "./Avatar.css";

const Avatar = (props) => {
  return (
    <div className="avatar">
      <img
        className="border"
        src={`img/Avatars/${props.name}.jpg`}
        alt="name"
      />
    </div>
  );
};

export default Avatar;
