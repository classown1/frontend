import React from "react";

export default function CoachingCard(props) {
  return (
    <div className="coaching-card">
      <div className="image">
        <img src={props.coachingOwnerPic} alt="ownerPic"  />
      </div>
      <div className="description">
        <p className="heading">{props.coachingName}</p>
        <p>{props.coachingOwnerName}</p>
        <p>Address:{props.address}</p>
        <p>Fees:{props.fees}</p>
        <p>Class:{props.class}</p>
      </div>
    </div>
  );
}
