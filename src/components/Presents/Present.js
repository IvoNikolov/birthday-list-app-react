import Card from "../UI/Card";
import Avatar from "../UI/Avatar";
import "./Present.css";

const Present = (props) => {
  return (
    <Card className="present">
      <Avatar name={props.name} />
      <div className="present__description">
        <h2>{props.name}</h2>
      </div>
      <img
        src="../img/dollar.png"
        alt="dollar sign"
        className="present__currency"
      />
    </Card>
  );
};

export default Present;
