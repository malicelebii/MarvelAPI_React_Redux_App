import React from "react";
import { Link } from "react-router-dom";

function Characters(props) {
  let characters = props.characters.map((character) => (
    <div className="col-md-2">
        <div className="card mb-2" id="card">
      <Link to={"/character/" + character.id} id="link">
          <img
            src={character.thumbnail.path + "/standard_incredible.jpg"}
            className="card-img-top"
            id="card-img"
            alt="..."
            />
      </Link>
          <div className="card-body" id="card-body">
            <h5 className="card-title" style={{ color: "white" }}>
              {character.name}
            </h5>
          </div>
        </div>
    </div>
  ));
  return (
    <div className="container">
      <div className="row">{characters}</div>
    </div>
  );
}

export default Characters;
