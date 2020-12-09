import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCharacters } from "../_actions/characters_actions";
import Characters from "./Characters";
import $ from "jquery";

function CharactersList(props) {
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState([]);
  const [limit, setLimit] = useState(30);

  useEffect(() => {
    dispatch(getCharacters(limit))
      .then((response) => {
        setCharacters(response.payload.data.results);
        console.log(response.payload.data.results);
      })
      .catch((err) => console.log(err));
  }, [limit, dispatch]);

  //When Scroll at the bottom getting more character
  $(window).scroll(function (e) {
    if ($(window).scrollTop() + $(window).height() === $(document).height()) {
      if (limit < 50) {
        setLimit(limit + 15);
      }
    }
  });

  return (
    <div>
      <Characters characters={characters} />
    </div>
  );
}

export default CharactersList;
