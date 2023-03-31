import Present from "./Present";
import Card from "../UI/Card";
import "./PresentsList.css";

const PresentsList = (props) => {
  return (
    <Card className="presents-list">
      <h2>Preffered presents list</h2>
      <Present name={props.items[0].name} />
      <Present name={props.items[1].name} />
      <Present name={props.items[2].name} />
    </Card>
  );
};

export default PresentsList;
