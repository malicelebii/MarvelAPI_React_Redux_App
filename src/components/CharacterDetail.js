import React from "react";

function CharacterDetail(props) {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container" style={{ display: "flex" }}>
          <div className="row">
            <div className="col">
              <img
                src={
                  props.detail
                    ? props.detail.thumbnail.path + "/standard_incredible.jpg"
                    : null
                }
                alt="Yüklenmedi"
              />
            </div>
            <div className="col">
              <h3>{props.detail.name}</h3>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row" style={{ border: "solid 1px" }}>
          <div className="col-md-7">
            <div className="table">
              <thead>
                <th>Comics</th>
              </thead>
              <tbody>
                {props.comics.map((comic) => (
                  <tr>
                    {" "}
                    <td scope="row"> {comic.title} </td>
                  </tr>
                ))}
              </tbody>
            </div>
          </div>
          <div className="col-md-5">
             <strong>Description:</strong>
            {props.detail.description
              ? props.detail.description
              : "There is no description"}
          </div>
          <a href="/characters" className="btn btn-secondary">
            {" "}
            Geri
          </a>
        </div>
      </div>
    </>
  );
}

export default CharacterDetail;
