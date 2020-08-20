import React, { Component } from "react";

import "./style.css";
import { IMAGE_DATA } from "../../data/image_data";

class SjImageLap extends Component {
  render() {
    const items = IMAGE_DATA.map((url, index) => (
      <img src={url} key={index}></img>
    ));
    return <div className={`row search-box-container`}>{items}</div>;
  }
}

export default SjImageLap;
