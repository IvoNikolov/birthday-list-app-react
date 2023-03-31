import Card from "../UI/Card";
import Chip from "../UI/Chip";
import Avatar from "../UI/Avatar";
import "./Friend.css";

const Friend = (props) => {
  return (
    <Card className="friend">
      <Avatar name={props.name} />
      <div className="friend__description">
        <h2>
          {props.name} {props.age}
        </h2>
        <div>
          <Chip hobby={props.hobbies[0]} />
          <Chip hobby={props.hobbies[1]} />
          <Chip hobby={props.hobbies[2]} />
        </div>
      </div>
      <div className="friend__rating">
        <span className="digit">{props.friendRating}</span>
        <img src="../img/star.png" alt="star" />
      </div>
      <img src="../img/winner.png" alt="winner" className="friend__badge" />
    </Card>
  );
};

export default Friend;
