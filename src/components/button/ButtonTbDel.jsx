import React from "react";

import { DeleteFilled } from "@ant-design/icons";

import "./buttontbdel.css";

const ButtonTbDel = (props) => {
  return (
    <button onClick={props.click} className="btn-tb-del">
      <DeleteFilled />
    </button>
  );
};

export default ButtonTbDel;
