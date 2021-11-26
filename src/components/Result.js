import React from "react";

// components
import { Audiolink, Videolink } from "./Link";

const Result = ({ result, searchLink }) => {
  if (result.title === "initial") return <></>;

  const { audioFormats, formats } = result;
  const videoFormats = formats.filter((format) => format.container === "mp4");

  return (
    <div className="container">
      <div className="result">
        <div className="video-details">
          <img src={result.thumbnail} alt="thumbnail" />
          <h1 className="video-title">{result.title}</h1>
        </div>

        <div className="links">
          <div className="audio-links">
            <h3>Audio :</h3>
            {audioFormats.map((audio) => (
              <Audiolink
                link={audio.url}
                data={audio}
                title={result.title}
                searchLink={searchLink}
                key={Math.random()}
              />
            ))}
          </div>
          <div className="video-links">
            <h3>Video :</h3>
            {videoFormats.map((video) => (
              <Videolink
                link={video.url}
                data={video}
                searchLink={searchLink}
                title={result.title}
                key={Math.random()}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
