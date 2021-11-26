import React from "react";

const Audiolink = ({ link, data, searchLink, title }) => {
  // const url = "http://localhost:5000";
  return (
    <a href={link}>
      {data.container} {data.audioBitrate}k
    </a>
  );
};

const Videolink = ({ link, data, searchLink, title }) => {
  // const url = "http://localhost:5000";
  return (
    <a href={link}>
      {data.container} {data.qualityLabel}
    </a>
  );
};

export { Audiolink, Videolink };
