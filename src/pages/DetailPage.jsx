import React from "react";

import "./css/detail.css";

import { useLocation, useNavigate } from "react-router-dom";

const DetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const navToHome = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <main>
      <div className="wrap-detail">
        <div className="grid-detail">
          <img
            className="img-dtl"
            src={state.bk.cover}
            title={state.bk.title}
          />
          <div className="text" key={state.bk.id}>
            <h3 className="title">{state.bk.title}</h3>
            <h4 className="desc">Description</h4>
            <p>{state.bk.desc}</p>
            <p>
              <b>Author: </b>
              {state.bk.author}
            </p>
            <p>
              <b>Genre: </b>
              {state.bk.genre}
            </p>
            <button className="btn-dtl" onClick={navToHome}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailPage;
