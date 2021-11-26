import React from "react";

const Audiolink = ({ data, searchLink, title }) => {
  const url = "https://youtube-dl-sp.herokuapp.com";
  return (
    <a
      href={`${url}/download?url=${searchLink}&itag=${data.itag}&type=${data.container}`}
    >
      {data.container} {data.audioBitrate}k
    </a>
  );
};

const Videolink = ({ data, searchLink, title }) => {
  const url = "https://youtube-dl-sp.herokuapp.com";
  return (
    <a
      href={`${url}/download?url=${searchLink}&itag=${data.itag}&type=${data.container}`}
    >
      {data.container} {data.qualityLabel}
    </a>
  );
};

export { Audiolink, Videolink };
