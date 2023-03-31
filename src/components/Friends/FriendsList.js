import { useState } from "react";
import Friend from "./Friend";
import Card from "../UI/Card";
import "./FriendsList.css";
import FriendFilter from "./FriendFilter";

const FriendsList = (props) => {
  const [filteredRating, setFilteredRating] = useState("0");

  const filterChangeHandler = (selectedRating) => {
    setFilteredRating(selectedRating);
  };

  return (
    <Card className="friends-list">
      <h2>Friends List</h2>
      <FriendFilter
        selected={filteredRating}
        onChangeFilter={filterChangeHandler}
      />
      <Friend
        name={props.friends[0].name}
        hobbies={props.friends[0].hobbies}
        age={props.friends[0].age}
        friendRating={props.friends[0].friendRating}
      />
      <Friend
        name={props.friends[1].name}
        hobbies={props.friends[1].hobbies}
        age={props.friends[1].age}
        friendRating={props.friends[1].friendRating}
      />
      <Friend
        name={props.friends[2].name}
        hobbies={props.friends[2].hobbies}
        age={props.friends[2].age}
        friendRating={props.friends[2].friendRating}
      />
      <Friend
        name={props.friends[4].name}
        hobbies={props.friends[4].hobbies}
        age={props.friends[4].age}
        friendRating={props.friends[4].friendRating}
      />
      <Friend
        name={props.friends[5].name}
        hobbies={props.friends[5].hobbies}
        age={props.friends[5].age}
        friendRating={props.friends[5].friendRating}
      />
      <Friend
        name={props.friends[6].name}
        hobbies={props.friends[6].hobbies}
        age={props.friends[6].age}
        friendRating={props.friends[6].friendRating}
      />
      <Friend
        name={props.friends[7].name}
        hobbies={props.friends[7].hobbies}
        age={props.friends[7].age}
        friendRating={props.friends[7].friendRating}
      />
    </Card>
  );
};

export default FriendsList;
