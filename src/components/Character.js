import React, { useState, useEffect } from "react";
import CharacterDetail from "./CharacterDetail";
import { useDispatch } from "react-redux";
import { getComics, getOneCharacters } from "../_actions/characters_actions";
import { useParams } from "react-router";

function Character() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const [detail, setDetail] = useState("");
  const [comics, setComics] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    dispatch(getOneCharacters(id))
    .then((response) => {
      setDetail(response.payload.data.results[0]);
    })
    .catch(err=>console.log(err))

    dispatch(getComics(id, limit))
    .then((response) => {
      setComics(response.payload.data.results);
    })
    .catch(err=>console.log(err))
  }, [id, limit, dispatch]);

  return <CharacterDetail detail={detail} comics={comics} />;
}

export default Character;
