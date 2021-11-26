import React from "react";

const Audiolink = ({ link, data, searchLink, title }) => {
  const url = "https://youtube-sp.herokuapp.com";
  // const url = "http://localhost:5000";
  return (
    <a
      href={`${url}/download?url=${searchLink}&itag=${data.itag}&type=${data.container}`}
    >
      {data.container} {data.audioBitrate}k
    </a>
  );
};

const Videolink = ({ link, data, searchLink, title }) => {
  const url = "https://youtube-sp.herokuapp.com";
  // const url = "http://localhost:5000";
  return (
    <a
      href={`${url}/download?url=${searchLink}&itag=${data.itag}&type=${data.container}`}
    >
      {data.container} {data.qualityLabel}
    </a>
  );
};

export { Audiolink, Videolink };
